import { useState,useEffect } from "react";
import { useAuth } from "../../Context/AuthContext";
import { GrFormClose, GrUpgrade } from "react-icons/gr";
import { Link } from "react-router-dom";
import { LiaSmile } from "react-icons/lia";
import { AiOutlineStar, AiOutlineUser } from "react-icons/ai";
import { SiBookstack, SiGithubsponsors } from "react-icons/si";
import { GoProject,GoCodespaces, GoOrganization, GoCopilot } from "react-icons/go";
import { RiGlobalLine } from "react-icons/ri";
import { BsCodeSquare } from "react-icons/bs";
import { SlChemistry, SlDocs } from "react-icons/sl";
import { FiSettings } from "react-icons/fi";

import { MdOutlineSupportAgent } from "react-icons/md";

export function MenuProfile() {
  const [open, setOpen] = useState(false);
  const { user,logout } = useAuth();
  
  const openMenu = () => {
    setOpen(!open);
    
  };

  const closeMenu = () => {
    setOpen(false);
   
  };

  
  return (
    <>
      <div onClick={openMenu}>
        <img
          src={
            user.photoURL ||
            "https://www.nicepng.com/png/detail/128-1280406_view-user-icon-png-user-circle-icon-png.png"
          }
          alt=""
          className="rounded-full object-cover w-6"
        />
      </div>
      {open && (
        <div className="fixed w-full h-full bg-gray-500 bg-opacity-[0.085] right-0 top-0 z-[10] " >
          
          <div className="absolute bg-white w-[250px] h-[100vh]  rounded-s-[8px] right-0 z-10">
            <div className="flex p-2 items-center w-full relative">
              <img
                src={
                  user.photoURL ||
                  "https://www.nicepng.com/png/detail/128-1280406_view-user-icon-png-user-circle-icon-png.png"
                }
                alt=""
                className="rounded-full object-cover w-6"
              />
              <p className="text-xs px-1">{user.email}</p>
              <GrFormClose
                className="absolute right-3 rounded  hover:bg-gray-100 opacity-50 h-6 w-7 p-px"
                onClick={closeMenu}
              />
            </div>
            <div>
            <ul className="px-2 overflow-y-scroll h-[35.9rem] lg:h-[33.9rem]">
              <li className="flex items-center gap-1 text-[0.8rem] p-2  hover:bg-gray-50">
                <LiaSmile/>
                <Link to="/homeprofile">Set status</Link>
              </li>
              <hr />
              <li className="flex items-center gap-1  text-[0.8rem] p-2 hover:bg-gray-50">
                <AiOutlineUser/>
                <Link to="/homeprofile">Your profile</Link>
              </li>
              <hr />
              <li className="flex items-center gap-1  text-[0.8rem] p-2 hover:bg-gray-50">
                <SiBookstack/>
                <Link to="/homeprofile">Your repositories</Link>
              </li>
              <li className="flex items-center gap-1  text-[0.8rem] p-2 hover:bg-gray-50">
                <GoProject/>
                <Link to="/homeprofile">Your projects</Link>
              </li>
              <li className="flex items-center gap-1  text-[0.8rem] p-2 hover:bg-gray-50">
                <GoCodespaces/>
                <Link to="/homeprofile">Your codespaces</Link>
              </li>
              <li className="flex items-center gap-1  text-[0.8rem] p-2 hover:bg-gray-50">
                <GoOrganization/>
                <Link to="/homeprofile">Your organizations</Link>
              </li>
              <li className="flex items-center gap-1  text-[0.8rem] p-2 hover:bg-gray-50">
                <RiGlobalLine/>
                <Link to="/homeprofile">Your enterprises</Link>
              </li>
              <li className="flex items-center gap-1  text-[0.8rem] p-2 hover:bg-gray-50">
                <AiOutlineStar/>
                <Link to="/homefavorite">Your stars</Link>
              </li>
              <li className="flex items-center gap-1  text-[0.8rem] p-2 hover:bg-gray-50">
                <SiGithubsponsors/>
                <Link to="/homeprofile">your sponsors</Link>
              </li>
              <li className="flex items-center gap-1 text-[0.8rem] p-2 hover:bg-gray-50">
                <BsCodeSquare/>
                <Link to="/homeprofile">your gists</Link>
              </li>
              <hr />
              <li className="flex items-center gap-1  text-[0.8rem] p-2 hover:bg-gray-50">
                <GrUpgrade/>
                <Link to="/homeprofile">upgrade</Link>
              </li>
              <li className="flex items-center gap-1  text-[0.8rem] p-2 hover:bg-gray-50">
                <RiGlobalLine/>
                <Link to="/homeprofile">Try Enterprise</Link>
              </li>
              <li className="flex items-center gap-1  text-[0.8rem] p-2 hover:bg-gray-50">
                <GoCopilot/>
                <Link to="/homeprofile">Try Copilot</Link>
              </li>
              <li className="flex items-center gap-1  text-[0.8rem] p-2 hover:bg-gray-50">
                <SlChemistry/>
                <Link to="/homeprofile">Feature preview</Link>
              </li>
              <li className="flex items-center gap-1  text-[0.8rem] p-2 hover:bg-gray-50">
                <FiSettings/>
                <Link to="/homeprofile">Settings</Link>
              </li>
              <hr />
              <li className="flex items-center gap-1  text-[0.8rem] p-2 hover:bg-gray-50">
                <SlDocs/>
                <Link to="/homeprofile">GitHub Docs</Link>
              </li>
              <li className="flex items-center gap-1  text-[0.8rem] p-2 hover:bg-gray-50">
                <MdOutlineSupportAgent/>
                <Link to="/homeprofile">GitHub Support</Link>
              </li>
              <li className="flex items-center gap-1  text-[0.8rem] p-2 hover:bg-gray-50">
                <button onClick={logout}>Sing Out</button>

              </li>
            </ul>
           
          </div>
          </div>

          
        </div>
      )}
    </>
  );
}
