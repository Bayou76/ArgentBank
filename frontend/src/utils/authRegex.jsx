// Vérifie si le nom est valide
export const isValidName = (name) => {
    // Le nom doit contenir seulement des lettres et peut inclure un trait d'union ou une apostrophe
    const namePattern = /^[a-zA-Z]+(?:[-']?[a-zA-Z]+)*$/;
    return namePattern.test(name);
};

// Vérifie si l'email est valide
export const isValidEmail = (email) => {
    // L'email doit suivre le format général "texte@texte.texte"
    const emailPattern = /^\S+@\S+\.\S+$/;
    return emailPattern.test(email);
};

// Vérifie si le mot de passe est valide
export const isValidPassword = (password) => {
    // Le mot de passe doit contenir au moins 3 caractères, avec au moins une lettre et un chiffre
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{3,}$/; 
    return passwordPattern.test(password);
};
