
import { faNfcDirectional } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Skills.css";

import html from "../../assets/skills/html.png";
import css from "../../assets/skills/css.png";
import js from "../../assets/skills/java-script.png";
import bootstrap from "../../assets/skills/pngegg.png";
import tailwind from "../../assets/skills/pngaaa.com-6447779.png";
import db from "../../assets/skills/database-storage.png";
import express from "../../assets/skills/icons8-express-js-480.png";
import firebase from "../../assets/skills/icons8-firebase-480.png";
import node from "../../assets/skills/pngwing.com.png";
import react from "../../assets/skills/physics.png";

const Skills = () => {
    return (

        <div className=" ms-[130px] skillbg -mt-[27%] relative pt-[34%] pb-4"  >
            <div className="w-full h-full bg-[rgba(10,17,36,.7)] absolute top-0 z-0"></div>
           <div className="z-10 relative customContaier" id="skills">
                <p className="text-5xl font-bold font1 text-center text-white skill" data-aos="zoom-in-down" data-aos-duration="900"> <FontAwesomeIcon  className="text-[#6fcaff] icon" icon={faNfcDirectional} /> Skills</p>
                <div className="grid grid-cols-4 gap-y-9 mt-20 mb-24 text-white w-[93%] mx-auto">
                    <div className="text-center border-2 border-white space-y-3 py-10 rounded-full w-[180px] h-[230px] hover:border-[#36b5ff] transition-all duration-300 bg-[rgba(0,0,0,.35)]" data-aos-duration="900" data-aos="fade-right">
                        <img className="w-16 mx-auto" src={html} alt="" />
                        <p className="text-lg font-semibold">HTML</p>
                        <p className="text-[#36b5ff] text-4xl">85%</p>
                    </div>
                    <div className="bg-[rgba(0,0,0,.35)] text-center border-2 space-y-3 py-10 rounded-full w-[180px] h-[230px] hover:border-[#24a2eb] transition-all duration-300" data-aos-duration="1400" data-aos="fade-right">
                        <img className="w-16 mx-auto" src={css} alt="" />
                        <p className="text-lg font-semibold">CSS</p>
                        <p className="text-[#36b5ff] text-4xl">85%</p>
                    </div>
                    <div className="text-center bg-[rgba(0,0,0,.35)] border-2 space-y-3 py-10 rounded-full w-[180px] h-[230px] hover:border-[#24a2eb] transition-all duration-300" data-aos-duration="1900" data-aos="fade-right">
                        <img className="w-16 mx-auto" src={js} alt="" />
                        <p className="text-lg font-semibold">JavaScript</p>
                        <p className="text-[#36b5ff] text-4xl">75%</p>
                    </div>
                    <div className="text-center bg-[rgba(0,0,0,.35)] border-2 space-y-3 py-10 rounded-full w-[180px] h-[230px] hover:border-[#24a2eb] transition-all duration-300" data-aos-duration="2400" data-aos="fade-right">
                        <img className="w-16 mx-auto" src={react} alt="" />
                        <p className="text-lg font-semibold">React</p>
                        <p className="text-[#36b5ff] text-4xl">70%</p>
                    </div>
                    <div className="text-center bg-[rgba(0,0,0,.35)] border-2 space-y-3 py-10 rounded-full w-[180px] h-[230px] hover:border-[#24a2eb] transition-all duration-300" data-aos-duration="900" data-aos="fade-right">
                        <img className="w-16 mx-auto" src={tailwind} alt="" />
                        <p className="text-lg font-semibold">Tailwind</p>
                        <p className="text-[#36b5ff] text-4xl">75%</p>
                    </div>
                    <div className="text-center bg-[rgba(0,0,0,.35)] border-2 space-y-3 py-10 rounded-full w-[180px] h-[230px] hover:border-[#24a2eb] transition-all duration-300" data-aos-duration="1400" data-aos="fade-right">
                        <img className="w-16 mx-auto" src={bootstrap} alt="" />
                        <p className="text-lg font-semibold">Bootstrap</p>
                        <p className="text-[#36b5ff] text-4xl">70%</p>
                    </div>
                    <div className="text-center bg-[rgba(0,0,0,.35)] border-2 space-y-3 py-10 rounded-full w-[180px] h-[230px] hover:border-[#24a2eb] transition-all duration-300" data-aos-duration="1900" data-aos="fade-right">
                        <img className="w-16 mx-auto" src={db} alt="" />
                        <p className="text-lg font-semibold">MongoDB</p>
                        <p className="text-[#36b5ff] text-4xl">60%</p>
                    </div>
                    <div className="text-center bg-[rgba(0,0,0,.35)] border-2 space-y-3 py-10 rounded-full w-[180px] h-[230px] hover:border-[#24a2eb] transition-all duration-300" data-aos-duration="2400" data-aos="fade-right">
                        <img className="w-16 mx-auto" src={firebase} alt="" />
                        <p className="text-lg font-semibold">Firebase</p>
                        <p className="text-[#36b5ff] text-4xl">65%</p>
                    </div>
                    <div className="text-center bg-[rgba(0,0,0,.35)] border-2 space-y-3 py-10 rounded-full w-[180px] h-[230px] hover:border-[#24a2eb] transition-all duration-300" data-aos-duration="900" data-aos="fade-right">
                        <img className="w-16 mx-auto" src={express} alt="" />
                        <p className="text-lg font-semibold">ExpressJS</p>
                        <p className="text-[#36b5ff] text-4xl">65%</p>
                    </div>
                    <div className="text-center bg-[rgba(0,0,0,.35)] border-2 space-y-3 py-10 rounded-full w-[180px] h-[230px] hover:border-[#24a2eb] transition-all duration-300" data-aos-duration="1400" data-aos="fade-right">
                        <img className="w-16 mx-auto" src={node} alt="" />
                        <p className="text-lg font-semibold">Node</p>
                        <p className="text-[#36b5ff] text-4xl">50%</p>
                    </div>
                    
                    
                </div>
           </div>
        </div>


    );
};

export default Skills;