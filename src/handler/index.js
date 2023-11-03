export default function formatNumber(x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "đ";
}

export function formatPhoneToString(inputNumber) {
	const formattedNumber = inputNumber
		.toString()
		.trim()
		.replace(/(\d{4})(\d{3})(\d{3})/, "$1 $2 $3");
	return formattedNumber;
}
