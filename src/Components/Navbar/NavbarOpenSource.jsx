import { useState } from "react"
export function NavbarOpenSource() {

  const [open, setOpen] = useState(false)
  const handleOpen = () =>{
    setOpen(!open)
  }
  const handleMouseLeave = () => {
    setOpen(false); // Oculta el elemento cuando el cursor se retira
  };

  return (
    <div className="NavbarOpenSource flex flex-col items-center  w-full md:w-[35%]" onClick={handleOpen} onMouseLeave={handleMouseLeave} >
     <button className="dropdown-btn-Solutions mt-8 md:mt-0 text-black font-bold hover:text-gray-500 bg-transparent cursor-pointer border-none w-full flex justify-around items-center md:flex-row md:justify-start md:gap-1 md:text-white  md:hover:text-gray-300">
        <p className=" text-[20px] md:text-[16px] ">Open Source</p> <i className="fa-solid fa-caret-down md:text-[16px]"></i>
      </button>
      {open && 
      <div className="NavbarListOpenSource w-full  md:bg-white md:border md:rounded-[15px] md:absolute md:top-[70%] md:left-[65%] md:w-[250px]" >
      <ul className="ListNavbarOpenSource w-full px-[69px] md:py-4 md:px-3">
           
            <li className="mb-[10px] mt-5 text-[#4e4b4bd5] hover:text-customBlue "><h6 className="mb-0 text-[14px] md:text-xs text-black font-bold mt-1">GitHub Sponsors</h6></li>
            <li className="mb-[10px] text-[13px] md:text-xs text-[#4e4b4bd5] hover:text-customBlue ">Fund open source developers</li>
            <hr/>
            <li className="mb-[10px] mt-1   text-[#4e4b4bd5] hover:text-customBlue "><h6 className="mb-0 text-[14px] md:text-xs text-black font-bold mt-1">The ReadME Project</h6></li>
            <li className="mb-[10px] text-[13px] md:text-xs text-[#4e4b4bd5] hover:text-customBlue ">GitHub community articles</li>
            <hr/>
            <li className="mb-[10px] mt-1  text-[#4e4b4bd5] hover:text-customBlue "><h6 className="mb-0 text-[14px] md:text-xs text-black font-bold mt-1">Repositories</h6></li>
            <li className="mb-[10px] text-[13px] md:text-xs text-[#4e4b4bd5] hover:text-customBlue ">Topics</li>
            <li className="mb-[10px] text-[13px] md:text-xs text-[#4e4b4bd5] hover:text-customBlue ">Trending</li>
            <li className="mb-[10px] text-[13px] md:text-xs text-[#4e4b4bd5] hover:text-customBlue ">Collections</li> 

      </ul>
          

    </div>
      }
      
          
    </div>
  )
}

