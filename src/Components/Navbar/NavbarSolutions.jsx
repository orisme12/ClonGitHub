import { useState } from "react"
export function NavbarSolutions() {
  const [open, setOpen] = useState(false)
  const handleOpen = () =>{
    setOpen(!open)
  }
  const handleMouseLeave = () => {
    setOpen(false); // Oculta el elemento cuando el cursor se retira
  };
  return (
    <div className="NavbarSolutions w-full md:w-[30%] flex flex-col " onClick={handleOpen} onMouseLeave={handleMouseLeave}>
      <button className="dropdown-btn-Solutions mt-8 md:mt-0 text-black font-bold hover:text-gray-500 bg-transparent cursor-pointer border-none w-full flex justify-around items-center md:flex-row md:justify-start md:gap-1 md:text-white  md:hover:text-gray-300">
        <p className=" text-[20px] md:text-[16px] ">Solutions</p> <i className="fa-solid fa-caret-down md:text-[16px]"></i>
      </button>
      {open &&
        <div className="NavbarListSolutions  bg-white md:border w-full md:rounded-[15px] md:absolute md:top-[70%] md:left-[35%] md:w-[250px]" >
        <ul className="ListNavbarSolutions  px-[75px] md:px-3 md:py-5 w-full">
             
              <li className="mb-[10px] mt-4 md:mt-0 md:md:text-xs text-[#4e4b4bd5] hover:text-customBlue "><h6 className="mb-0 text-[14px] md:text-xs text-black font-bold">For</h6></li>
              <li className="mb-[10px] text-[13px] md:text-xs text-[#4e4b4bd5] hover:text-customBlue ">Enterprise</li>
              <li className="mb-[10px] text-[13px] md:text-xs text-[#4e4b4bd5] hover:text-customBlue ">Teams</li>
              <li className="mb-[10px] text-[13px] md:text-xs text-[#4e4b4bd5] hover:text-customBlue ">Startups</li>
              <li className="mb-[10px] text-[13px] md:text-xs text-[#4e4b4bd5] hover:text-customBlue ">Education</li>
              <hr/>
              <li className="mb-[10px] mt-1 md:text-xs text-[#4e4b4bd5] hover:text-customBlue "><h6 className="mb-0 text-[14px] md:text-xs text-black font-bold">By Solution</h6></li>
              <li className="mb-[10px] text-[13px] md:text-xs text-[#4e4b4bd5] hover:text-customBlue ">CI/CD & Automation</li>
              <li className="mb-[10px] text-[13px] md:text-xs text-[#4e4b4bd5] hover:text-customBlue ">DevOps</li>
              <li className="mb-[10px] text-[13px] md:text-xs text-[#4e4b4bd5] hover:text-customBlue ">DevSecOps</li>
              <hr/>
              <li className="mb-[10px] mt-1 md:text-xs text-[#4e4b4bd5] hover:text-customBlue "><h6 className="mb-0 text-[14px] md:text-xs text-black font-bold">Resources</h6></li>
              <li className="mb-[10px] text-[13px] md:text-xs text-[#4e4b4bd5] hover:text-customBlue ">Customer Stories</li>
              <li className="mb-[10px] text-[13px] md:text-xs text-[#4e4b4bd5] hover:text-customBlue ">White Papers, Ebooks,Webinars</li>
              <li className="mb-[10px] text-[13px] md:text-xs text-[#4e4b4bd5] hover:text-customBlue ">Partners</li> 

        </ul>
            

      </div>
      }
      
          
    </div>
  )
}

