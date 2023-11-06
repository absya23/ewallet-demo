import axios from "axios";
import queryString from "query-string";

const apiConfig = {
    baseUrl: "https://api.fpt.ai/hmi/tts/v5",
  };

const axiosClient = axios.create({
  baseURL: apiConfig.baseUrl,
  //url gốc
  headers: {
    "Content-Type": "application/json",
    "api_key": "OsDyxdcTJktm097ePIwozcsTUaXDX6pA",
    "voice": "minhquang"
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

const postText = (payload) => {
    const url = "";
    return axiosClient.post(url, payload);
}

const playVoice = async (payload) => {
    const response = await postText(payload);
    console.log(response)
    setTimeout(
      () => {
        if (response) {
          const sound = new Audio(response.async)
          if (sound) sound.play();
        }
      }, 2000)
}

const playVoiceAPI = {
    welcome: () => {
      playVoice("Chào mừng bạn đến với voice payment app")
    },
    checkBalance: (balance) => {
      playVoice(`Số dư hiện tại của bạn là ${balance}`)
    },
    withdraw: () => {
      playVoice("Bạn muốn rút bao nhiêu nhỉ?");
    },
    deposit: () => {
      playVoice("Bạn muốn nạp bao nhiêu nhỉ?");
    },    
    withdrawSuccess: (amount) => {
      playVoice(`Đã rút thành công ${amount}`);
    },    
    depositSuccess: (amount) => {
      playVoice(`Đã nạp thành công ${amount}`);
    },    
    transfer: () => {
      playVoice("Bạn muốn chuyển bao nhiêu và đến cho ai nhỉ");
    },  
    transferSuccess: (amount, name) => {
      playVoice(`Đã chuyển cho ${name} ${amount}`);
    },
    notClear: () => {
      playVoice("Xin lỗi tôi chưa nghe rõ bạn nói, hãy nói lại nhé");
    },
    error: () => {
      playVoice("Đã có lỗi xảy ra, hãy thử lại nhé");
    },
} 

export default playVoiceAPI;