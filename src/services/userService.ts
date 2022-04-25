import endpoints from "./endpoints";
import ServiceClass from "./ServiceClass";

class UserService extends ServiceClass {
    getAll = async () => {
        const response = await this.callService(
            endpoints.masterUser.getAll,
            "GET",
        )
        return response;
    }
    activate = async (id: string) => {
        const resposne = await this.callService(
            endpoints.masterUser.activate,
            "POST",
            { id }
        )
    }
}

export default new UserService();