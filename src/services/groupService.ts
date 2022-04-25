import endpoints from "./endpoints";
import ServiceClass from "./ServiceClass";


export interface AddGroupRequest {
  pic: string;
  coPic?: string;
  name: string;
  startDate: string;
  endDate: string;
  groupType: string;
  readingPlanId: string;
  statusActive: boolean;
}

class GroupService extends ServiceClass {
    getAll = async () => {
        const response = await this.callService(
            endpoints.masterGroup.getAll,
            "GET",
        )
        return response;
    }
    add = async (request: AddGroupRequest) => {
        await this.callService(
            endpoints.masterGroup.save,
            "POST",
            request
        )
    }
}


export default new GroupService();