export function validatePassword(password) {
    let passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!_%*?&^])[A-Za-z\d@.#$!_%*?&]{8,15}$/;
    //at least a small letter, al least a capital letter, at least a number, 
    //at least a special character, length between 8, 15 

    return passwordRegex.test(password);
}

export function validateEmail(email) {
    let emailRegex = /^[a-zA-Z0–9._-]+@[a-zA-Z0–9.-]+\.[a-zA-Z]{2,4}$/;

    return emailRegex.test(email);
}

export function validatePhone(phone) {
    let phoneRegex = /^\d{3}-?\d{4}-?\d{4}$/;

    return phoneRegex.test(phone);
}



