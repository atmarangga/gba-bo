import ServiceClass from "./ServiceClass";
import endpoints from "./endpoints";

export interface AddressAddRequest {
    address: string;
}

export interface AddressEditRequest {
    id: string;
    address: string;
}

export interface AddressDeleteRequest {
    id: string;
    address: string;
}


class AddressService extends ServiceClass {
    getAll = async () => {
        const response = await this.callService(
            endpoints.masterAddress.getAll,
            "GET",
        )
        return response;
    }
    add = async (request: AddressAddRequest) => {
        const response = await this.callService(
            endpoints.masterAddress.add,
            "POST",
            request
        )
        return response;
    }
    edit = async (request: AddressEditRequest) => {
        const response = await this.callService(
            endpoints.masterAddress.edit,
            "POST",
            request
        )
        return response;
    }
    delete = async (request: AddressDeleteRequest) => {
        const response = await this.callService(
            endpoints.masterAddress.delete,
            "POST",
            request
        );
        return response;
    }
}


export default new AddressService();
