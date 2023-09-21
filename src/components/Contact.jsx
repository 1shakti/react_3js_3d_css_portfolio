import React, { useRef, useState } from "react";
import { slideIn } from "../utils/motion";
import { motion } from "framer-motion";
import SectionWrapper from "../hoc/SectionWrapper";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import Swal from "sweetalert2";

const Contact = () => {
	const formRef = useRef(null);
	const [form, setForm] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [loading, setLoading] = useState(false);

  const message = ({icon,message}) => {
    Swal.fire({
      title: message,
      icon: icon,
      showConfirmButton: true,
      background: '#170945',
      confirmButtonText: 'Ok',
    })
  }

  const reset = () => {
    setForm({
      name: "",
      email: "",
      message: "",
    });
  }

  const sendEmail = () => {
    setLoading(true);
    emailjs.send('service_0nnzeie','template_eyug5ed',{
      from_name:form.name,
      to_name:'Shakti',
      from_email:form.email,
      to_email:'shakti26.sj@gmail.com',
      message: form.message
    },'cV_sxOkxWu_DhelXT')
    .then(() => {
      setLoading(false);
      reset();
      message({icon:'success',message:'Thank You, We will get back to you as soon as possible.'});
    }, (error) => {
      setLoading(false);
      message({icon:'error',message:'Something went wrong...'});
    } );
  }

	const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value
    }))

  };

	const handleSubmit = (e) => {
    e.preventDefault();
    sendEmail();
  };

	return (
		<div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden ">
			<motion.div
				variants={slideIn("left", "tween", 0.2, 1)}
				className="flex-[0.75]  bg-black-100 p-8 rounded-2xl"
			>
				<p className={`${styles.sectionSubText}`}>Get in touch</p>
				<h3 className={`${styles.sectionHeadText}`}>Contact.</h3>

				<form
					ref={formRef}
					onSubmit={(e) => handleSubmit(e)}
					className="mt-12 flex flex-col gap-8"
				>
					<label className="flex flex-col">
						<span className="text-white font-medium mb-4">Your Name</span>
						<input
							type="text"
							name="name"
              value={form.name}
              onChange={(e) => handleChange(e)}
							placeholder="What's your name?"
							className=" bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
						/>
					</label>
          <label className="flex flex-col">
						<span className="text-white font-medium mb-4">Your Email</span>
						<input
							type="email"
							name="email"
              value={form.email}
              onChange={(e) => handleChange(e)}
							placeholder="What's your email?"
							className=" bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
						/>
					</label>
          <label className="flex flex-col">
						<span className="text-white font-medium mb-4">Your Message</span>
						<textarea
              rows={7}
							name="message"
              onChange={(e) => handleChange(e)}
							placeholder="What do you want to say?"
							className=" bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
						/>
					</label>
          <div className="mt-6 inset-0 flex flex-row justify-center" >
            <button
              type="submit"
              className=" bg-tertiary py-3 px-8 w-fit text-white outline-none rounded-2xl shadow-md shadow-primary"
            >{loading ? "Sending..." : "Send"}</button>
          </div>
				</form>
			</motion.div>
      <motion.div
        variants={slideIn("right","tween",0.2,1)}
        className="xl:flex-1 xl:h-auto md:h-[500px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
		</div>
	);
};

export default SectionWrapper(Contact, "contact");
