import endpoints from "./endpoints";
import ServiceClass from "./ServiceClass";

export interface LoginRequest {
    username: string;
    password: string;
}

class LoginService extends ServiceClass {
    login = async (request: LoginRequest) => {
        const response = await this.publicService(
            endpoints.login.login, "POST", {
            email: request.username, password: request.password
        }
        );
        console.log({response});
        return response;
    }
}


export default new LoginService();