import { NavLogo } from "../Components/Navbar/NavLogo";
import { NavbarProduct } from "../Components/Navbar/NavbarProduct";
import { NavbarSolutions } from "../Components/Navbar/NavbarSolutions";
import { NavbarOpenSource } from "../Components/Navbar/NavbarOpenSource";
import { SingIn } from "../Components/Buttons/SingIn";
import { SingUp } from "../Components/Buttons/SingUp";
import { useState } from "react";

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false); // Estado para controlar la apertura/cierre del menú móvil

  return (
    <>
      <div className="Contenedor">
        <img
          className="DronImage w-40 md:w-[300px]"
          src="https://github.githubassets.com/images/modules/site/home-campaign/hero-drone.webp"
          alt=""
          width="500"
          height="326"
        ></img>
        <header className="w-full">
          <nav className="flex flex-row-reverse w-full h-[60px] items-center md:flex-row md:w-auto">
            <div className="w-[60%] flex justify-start md:w-[10%]">
              <NavLogo />
            </div>

            <div className="CapsuladoNav hidden flex-col items-center absolute h-16 w-[45%] md:flex md:flex-row md:relative">
              <NavbarProduct />
              <NavbarSolutions />
              <NavbarOpenSource />
            </div>

            <div className="NavSecciones w-[35%]  flex justify-start md:w-[40%] md:justify-end ">
              <SingIn />
              <SingUp />
            </div>

            <div
              className="md:hidden text-white absolute right-1"
              style={{
                opacity: menuOpen ? 0 : 1, 
                transition: "opacity 0.1s ease-in-out",
              }}
            >
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="block  hover:text-white focus:text-white focus:outline-none text-white"
              >
                <box-icon name="menu" color="#fffcfc"></box-icon>
              </button>
            </div>
          </nav>

          {menuOpen && (
            <div
              className="fixed top-0 right-0 left-0 bottom-0 z-10 bg-black bg-opacity-40"
              style={{
                display: "flex",
                alignItems: "flex-start",
              }}
            >
              <p
                onClick={() => setMenuOpen(!menuOpen)}
                className="w-[10px] absolute right-2 top-5  text-white text-[20px]"
              >
                X
              </p>
              <div
                className="md:hidden absolute overflow-y-scroll top-16 right-0 w-[95%] bg-white rounded-l z-20 h-[490px]"
                
              >
                <div className="CapsuladoNav flex flex-col items-center absolute h-16 w-full md:w-[45%] md:flex md:flex-row md:relative">
                  <NavbarProduct />
                  <NavbarSolutions />
                  <NavbarOpenSource />
                </div>
              </div>
            </div>
          )}
        </header>
      </div>
    </>
  );
}
