import { useState } from "react";
import mail from "../assets/images/mail.webp";

const ContactForm = () => {
	const [formData, setFormData] = useState({
		userName: "",
		email: "",
		message: "",
	});
	const [nameError, setNameError] = useState(false);
	const [emailError, setEmailError] = useState(false);

	const nameRGX = /^[a-z0-9_-]{3,15}$/;
	const emailRGX = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;

	const validName = nameRGX.test(formData.userName);
	const validEmail = emailRGX.test(formData.email);
	const btnColor = !validName || !validEmail ? "bg-[#73C1B3]" : "bg-[#128c76]";

	const submitHandler = (e) => {
		e.preventDefault();

		if (!validName) return setNameError(true);
		if (!validEmail) return setEmailError(true);

		console.log(formData);
		setFormData({
			userName: "",
			email: "",
			message: "",
		});
	};

	return (
		<section className="py-[5rem] flex flex-col sm:flex-row justify-center items-center xl:items-start gap-[5rem] sm:gap-[10rem] lg:px-[5rem]">
			<div className="hidden w-[60%] h-full lg:flex justify-center items-center">
				<img src={mail} alt="mail image" className="w-full h-auto" />
			</div>
			<div className="p-6 lg:p-0 w-full sm:w-[70%] xl:w-[50%] text-center">
				<h3 className="text-[30px] text-[#128C76] font-bold mb-4">
					Get In Touch!
				</h3>
				<form
					className="flex flex-col gap-6 mt-[2rem]"
					onSubmit={submitHandler}
					noValidate
				>
					<input
						type="text"
						placeholder="Your Name"
						className="w-full py-2 px-4 text-[20px] placeholder:text-[#818181] text-[#333333] border-2 border-solid border-#128C76 outline-none rounded-[10px]"
						value={formData.userName}
						onChange={(e) => {
							setFormData({ ...formData, userName: e.target.value });
							if (validName) {
								setNameError(false);
							}
						}}
						onBlur={() => {
							if (!validName) {
								setNameError(true);
							} else {
								setNameError(false);
							}
						}}
					/>
					{nameError && (
						<p className="text-[#B32D1B] mt-[-20px] self-start">
							Please enter a valid name
						</p>
					)}
					<input
						type="email"
						placeholder="E-mail"
						className="w-full py-2 px-4 text-[20px] placeholder:text-[#818181] text-[#333333] border-2 border-solid border-#128C76 outline-none rounded-[10px]"
						value={formData.email}
						onChange={(e) => {
							setFormData({ ...formData, email: e.target.value });
							if (validEmail) {
								setEmailError(false);
							}
						}}
						onBlur={() => {
							if (!validEmail) {
								setEmailError(true);
							} else {
								setEmailError(false);
							}
						}}
					/>
					{emailError && (
						<p className="text-[#B32D1B] mt-[-20px] self-start">
							Please enter a valid Email
						</p>
					)}
					<textarea
						className="resize-none h-[200px] w-full py-2 px-4 text-[20px] placeholder:text-[#818181] text-[#333333] border-2 border-solid border-#128C76 outline-none rounded-[10px]"
						placeholder="Message (optional)"
						value={formData.message}
						onChange={(e) =>
							setFormData({ ...formData, message: e.target.value })
						}
					></textarea>
					<button
						disabled={!validName || !validEmail}
						type="submit"
						className={`w-full py-2 text-white font-bold text-[20px] ${btnColor} rounded-[10px]`}
					>
						Send
					</button>
				</form>
			</div>
		</section>
	);
};

export default ContactForm;
