import React, { useEffect } from "react";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import api, { playVoiceAPI } from '../api';

const Voice = () => {
	// useEffect(() => {
	// 	setTimeout(() => playVoiceAPI.welcome(), 1000)
	// }, [])

	const user = JSON.parse(window.localStorage.getItem("user") || {})
	const commands = [
		{
		  command: 'kiểm tra tài khoản',
		  callback: () => playVoiceAPI.checkBalance(user.balance)
		},
		{
		  command: 'kiểm tra số dư',
		  callback: () => playVoiceAPI.checkBalance(user.balance)
		},
		{
		  command: 'nạp tiền',
		  callback: () => playVoiceAPI.deposit()
		},
		{
		  command: 'nạp *',
		  callback: (amount) => {
			//TODO xử lý nạp tiền
			playVoiceAPI.depositSuccess(amount)
		  }
		},
		{
		  command: 'rút tiền',
		  callback: () => playVoiceAPI.withdraw()
		},
		{
		  command: 'rút *',
		  callback: (amount) => {
			//TODO xử lý rút tiền
			playVoiceAPI.withdrawSuccess(amount)
		  }
		},
		{
		  command: 'chuyển tiền',
		  callback: () => playVoiceAPI.transfer()
		},
		{
		  command: 'chuyển * (đến) cho *',
		  callback: (amount, receiver) => {
			//TODO check name hay số điện thoại -> xử lý chuyển tiền
			playVoiceAPI.transferSuccess(amount, receiver)
		  }
		},
		// {
		//   command: '*',
		//   callback: () => playVoiceAPI.notClear()
		// },
	  ]

	  const {
		transcript,
		listening,
		resetTranscript,
		browserSupportsSpeechRecognition
	  } = useSpeechRecognition({commands});
	
	  if (!browserSupportsSpeechRecognition) {
		return <span>Browser doesn't support speech recognition.</span>;
	  }
	return (
		<button className={`voice-bot ${listening ? "active" : ""}`} onClick={listening ? SpeechRecognition.stopListening : SpeechRecognition.startListening}>
			<i className="bx bxs-microphone"></i>
		</button>
	);
};

export default Voice;
