import endpoints from "./endpoints";
import ServiceClass from "./ServiceClass";

export interface AddAdminRequest {
    name: string;
    username: string;
    password: string;
    email: string;
}

class AdminService extends ServiceClass {
    add = async (request: AddAdminRequest) => {
        const response = await this.callService(
            endpoints.masterAdmin.add,
            "POST",
            request
        )
        return response;
    }
}

export default new AdminService();