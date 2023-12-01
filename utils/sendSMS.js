import axios from "axios";

// send sms

export const sendSMS = async (to, msg) => {
	let me =  await axios.get(
		`http://bulksmsbd.net/api/smsapi?api_key=I5L9HW0C5dHLkUeZXebE&type=text&number=01868944080&senderid=8809612443880&message=TestSMS`
	);
	console.log(me);
};
