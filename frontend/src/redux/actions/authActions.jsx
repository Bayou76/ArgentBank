import { loginSuccess } from '../reducers/authReducer';

// Fonction pour récupérer les informations utilisateur
const fetchUserProfile = async (token) => {
    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    });

    if (response.ok) {
        const data = await response.json();
        return data.body; 
    } else {
        throw new Error("Failed to fetch user profile");
    }
};

export const login = (credentials) => async (dispatch) => {
    try {
        const response = await fetch("http://localhost:3001/api/v1/user/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials),
        });

        if (response.ok) {
            const data = await response.json();
            const token = data.body.token;

            // Stocker le token dans sessionStorage et/ou localStorage
            sessionStorage.setItem("token", token);
            if (credentials.rememberMe) {
                localStorage.setItem("token", token);
            }

            // Récupérer les informations utilisateur
            const userProfile = await fetchUserProfile(token);

            // Dispatcher les informations utilisateur
            dispatch(loginSuccess(userProfile));
        } else {
            throw new Error("Incorrect email/password");
        }
    } catch (error) {
        console.error("Failed to login:", error);
    }
};
