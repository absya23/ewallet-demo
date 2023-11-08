import axios from "axios";
import queryString from "query-string";
import {Howl, Howler} from 'howler';

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
    console.log(payload)
    const response = await postText(payload);
    console.log(response)
    setTimeout(
      () => {
        if (response) {
          // const sound = new Audio(response.async)
          // if (sound) sound.play();
          const sound = new Howl({
            src: [response.async],
            format: ['mp3'],
            autoplay: true,
            volume: 0.5
          });
          
          sound.play();
        }
      }, 2000)
}

const playVoiceAPI = {
    welcome: () => {
      playVoice("Chào mừng bạn đến với voice payment app")
    },
    checkBalance: (balance) => {
      playVoice(`Số dư hiện tại của bạn là ${balance} đồng`)
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
      playVoice("Bạn muốn chuyển cho ai nhỉ");
    },
    transferNumber: () => {
      playVoice("Bạn muốn chuyển bao nhiêu nhỉ");
    }, 
    transferSuccess: (amount, name) => {
      playVoice(`Đã chuyển cho ${name} ${amount}`);
    },
    confirm: () => {
      playVoice("Hãy kiểm tra lại nhé, nếu đúng hãy nói xác nhận");
    },
    notClear: () => {
      playVoice("Xin lỗi tôi chưa nghe rõ bạn nói, hãy nói lại nhé");
    },
    error: () => {
      playVoice("Đã có lỗi xảy ra, hãy thử lại nhé");
    },
    success: () => {
      playVoice("Giao dịch thành công")
    },
    notEnough: () => {
      playVoice("Số dư của bạn không đủ để thực hiện giao dịch")
    },
    cannotFind: () => {
      playVoice("Không tìm thấy người này, bạn hãy nhập số điện thoại để tìm nhé")
    },
} 

export default playVoiceAPI;