
import { useState } from "react"

export function NavbarProduct() {
  const [open, setOpen] = useState(false)

  const handleOpen = () =>{
    setOpen(!open)
  }
  const handleMouseLeave = () => {
    setOpen(false); // Oculta el elemento cuando el cursor se retira
  };
  return (
    <>
    <div className="NavbarProduct  flex flex-col items-center w-full md:w-[35%] md:flex md:justify-center" onClick={handleOpen} onMouseLeave={handleMouseLeave}>
    <button className="dropdown-btn-Solutions mt-8 md:mt-0 text-black font-bold hover:text-gray-500 bg-transparent cursor-pointer border-none w-full flex justify-around items-center md:flex-row md:justify-start md:gap-1 md:text-white  md:hover:text-gray-300">
        <p className=" text-[20px] md:text-[16px] ">Products</p> <i className="fa-solid fa-caret-down md:text-[16px]"></i>
      </button>
      {open && 
         <div className="NavbarListProducts w-full flex flex-col items-start md:flex-row md:justify-center gap-[2px] bg-[#fff] md:absolute md:top-[70%] md:left-[10%] md:w-[400px] p-[12px] rounded-lg" >
            <ul className="dropdown-content m-0 px-10 md:px-0 md:w-[65%] md:border-r md:border-r-gray-6000">

              <li className="hover:text-customBlue flex items-center w-full px-5 mt-2 md:mt-0 md:p-[3px] ">
                <div className="CodeReview flex flex-col w-[16%] p-[0px 5px] text-start">
                  <i className="fa-solid fa-vial"></i>
                </div>
              
                <div className="Subtitles w-[80%]">
                  <h6 className="m-b-[2px] mt-0 font-bold">Actions</h6>
                  <p className="m-[1%] text-xs text-[#4e4b4bd5] font-normal">Automate any Workflow</p>
                </div>
                
              </li>
              <li className="hover:text-customBlue flex items-center w-full px-5  mt-2 md:mt-0 md:p-[3px]">
                <div className="CodeReview flex flex-col w-[16%] p-[0px 5px] text-start">
                <i className="fa-solid fa-cubes-stacked"></i>
                </div>
              
                <div className="Subtitles w-[80%]">
                  <h6 className="m-b-[2px] mt-0 font-bold">Packages</h6>
                  <p  className="m-[1%] text-xs text-[#4e4b4bd5] font-normal">Host and manage packages</p>
                </div>
                
              </li>
              <li className="hover:text-customBlue flex items-center w-full px-5  mt-2 md:mt-0 md:p-[3px]">
                <div className="CodeReview flex flex-col w-[16%] p-[0px 5px] text-start">
                  <i className="fa-solid fa-shield-halved"></i>
                </div>
              
                <div className="Subtitles w-[80%]">
                  <h6 className="m-b-[2px] mt-0 font-bold">Security</h6>
                  <p className="m-[1%] text-xs text-[#4e4b4bd5] font-normal">Find and fix vulnerabilities</p>
                </div>
              
              </li>
              
              <li className="hover:text-customBlue flex items-center w-full px-5  mt-2 md:mt-0 md:p-[3px]">
                <div className="CodeReview flex flex-col w-[16%] p-[0px 5px] text-start">
                <i className="fa-regular fa-clipboard"></i>
                </div>
              
                <div className="Subtitles w-[80%]">
                  <h6 className="m-b-[2px] mt-0 font-bold">Codespaces</h6>
                  <p  className="m-[1%] text-xs text-[#4e4b4bd5] font-normal">Instant dev environments</p>
                </div>
              </li>

              <li className="hover:text-customBlue flex items-center w-full px-5  mt-2 md:mt-0 md:p-[3px]">
              <div className="CodeReview flex flex-col w-[16%] p-[0px 5px] text-start">
                <i className="fa-solid fa-gear"></i>
              </div>
                <div className="Subtitles w-[80%]">
                  <h6 className="m-b-[2px] mt-0 font-bold">Copilot</h6>
                  <p  className="m-[1%] text-xs text-[#4e4b4bd5] font-normal">Write better code with AI</p>
                </div>
              </li>

              <li className="hover:text-customBlue flex items-center w-full px-5  mt-2 md:mt-0 md:p-[3px]">
                <div className="CodeReview flex flex-col w-[16%] p-[0px 5px] text-start">
                  <i className="fa-solid fa-diagram-project"></i>
                </div>
              
                <div className="Subtitles w-[80%]">
                  <h6 className="m-b-[2px] mt-0 font-bold">Code review</h6>
                  <p  className="m-[1%] text-xs text-[#4e4b4bd5] font-normal">Manage code changes</p>
                </div>
              </li>

              <li className="hover:text-customBlue flex items-center w-full px-5  mt-2 md:mt-0 md:p-[3px]">
                <div className="CodeReview flex flex-col w-[16%] p-[0px 5px] text-start">
                  <i className="fa-solid fa-box-tissue"></i>
                </div>
                <div className="Subtitles w-[80%]">
                  <h6 className="m-b-[2px] mt-0 font-bold">Issues</h6>
                  <p  className="m-[1%] text-xs text-[#4e4b4bd5] font-normal">Plan and track work</p>
                </div>
              </li>

              <li className="hover:text-customBlue flex items-center w-full px-5  mt-2 md:mt-0 md:p-[3px]">

                <div className="CodeReview flex flex-col w-[16%] p-[0px 5px] text-start">
                <i className="fa-brands fa-discourse"></i>
                </div>
                
                <div className="Subtitles w-[80%]">
                  <h6 className="m-b-[2px] mt-0 font-bold">Discussions</h6>
                  <p  className="m-[1%] text-xs text-[#4e4b4bd5] font-normal">Collaborate Outside of code</p>
                </div>
              </li>
              

            </ul>
            <div className="NavExplore px-14 md:px-[15px]">
              <h6 className="md:px-4 mt-0 mb-0 text-[14px] font-bold ">Explore</h6>
              <p className="md:text-xs text-[#4e4b4bd5] font-normal hover:text-customBlue mt-2 text-[14px] md:mt-[3px]">All features</p>
              <p className="md:text-xs text-[#4e4b4bd5] font-normal hover:text-customBlue mt-2 text-[14px] md:mt-[3px]">Documentation</p>
              <p className="md:text-xs text-[#4e4b4bd5] font-normal hover:text-customBlue mt-2 text-[14px] md:mt-[3px]">Github Skills</p>
              <p className="md:text-xs text-[#4e4b4bd5] font-normal hover:text-customBlue mt-2 text-[14px] md:mt-[3px]">Blog</p>
            </div>

          </div>
      }
      
          
    </div>
    </>
    
  )
}

