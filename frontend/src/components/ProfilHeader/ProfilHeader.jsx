import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from '../../redux/reducers/profileReducer';
import { loginSuccess } from '../../redux/reducers/authReducer';

function ProfilHeader() {
    const user = useSelector((state) => state.auth.user);
    const dispatch = useDispatch();

    // État local pour la gestion de l'édition du profil
    const [displayEditForm, setDisplayEditForm] = useState(false);
    const [firstname, setFirstname] = useState(user ? user.firstName : '');
    const [lastname, setLastname] = useState(user ? user.lastName : '');
    const [errorMessage, setErrorMessage] = useState('');

    // Fonction pour gérer le clic sur le bouton "Edit Name"
    const handleEditClick = () => {
        setFirstname(user.firstName); // Met à jour le prénom dans l'état local
        setLastname(user.lastName); // Met à jour le nom de famille dans l'état local
        setDisplayEditForm(true); // Affiche le formulaire d'édition
    }

    // Fonction pour envoyer la requête PUT à l'API pour mettre à jour le profil
    const updateProfileInDB = async (updatedProfile) => {
        const token = sessionStorage.getItem("token") || localStorage.getItem("token"); 
        if (!token) {
            throw new Error("No token found");
        }
    
        try {
            const response = await fetch("http://localhost:3001/api/v1/user/profile", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`, 
                },
                body: JSON.stringify(updatedProfile),
            });
    
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || "Failed to update profile");
            }
    
            const data = await response.json();
            return data.body; 
        } catch (error) {
            throw error; 
        }
    }
    

    // Fonction pour gérer la soumission du formulaire d'édition du profil
    const handleSubmitProfile = async (event) => {
        event.preventDefault(); // Empêche le comportement par défaut du formulaire

        try {
            // Crée un objet contenant les champs de profil mis à jour
            const updatedProfile = {
                firstName: firstname,
                lastName: lastname,
            };

            // Met à jour le profil dans la base de données
            const updatedUserProfile = await updateProfileInDB(updatedProfile);

            // Dispatche une action Redux pour mettre à jour le profil dans le store
            dispatch(updateProfile(updatedUserProfile));
            // Met à jour les informations de l'utilisateur dans le store auth
            dispatch(loginSuccess(updatedUserProfile));

            // Cache le formulaire d'édition après soumission réussie
            setDisplayEditForm(false);
        } catch (error) {
            // Si une erreur se produit pendant la soumission
            console.error(error); // Affiche l'erreur dans la console
            setErrorMessage(error.message || "An error occurred. Please try again."); // Affiche un message d'erreur
        }
    }
    
    return (
        <div className="header">
            { !displayEditForm ? 
                <div>
                    <h1>Welcome back</h1>
                    {user && <h2>{user.firstName} {user.lastName}</h2>}
                    <button className="edit-button" onClick={handleEditClick}>Edit Name</button>
                </div>
                :
                <div>
                    <h1>Edit user info</h1>
                    <form onSubmit={handleSubmitProfile}>
                        <input
                            type="text"
                            placeholder="First name"
                            value={firstname}
                            onChange={(event) => setFirstname(event.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Last name"
                            value={lastname}
                            onChange={(event) => setLastname(event.target.value)}
                        />
                        <div className="buttons">
                            <button type="submit" className="edit-username-button">Save</button>
                            <button type="button" className="edit-username-button" onClick={() => setDisplayEditForm(false)}>Cancel</button>
                        </div>
                        {errorMessage && <p className="error-message">{errorMessage}</p>}
                    </form>
                </div>
            }
        </div>
    )
}

export default ProfilHeader;
