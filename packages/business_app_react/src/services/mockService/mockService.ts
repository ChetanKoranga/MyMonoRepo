import { httpService } from "..";
import { API_CONSTANTS } from "../../data/constants";

class MockService {
  getTodoData(id:any) {
    return httpService.get(`${API_CONSTANTS.GET_TODO_DATA}/${id}`);
  }
}

export default new MockService();
