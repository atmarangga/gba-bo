import { _IS_ERROR, _TOKEN } from "../constants";
import endpoints from "./endpoints";
import ServiceClass from "./ServiceClass";
export interface MasterDataCountry {
    name: string;
    phoneCode: string;
    id: string;
}
export interface SearchRequest { }

export interface AddRequest {
    name: string;
    phoneCode: string;
}

export interface DeleteRequest extends MasterDataCountry { }
export interface EditRequest extends MasterDataCountry { }

class CountryService extends ServiceClass {
    getAll = async (request: SearchRequest) => {
        const response = await this.callService(
            endpoints.masterCountry.getAll,
            "GET",
        )
        return response;
    }
    add = async (request: AddRequest) => {
        const response = await this.callService(
            endpoints.masterCountry.add,
            "POST",
            request
        )
        return response;
    }
    delete = async (request: DeleteRequest) => {
        const response = await this.callService(
            endpoints.masterCountry.delete,
            "POST",
            request
        );
        return response;
    }
    edit = async (request: EditRequest) => {
        const response = await this.callService(
            endpoints.masterCountry.edit,
            "POST",
            request
        )
        return response;
    }
}

export default new CountryService();