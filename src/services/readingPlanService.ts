import endpoints from "./endpoints";
import ServiceClass from "./ServiceClass";


export interface AddReadingPlanRequest {
    plainPerDay: number | string;
    file: any;
    name: any;
}

class GroupService extends ServiceClass {
    getAll = async () => {
        const response = await this.callService(
            endpoints.masterReadingPlan.getAll,
            "GET",
        )
        return response;
    }
    add = async (request: FormData) => {
        const response = await this.callService(
            endpoints.masterReadingPlan.save,
            "POST",
            request,
            true
        )
        return response;
    }
    delete = async (request: { id: string | number }) => {
        const response = await this.callService(
            `${endpoints.masterReadingPlan.delete}${request.id}`,
            "DELETE",
            {}
        )
        return response;
    }
}


export default new GroupService();