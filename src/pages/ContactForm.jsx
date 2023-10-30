import { useState } from "react";
import mail from "../assets/images/mail.webp";

const ContactForm = () => {
	const [formData, setFormData] = useState({
		subject: "",
		message: "",
	});

	return (
		<section className="py-[5rem] flex flex-col sm:flex-row justify-center items-center xl:items-start gap-[5rem] sm:gap-[10rem] lg:px-[5rem]">
			<div className="hidden w-[60%] h-full lg:flex justify-center items-center">
				<img src={mail} alt="mail image" className="w-full h-auto" />
			</div>
			<div className="p-6 lg:p-0 w-full sm:w-[70%] xl:w-[50%] text-center">
				<h3 className="text-[30px] main-font text-[#128C76] font-bold mb-4">
					Get In Touch!
				</h3>
				<form className="flex flex-col gap-6 mt-[2rem]" noValidate>
					<input
						type="text"
						placeholder="Title"
						className="w-full py-2 px-4 text-[20px] placeholder:text-[#818181] text-[#333333] border-2 border-solid border-#128C76 outline-none rounded-[10px]"
						value={formData.subject}
						onChange={(e) =>
							setFormData({ ...formData, subject: e.target.value })
						}
					/>

					<textarea
						className="resize-none h-[200px] w-full py-2 px-4 text-[20px] placeholder:text-[#818181] text-[#333333] border-2 border-solid border-#128C76 outline-none rounded-[10px]"
						placeholder="Message (optional)"
						value={formData.message}
						onChange={(e) =>
							setFormData({ ...formData, message: e.target.value })
						}
					></textarea>
					<a
						href={`mailto:jamal@saltusintgrated.com?subject=${formData.subject}&body=${formData.message}`}
					>
						<button
							type="button"
							className={`w-full py-2 text-white font-bold text-[20px] bg-[#128c76] rounded-[10px]`}
						>
							Send
						</button>
					</a>
				</form>
			</div>
		</section>
	);
};

export default ContactForm;
