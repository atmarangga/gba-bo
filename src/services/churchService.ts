import endpoints from "./endpoints";
import ServiceClass from "./ServiceClass";


export interface ChurchAddRequest {
    name: string;
}

export interface ChurchEditRequest {
    name: string;
    id: string;
}
export interface ChurchDeleteRequest {
    name: string;
    id: string;
}

class ChurchService extends ServiceClass {
    getAll = async () => {
        const response = await this.callService(
            endpoints.masterChurch.getAll,
            "GET",
        )
        return response;
    }
    add = async (request: ChurchAddRequest) => {
        const response = await this.callService(
            endpoints.masterChurch.add,
            "POST",
            request
        )
        return response;
    }
    edit = async (request: ChurchEditRequest) => {
        const response = await this.callService(
            endpoints.masterChurch.edit,
            "POST",
            request
        )
        return response;
    }
    delete = async (request: ChurchDeleteRequest) => {
        const response = await this.callService(
            endpoints.masterChurch.delete,
            "POST",
            request
        );
        return response;
    }
}

export default new ChurchService();