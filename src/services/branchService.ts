import ServiceClass from "./ServiceClass";
import endpoints from './endpoints';

export interface BranchAddRequest {
    name: string;
}
export interface BranchEditRequest {
    id: string;
    name: string;
}
export interface BranchDeleteRequest {
    id: string;
    name: string;
}

export interface BranchDeleteRequest extends BranchEditRequest {

}
class BranchService extends ServiceClass {
    getAll = async () => {
        const response = await this.callService(
            endpoints.masterBranch.getAll,
            "GET",
        )
        return response;
    }
    add = async (request: BranchAddRequest) => {
        const response = await this.callService(
            endpoints.masterBranch.add,
            "POST",
            request
        )
        return response;
    }
    edit = async (request: BranchEditRequest) => {
        const response = await this.callService(
            endpoints.masterBranch.edit,
            "POST",
            request
        )
        return response;
    }
    delete = async (request: BranchDeleteRequest) => {
        const response = await this.callService(
            endpoints.masterBranch.delete,
            "POST",
            request
        );
        return response;
    }
}

export default new BranchService();