import React, { useEffect, useState } from "react";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import api, { playVoiceAPI } from '../api';
import { mapMoney } from "../services";

const Voice = ({commands}) => {
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
		<>
			<button className={`voice-bot ${listening ? "active" : ""}`} onClick={listening ? SpeechRecognition.stopListening : SpeechRecognition.startListening}>
				<i className="bx bxs-microphone"></i>
			</button>
			<span style={{
				position: "absolute",
				bottom: "30px",
				right: "150px",
			}}>{transcript}</span>
		</>
	);
};

export default Voice;
