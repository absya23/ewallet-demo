import axios from "axios";
import queryString from "query-string";
import playVoiceAPI from "./textToSpeech";
 
const apiConfig = {
    baseUrl: "https://yceduxycolfzyblzfrfh.supabase.co/rest/v1/",
  };

const axiosClient = axios.create({
  baseURL: apiConfig.baseUrl,
  //url gốc
  headers: {
    "Content-Type": "application/json",
    "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InljZWR1eHljb2xmenlibHpmcmZoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTgxMzcwMDUsImV4cCI6MjAxMzcxMzAwNX0.TOvlPwZvKSOPrggdaCs8oH9scGnA7recFaKO2q8U-ig",
    "Prefer": "return=representation",
  },
  paramsSerializer: (params) => queryString.stringify({ ...params }),
});

axiosClient.interceptors.request.use(
  async (config) => {
    return config;
  },
  (error) => {
    throw error;
  }
);

axiosClient.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    throw error;
  }
);

const api = {
    //GET
    getAllUser: (ID, params) => {
        const url = "Users";
        return axiosClient.get(url, params);
    },
    getUserById: (ID, params) => {
      const url = "Users?userId=eq." + String(ID);
      return axiosClient.get(url, params);
    },
    getTransactions: (ID, params) => {
      const url = "Transactions?order=timeStamp.desc";
      return axiosClient.get(url, params);
    },
    getFriends: (ID, params) => {
      const url = "Friends";
      return axiosClient.get(url, params);
    },
    //POST******************************************************
    postUser: (payload) => {
        const url = "Users";
        return axiosClient.post(url, payload);
    },
    postTransaction: (payload) => {
      const url = "Transactions";
      return axiosClient.post(url, payload);
    },
    
    //PUT***************************
    updateUser: (id, payload) => {
        const url = "Users?userId=eq." + String(id);
        return axiosClient.patch(url, payload);
    },

    //DELETE*****************************
    deleteSubject: (id) => {
        const url = "subject/" + String(id);
        return axiosClient.delete(url);
    },
};

export default api;
export { playVoiceAPI }