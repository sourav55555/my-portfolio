import aboutimg from "../../assets/0514191111c.jpg";

const About = () => {
  return (
    <div
      className="h-auto ms-0 md:ms-[130px] z-40 bg-transparent relative"
      id="about"
    >
      <div className=" lg:w-[820px] h-[51.5rem] lg:h-[660px] w-[94%] -mt-[21rem] md:-mt-[330px] mx-auto bg-[rgb(51,59,68)] py-8 px-5 lg:p-20 font2 ">
        <div className="rounded-full w-fit border-4 border-[#147cb9] mx-auto mb-10 md:mb-16" data-aos="zoom-in-down" data-aos-duration="900">
          <img className="w-32 h-32 rounded-full" src={aboutimg} alt="" />
        </div>
        <div>
          <p className="text-center text-white" data-aos-duration="1000" data-aos="fade-right">
            I am a passionate and dedicated web developer with a strong
            background in creating visually stunning and highly functional
            websites. I have 3 years of learning experience and now I am
            searching for a job, for a better career in this field. I have
            skills in React, MongoDB, ExpressJS, Tailwind, Bootstrap, etc. As a
            web developer, my aim is to create user-friendly, fully responsive
            web applications that utilize the latest innovative technologies and
            high performance. I am expanding my knowledge continuously and am
            capable of staying up-to-date with the latest updates and
            technologies.
            <br /> <br /> Thank you for visiting my portfolio. I am excited to showcase
            my work and discuss how I can contribute to your next web
            development project. Let's collaborate and create something
            extraordinary together.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
