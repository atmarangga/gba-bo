import { _IS_ERROR, _TOKEN } from "../constants";
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
        const { data, isError } = response;
        if (isError && isError === _IS_ERROR.No) {
            const { token } = data;
            localStorage.setItem(_TOKEN, token);
        } else {
            localStorage.clear();

        }
        return response;
    }
}

export default new LoginService();