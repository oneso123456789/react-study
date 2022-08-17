import axios from "axios";

const Board_Api_Base_Url = "http://8080:api/list";

class apiService{

    fetchBoard(){
        return axios.get(Board_Api_Base_Url);
    }

}

export default apiService;