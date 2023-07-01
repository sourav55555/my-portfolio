import "./Home.css";
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import myImage from '../../assets/snew.png';
import myVideo from '../../assets/network_-_12716 (1080p).mp4';
import { useEffect, useRef } from "react";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {

    const [text] = useTypewriter({
        words: ['Full - Stack Developer', 'Front - End Developer', 'MERN Stack Developer'],
        loop: 3,
        typeSpeed: 60,
        deleteSpeed: 40,
        delaySpeed: 2000,
        onLoopDone: () => console.log(`loop completed after 3 runs.`)
      })

      const videoRef= useRef();

      useEffect(() => {
        videoRef.current.playbackRate = 0.3;
     }, []);

    return (
        <div className="md:ps-[130px] p-0 h-[calc(100vh+60%)] md:h-[calc(100%+70%)] bg-no-repeat background relative">
            <div className="bg-[rgba(114,121,143,.6)] h-full lg:h-[calc(100vh+41%)] w-full md:w-[calc(100%-130px)] absolute z-10"></div>

            <video  ref={videoRef} className="vid" src={myVideo} autoPlay loop muted></video>

            <div className="customContaier ps-6 md:ps-28 lg:ps-0">

                <div className="w-[640px] mx-auto content z-20 absolute top-[27vh] lg:top-16">
                    <div className="font1 text-white" data-aos="zoom-out-right"  data-aos-easing="linear" data-aos-duration="900">
                        <h2 className="md:text-[66px] text-5xl font-bold">I <span className="text-[#008ce3]">'</span> M</h2>
                        <h2 className="md:text-[70px] text-5xl  font-bold name">Sourav</h2>
                        <h2 className="md:text-[70px] text-5xl  font-bold name">Singha</h2>
                    </div>
                    <div className="md:text-3xl text-2xl text-white font2 mt-12" data-aos="zoom-out-right"  data-aos-easing="linear" data-aos-duration="1100">
                        <span className="block">I am a</span>
                        <span className="">{text}</span>
                        <Cursor cursorColor='hsl(140,100%,42%)' />
                    </div>
                    <div className="mt-12" data-aos="zoom-out-right"  data-aos-easing="linear" data-aos-duration="1300" data-aos-offset="100">
                        <a className="px-8 py-3 border-[3px] bg-[#003d60] border-[#003d60] hover:bg-[#0077c1] rounded-2xl text-white transition-all duration-200 shadow-lg shadow-slate-600" href="./Sourav_singha_full_stack_resume.pdf" download>Download Resume <FontAwesomeIcon className="ms-2" icon={faDownload} /></a>
                    </div>
                </div>
            </div>
            <div className="absolute h-full overflow-hidden top-8 lg:right-0 right-[50%] lg:translate-x-0 translate-x-[50%] lg:w-[36%] bannerimg px-6 pt-6 pb-0 z-20" >

                <img className="imgpart opacity-70" src={myImage} alt="" data-aos="zoom-in-up" data-aos-duration="900"/>
            </div>
            
        </div>
    );
};

export default Home;