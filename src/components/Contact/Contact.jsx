import email from "../../assets/icons/68885-email.gif";
import phone from "../../assets/icons/83684-phone.gif";
import locations from "../../assets/icons/77365-location-lottie-animation.gif";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNfcDirectional } from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import "./Contact.css"

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4jnuosj', 'template_km8pxvp', form.current, 'BYbd-PQs6IICMWgrQ')
      .then((result) => {
          console.log(result);
      }, (error) => {
          console.log(error);
      });
  };

  return (
    <div
      className=" lg:ms-[130px] relative pt-10 pb-52 contactbg"
      
    >
      <div className="lg:w-[880px] w-[94%] -mt-[440px] lg:-mt-[340px] mx-auto bg-[rgb(51,59,68)] pt-12 pb-16 px-6 lg:px-20 font2 h-auto" id="contact">

          <p className="text-[2.7rem] font-bold font1 text-center text-white skill" data-aos="zoom-in-down" data-aos-duration="900"> <FontAwesomeIcon  className="text-[#6fcaff] icon block lg:inline mx-auto" icon={faNfcDirectional} /> Contact Me</p>

        <div className="flex items-start gap-12 justify-center lg:flex-row flex-col mt-16">
          <div className=" space-y-8 text-white lg:w-1/2 mt-0 lg:mt-12" data-aos="zoom-in-right" data-aos-duration="1000">
            <div className="flex items-center gap-4">
              <img className="h-10 w-10 rounded-full" src={email} alt="" />
              <p>souravsingha146@gamil.com</p>
            </div>
            <div className="flex items-center gap-4">
              <img className="h-10 w-10 rounded-full" src={phone} alt="" />
              <p>+8801674907646</p>
            </div>
            <div className="flex items-center gap-4">
              <img className="h-10 w-10 rounded-full" src={locations} alt="" />
              <p>Dhaka-1000, Bangladesh</p>
            </div>
          </div>
          <div className="lg:w-1/2 w-full font2 text-white">
            <form className="space-y-4" ref={form} onSubmit={sendEmail} data-aos="fade-right" data-aos-duration="1900">
              <div >
                  <label className="block mb-2">Name *</label>
                  <input className="px-4 py-2 bg-[rgba(225,225,225,.2)] border-b outline-none w-full rounded-2xl" type="text" name="from_name" placeholder="Your Name" required/>
              </div>
              <div>
                  <label className="block mb-2">Email *</label>
                  <input className="px-4 py-2 bg-[rgba(225,225,225,.2)] border-b outline-none w-full rounded-2xl" type="email" name="from_email" placeholder="Your Email" />
              </div>
              <div>
                  <label className="block mb-2">Message *</label>
                  <textarea className="px-4 py-2 bg-[rgba(225,225,225,.2)] border-b outline-none w-full rounded-2xl" name="message" rows={5} />
              </div>
              <button className="w-full text-center bg-[#003d60] py-2 rounded-2xl shadow-md shadow-slate-900 cursor-pointer hover:bg-[#0077c1] ] transition-all duration-300" type="submit">Send <FontAwesomeIcon className="ms-2" icon={faPaperPlane} /></button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
