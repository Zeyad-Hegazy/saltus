import { useState } from "react";
import mail from "../assets/images/mail.png";

const ContactForm = () => {
	const [formData, setFormData] = useState({
		userName: "",
		email: "",
		message: "",
	});

	const submitHandler = (e) => {
		e.preventDefault();
		console.log(formData);
		setFormData({
			userName: "",
			email: "",
			message: "",
		});
	};

	return (
		<div className="section_settings flex flex-col sm:flex-row justify-center items-center xl:items-start gap-[5rem] sm:gap-[10rem]">
			<div className="w-[60%] h-full flex justify-center items-center">
				<img src={mail} alt="mail image" className="w-full h-auto" />
			</div>
			<div className="w-full sm:w-[70%] xl:w-[50%] text-center">
				<h3 className="text-[60px] text-[#128C76] font-bold mb-4">
					Get In Touch!
				</h3>
				<form className="flex flex-col gap-6" onSubmit={submitHandler}>
					<input
						type="text"
						placeholder="Username"
						className="w-full py-4 px-8 text-[30px] placeholder:text-[#818181] text-[#333333] border-2 border-solid border-#128C76 outline-none rounded-[15px]"
						value={formData.userName}
						onChange={(e) =>
							setFormData({ ...formData, userName: e.target.value })
						}
					/>
					<input
						type="text"
						placeholder="E-mail"
						className="w-full py-4 px-8 text-[30px] placeholder:text-[#818181] text-[#333333] border-2 border-solid border-#128C76 outline-none rounded-[15px]"
						value={formData.email}
						onChange={(e) =>
							setFormData({ ...formData, email: e.target.value })
						}
					/>
					<textarea
						className="resize-none h-[200px] w-full py-4 px-8 text-[30px] placeholder:text-[#818181] text-[#333333] border-2 border-solid border-#128C76 outline-none rounded-[15px]"
						placeholder="Message (optional)"
						value={formData.message}
						onChange={(e) =>
							setFormData({ ...formData, message: e.target.value })
						}
					></textarea>
					<button
						type="submit"
						className="w-full py-4 text-white font-bold text-[40px] mainBg rounded-[15px]"
					>
						Send
					</button>
				</form>
			</div>
		</div>
	);
};

export default ContactForm;
