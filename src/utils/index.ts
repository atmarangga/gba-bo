export function authenticationCheck() {
    try {
        const token = localStorage.getItem('token')
        return token !== null && token !== undefined && token !== '';
    }
    catch (err) {
        return false;
    }
}