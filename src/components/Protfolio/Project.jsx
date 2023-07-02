import { faAngleLeft, faAngleRight, faCircleInfo, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import "./Project.css";
import { Button, Modal, Box } from "@mui/material";
import { useEffect } from "react";


const Project = ({ proj, ind }) => {
  const { name, description, technology, main, live, client, server, images } = proj;

  const [resModal, setResModal] = useState(false);

  
  if (server) {
    console.log("server");
  }

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // slider
  const [currentImage, setCurrentImage] = useState(0);

  const handlePrevious = () => {
    setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1);
  };

  const handleNext = () => {
    setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1);
  };

  return (
    <div className="p-3 bg-[rgb(83,89,106)] border-2 hover:border-[#6fcaff] border-[#cdcdcd] rounded-2xl relative cardmain transition-all duration-300" data-aos-duration={(ind*300) + 900} data-aos="fade-right">
      <div className="lg:h-[290px] h-[370px] overflow-hidden rounded-xl no-scrollbar">
        <img className="rounded-xl" src={images[0]} alt="" />
      </div>
      <div className="absolute bg-[rgb(83,89,106)] p-4 text-center w-[90%] left-[18px] rounded-xl font2 text-white bottom-4 ">
        <p className="font-semibold">{name}</p>
        <div className="links">
          <div className="flex gap-2 items-center justify-center">
            <a target="_" className="button1" href={live}>
              Visit <FontAwesomeIcon className="ms-1" icon={faEye} />
            </a>

            {/* buttons  */}
            <button className="button1" onClick={handleOpen}>
              Details <FontAwesomeIcon className="ms-1" icon={faCircleInfo} />
            </button>


          </div>
          <div className="flex gap-2 items-center justify-center mt-2">
            <a className="button1" href={client} target="_">
              Client Code
            </a>
            {server && (
              <a className="button1" href={server} target="_">
                Server Code
              </a>
            )}
          </div>
        </div>
      </div>

      {/* modal */}

      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "fit-content",
            minWidth: 1000,
            height: "83%",
            bgcolor: "rgb(51,59,68)",
            boxShadow: 24,
            p: 5,
            '@media (max-width: 768px)': {
              width: '94%',
              minWidth: "94%",
          },
          }}
        >
          <div className="flex justify-center gap-10 text-white h-[92%]">
            <div className="w-2/5 hidden lg:block">
              <div className="relative h-full overflow-y-auto">
                {images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Image ${index + 1}`}
                    className={`absolute top-0 left-0 w-full h-fit transition-opacity duration-500 ${
                      index === currentImage ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}
                <button
                  onClick={handlePrevious}
                  className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-500 hover:bg-gray-700 text-white px-2 py-1 rounded-l focus:outline-none"
                >
                  <FontAwesomeIcon icon={faAngleLeft} />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-500 hover:bg-gray-700 text-white px-2 py-1 rounded-r focus:outline-none"
                >
                  <FontAwesomeIcon icon={faAngleRight} />
                </button>
              </div>
            </div>
            <div className="font2 w-full p-3 lg:w-3/5 space-y-6 lg:overscroll-none overflow-y-auto text-slate-100">
              <h2 className="font1 text-3xl">{name}</h2>
              <p>
                <span className="font-bold text-white">Description: </span>{" "}
                {description}
              </p>
              <p>
                <span className="font-bold text-white">Technology: </span> {technology}
              </p>
            </div>
          </div>
          <div className="w-full text-right mt-5">
            <button className="ms-auto border-4 rounded-2xl text-white border-red-600 px-4 py-1" onClick={handleClose}>Close</button>
          </div>
        </Box>
      </Modal>




      <div className={`absolute top-0 left-0 w-full h-screen overflow-y-scroll lg:hidden ${resModal ? "block" : "hidden"}`}>
      <div className=" text-white h-fit bg-[rgb(51,59,68)]">
            <div className="w-full">
              <div className="relative h-full overflow-y-auto">
                {images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Image ${index + 1}`}
                    className={`absolute top-0 left-0 w-full h-fit transition-opacity duration-500 ${
                      index === currentImage ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}
                <button
                  onClick={handlePrevious}
                  className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-500 hover:bg-gray-700 text-white px-2 py-1 rounded-l focus:outline-none"
                >
                  <FontAwesomeIcon icon={faAngleLeft} />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-500 hover:bg-gray-700 text-white px-2 py-1 rounded-r focus:outline-none"
                >
                  <FontAwesomeIcon icon={faAngleRight} />
                </button>
              </div>
            </div>
            <div className="font2 w-full space-y-6 text-slate-100">
              <h2 className="font1 text-3xl">{name}</h2>
              <p>
                <span className="font-bold text-white">Description: </span>{" "}
                {description}
              </p>
              <p>
                <span className="font-bold text-white">Technology: </span> {technology}
              </p>
            </div>
          </div>
          <div className="w-full text-right mt-5">
            <button className="ms-auto border-4 rounded-2xl text-white border-red-600 px-4 py-1" onClick={handleClose}>Close</button>
          </div>
      </div>
    </div>
  );
};

export default Project;
