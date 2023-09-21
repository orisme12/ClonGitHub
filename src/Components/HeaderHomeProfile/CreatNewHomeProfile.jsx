import { useState } from "react";
import { Link } from "react-router-dom";
import { LiaBookSolid } from "react-icons/lia";
import { RiContactsBookUploadFill } from "react-icons/ri";
import { MdComputer } from "react-icons/md";
import { BsBuildingAdd, BsCode, BsFillBuildingFill } from "react-icons/bs";

export function CreatNewHomeProfile() {
  const [abrir, setAbrir] = useState(false);

  const toggleMenu = () => {
    setAbrir(!abrir);
  };

  return (
    <>
      <div onClick={toggleMenu}>
        <box-icon
          name="plus"
          style={{ width: "18px", opacity: "0.5" }}
        ></box-icon>
        <box-icon
          type="solid"
          name="down-arrow"
          style={{ width: "10px", opacity: "0.2" }}
        ></box-icon>
      </div>

      {abrir && (
        <div className="absolute w-40 bg-white right-1 rounded border py-2 flex justify-center z-10">
          <ul className="p-1 m-0 w-full px-2">
            <li className="flex items-center mt-1 hover:bg-gray-100  hover:rounded w-full py-1" >
                <LiaBookSolid />
              <Link className="px-2 text-xs">
                 New Repository
              </Link>
            </li>
            <li className="flex items-center mt-2 mb-2  hover:bg-gray-100  hover:rounded py-1 ">
             <RiContactsBookUploadFill />
              <Link className=" px-2 text-xs">
               
                Import Repository
              </Link>
            </li>
            <hr />
            <li className="flex items-center mt-2  hover:bg-gray-100  hover:rounded py-1 ">
                <MdComputer />
              <Link className=" px-2 text-xs">
                New CodeSpace
              </Link>
            </li>
            <li className="flex items-center mt-2 mb-2  hover:bg-gray-100  hover:rounded  py-1">
                <BsCode />
              <Link className="px-2 text-xs">
                
                New gist
              </Link>
            </li>
            <hr />
            <li className="flex items-center mt-2  hover:bg-gray-100  hover:rounded  py-1">
                <BsFillBuildingFill />
              <Link className=" px-2 text-xs">
             
               
                New Organization
              </Link>
            </li>
            <li className="flex items-center mt-2  hover:bg-gray-100  hover:rounded py-1 ">
                <BsBuildingAdd />
                <Link className="px-2 text-xs ">
                
                New project
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
