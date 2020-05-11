const axios = require("axios");
interface LocalAxiosGetParams {
    url: string,
}
export const HTTP = {
    Get: async (params: LocalAxiosGetParams) => {
        return axios({
            method: "get",
            headers: { accept: "application/json" },
            url: params.url,
          })
        .then((response: any) => {
            // handle success
            return response.data.content;
        })
        .catch((error: any) => {
            // handle error
            console.log(error);
        })
    },
    Post: async (params: any) => {
        return axios.post(params.url, params.data)
        .then((response: any) => {
            // handle success
            return response.data.content;
        })
        .catch((error: any) => {
            // handle error
            console.log(error);
            return error;
        })
    },
    Put: async (params: any) => {
        return axios.put(params.url, params.data)
        .then((response: any) => {
            // handle success
            return response.data.content;
        })
        .catch((error: any) => {
            // handle error
            console.log(error);
            return error;
        })
    }
}