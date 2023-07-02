import { faNfcDirectional } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef } from "react";
import { useState } from "react";
import Project from "./Project";



const Portfolio = () => {

    const [projects, setProjects] = useState([]);

    const [show, setShow] = useState(false);
    const [proj, setProj] = useState(6);

    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setProjects(data))
    }, [])

   useEffect(()=>{
    if(show){
        setProj(projects.length);
    }
    else{
        setProj(6);
    }
   }, [show])


    return (
        <div className=" bg-[rgb(105,114,138)] lg:ms-[130px] p-6" id="portfolio">



            <div className="lg:w-[84%] mx-auto py-20">
                <p className="text-5xl font-bold font1 text-center text-white skill" data-aos="zoom-in-down" data-aos-duration="900"> <FontAwesomeIcon  className="text-[#6fcaff] icon mb-6" icon={faNfcDirectional} /> Portfolio</p>
                <p className="mt-8 text-white font1 mx-auto text-center text-3xl" data-aos="zoom-in-down" data-aos-duration="900">My all works related to my skills</p>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-20">
                    {
                        projects.slice(0,proj).map((project, index) => <Project key={index} ind={index} proj={project}/>)
                    }
                </div>
                <div className="text-center mt-12">
                    { !show && <button className="px-8 py-3 border-2 bg-[#003d60] border-[#003d60] hover:bg-[#0077c1] rounded-2xl text-white transition-all duration-200 shadow-lg shadow-slate-600"  onClick={() => setShow(true)}>Show All</button>}
                </div>
                <div className="h-[400px] bg-transparent">

                </div>
            </div>
        </div>
    );
};

export default Portfolio;