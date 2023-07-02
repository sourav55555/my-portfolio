import {
  faBarsProgress,
  faBarsStaggered,
  faHome,
  faMobileScreen,
  faTableColumns,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import "./Navbar.css";

const navbar = () => {

  const [sidebar, setSidebar] = useState(false);


  return (
    <>
    {/* responsive nav  */}

    <nav className="w-full md:hidden flex justify-between items-center p-4 bg-[rgb(103,109,130)] navborder">
        <div className="logo-name ms-1 text-white">
          <a href="#top">
            <span className="s">S</span>
            <span className="ourav">ourav</span>
          </a>
        </div>
        <button onClick={() => setSidebar(!sidebar)} className="text-xl px-3 py-1 text-white rounded-2xl bg-[#004a77]">
          <FontAwesomeIcon icon={faBarsStaggered} />
        </button>
      </nav>

      <div className={`w-[130px] h-screen bg-[rgb(103,109,130)] absolute md:fixed navborder z-40 ${sidebar ? "left-0": "md:left-0 -left-[133px]"}`}>
      <div className="py-2 border-b md:block hidden">
        <div className="logo-name text-white">
          <a href="#top">
            <span className="s">S</span>
            <span className="ourav">ourav</span>
          </a>
        </div>
      </div>

      <div className="mt-16">
        <ul className="space-y-6 font2 text-white text-sm">
          <li className="cursor-pointer">
            <HashLink
              className="flex flex-col gap-1 items-center justify-center"
              smooth
              to="#top"
              onClick={() => setSidebar(!sidebar)}
            >
              <span className="bg-[#004a77] py-2 w-2/5 text-center rounded-full">
                <FontAwesomeIcon className="w-4 h-5" icon={faHome} />
              </span>{" "}
              Home
            </HashLink>
          </li>
          <li>
            <HashLink onClick={() => setSidebar(!sidebar)}
              className="flex flex-col gap-1 items-center justify-center"
              smooth
              to="#about"
            >
              <span className="bg-[#004a77] py-2 w-2/5 text-center rounded-full">
                <FontAwesomeIcon className="w-4 h-5" icon={faUser} />
              </span>{" "}
              About
            </HashLink>
          </li>
          <li>
            <HashLink onClick={() => setSidebar(!sidebar)}
              className="flex flex-col gap-1 items-center justify-center"
              smooth
              to="#skills"
            >
              <span className="bg-[#004a77] py-2 w-2/5 text-center rounded-full">
                <FontAwesomeIcon className="w-4 h-5" icon={faBarsProgress} />
              </span>{" "}
              Skills
            </HashLink>
          </li>
          <li>
            <HashLink onClick={() => setSidebar(!sidebar)}
              className="flex flex-col gap-1 items-center justify-center"
              smooth
              to="#portfolio"
            >
              <span className="bg-[#004a77] py-2 w-2/5 text-center rounded-full">
                <FontAwesomeIcon className="w-4 h-5" icon={faTableColumns} />
              </span>{" "}
              Portfolio
            </HashLink>
          </li>
          <li>
            <HashLink onClick={() => setSidebar(!sidebar)}
              className="flex flex-col gap-1 items-center justify-center"
              smooth
              to="#contact"
            >
              <span className="bg-[#004a77] py-2 w-2/5 text-center rounded-full">
                <FontAwesomeIcon className="w-4 h-5" icon={faMobileScreen} />
              </span>{" "}
              Contact
            </HashLink>
          </li>
          <li></li>
        </ul>
      </div>
    </div>
    </>
    
  );
};

export default navbar;
