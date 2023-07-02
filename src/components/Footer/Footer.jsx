import { faFacebook, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Footer = () => {
    return (
        <div className=" bg-[rgb(40,43,53)] lg:ms-[130px] pt-12 pb-10">
            <div className="text-center space-y-7">
                <p className="text-3xl font-bold font1 text-center text-white"> Sourav Singha</p>
                <div className="">
                    <a className="px-3 py-2 text-xl bg-[#6fcaff] rounded-xl hover:bg-transparent hover:border hover:text-white transition-all duration-300" href="https://www.facebook.com/sourav555/"><FontAwesomeIcon icon={faFacebook} /></a>
                    <a className="px-3 py-2 text-xl bg-[#6fcaff] rounded-xl hover:bg-transparent hover:border hover:text-white transition-all duration-300 ms-4" href="https://github.com/sourav55555"><FontAwesomeIcon icon={faGithub} /></a>
                    <a className="px-3 py-2 text-xl bg-[#6fcaff] rounded-xl hover:bg-transparent hover:border hover:text-white transition-all duration-300 ms-4" href="https://www.linkedin.com/in/sourav-singha-459163253/"><FontAwesomeIcon icon={faLinkedin} /></a>
                </div>
                <p className="text-white">© 2023 copyright all right reserved</p>
            </div>
        </div>
    );
};

export default Footer;