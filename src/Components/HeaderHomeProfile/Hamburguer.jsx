import { useState } from "react";
import Home from "./Home";
import LogoGithub from "../../assets/githubLogo.svg";
import { RepositoriesProfile } from "./RepositoriesProfile";
import { Link } from "react-router-dom";

export function Hamburguer() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        style={{
          borderRadius: "0px 5px 5px 0px",
          padding: "5px 8px",
          position: "relative",
          width: "100%",
          fontSize: "12px",
        }}
      >
        <button onClick={toggleMenu} className="">
          {isOpen ? (
            <div className="cerrarIcon"></div>
          ) : (
            <box-icon
              name="menu"
              style={{
                filter: "contrast(0.4)",
                borderRadius: "5px",
                padding: "1px",
                border: "1px solid",
              }}
            ></box-icon>
          )}
        </button>
        {isOpen && (
          <div
            className="overlay "
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "rgba(0, 0, 0, 0.03)",
              zIndex: "9",
            }}
          >
            <div className="relative">
              <div
                className="menuContenido slide-in absolute z-10 w-[250px]"
                style={{
                  position: "absolute",
                  zIndex: "10",
                  background: "white",
                  top: "0%",
                  left: "0%",
                  height: "100vh",
                  padding: "0px 8px",
                  borderRadius: "0px 5px 5px 0px",
                }}
              >
                <button onClick={toggleMenu}>
                  <box-icon
                    name="x"
                    id="slide-in"
                    style={{
                      position: "absolute",
                      zIndex: "11",
                      top: "2%",
                      right: "6%",
                      width: "19px",
                    }}
                  ></box-icon>
                </button>
                <img
                  src={LogoGithub}
                  alt=""
                  style={{
                    position: "absolute",
                    top: "2%",
                    left: "5%",
                    width: "25px",
                    zIndex: "10",
                  }}
                />
                <div className="menuScroll mt-10">
                  <div className="menuHome">
                    <Home name="Home" clase="home-alt-2" />
                    <Home name="Issues" clase="disc" />
                    <Home name="Pull requests" clase="git-pull-request" />
                    <Home name="Discussions" clase="chat" />
                    <hr />
                  </div>
                  <hr />
                  <RepositoriesProfile />
                </div>

                <hr />
                <div className="menuOtherOptions flex flex-col justify-around w-40">
                  <div className="optionExplore">
                    <Home name="Explore" clase="log-in-circle" type="solid" />
                  </div>
                  <div className="optionGift">
                    <Home name="MarketPlace" clase="gift" type="solid" />
                  </div>
                  <div className="optionGiveNewNavigation">
                    <Home
                      name="Give new navigation feedback"
                      clase="chat"
                      type="solid"
                    />
                  </div>
                  <div className="derechosHamburguer ">
                    <p className="m-2 text-xs">© 2023 GitHub, Inc.</p>
                  </div>
                  <div className="footerHamburguer  p-2 ">
                    <ul className="">
                      <li className="text-xs">
                        <Link to="/homepage">About</Link>
                      </li>
                      <li className="text-xs">
                        <Link to="/homepage">Blog</Link>
                      </li>
                      <li className="text-xs">
                        <Link to="/homepage">Terms</Link>
                      </li>
                      <li className="text-xs">
                        <Link to="/homepage">Privacy</Link>
                      </li>
                      <li className="text-xs">
                        <Link to="/homepage">Security</Link>
                      </li>
                      <li className="text-xs">
                        <Link to="/homepage">Status</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
