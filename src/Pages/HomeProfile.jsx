import { useAuth } from "../Context/AuthContext";
import { Link } from "react-router-dom";
import NameStatus from "../Components/HeaderHomeProfile/NameStatus";
import HeaderProfile from "../Components/HeaderHomeProfile/HeaderProfile";
import SearchProfile from "../Components/HeaderHomeProfile/SearchProfile";
import { CreatNewHomeProfile } from "../Components/HeaderHomeProfile/CreatNewHomeProfile";
import IssuesHeader from "../Components/HeaderHomeProfile/IssuesHeader";
import { Pullrequest } from "../Components/HeaderHomeProfile/Pullrequest";
import { NotificationsProfile } from "../Components/HeaderHomeProfile/NotificationsProfile";
import { MenuProfile } from "../Components/HeaderHomeProfile/MenuProfile";
import { Animacion } from "../Components/animacion/animacion";
import LogoGithub from "../assets/githubLogo.svg"
import { addDoc, collection, doc, setDoc } from "firebase/firestore"; 
import { db } from "../Config/Firebase";
import { AiOutlineStar } from "react-icons/ai";
import { useState } from "react";

export default function HomeProfile() {

  const [favoritos, setFavoritos] = useState([]);
  const {
    datausergithub,
    datarepositories,
    searchusersrepositories,
    searchusers,
    searchactive,
    user
  } = useAuth();
  
  const guardarRepositorio = async(autor,nombreRepositorio,urlRepositorio,description,visibilidad,lenguaje) =>{
   const guardar = {
    nombreAutor: autor,
    nombreRepositorio : nombreRepositorio,
    urlRepositorio: urlRepositorio,
    description: description,
    visibilidad: visibilidad,
    lenguaje : lenguaje
   }
   try {
    await addDoc(collection(db,user.email),{
      ...guardar
    });
    setFavoritos([...favoritos, guardar]);
   } catch (error) {
    console.log(error)
   }
  
  }

  const esFavorito = (repositorio) => {
    return favoritos.some((fav) => fav.urlRepositorio === repositorio.clone_url);
  };

  
  return (
    <>
      <div className="headerHomeProfile relative w-full bg-white ">
        <Animacion/>
        <div className="flex w-[100%] bg-[#f6f8fa] bord h-[60px]">
          <div className="flex max-[420px]:w-[40%] max-[541px]:w-[30%] max-[280px]:w-[55%] md:w-[18%]  items-center">
            <HeaderProfile />
            <div className="px-9 text-xs md:text-lg font-semibold">
              <NameStatus name="DashBoard" />
            </div>
          </div>

          <div className="absolute top-3 right-[20%] w-24 text-xs  md:right-[28%] lg:right-[24%] lg:top-2 border rounded lg:p-1 lg:w-60 cursor-pointer ">
            <SearchProfile />
          </div>
          <div className="absolute top-3 hidden md:left-[73.5%] md:block lg:left-[78%]  border rounded cursor-pointer h-[25px] px-2">
            <CreatNewHomeProfile />
          </div>
          <div className="absolute top-3  hidden md:block md:left-[80%] lg:left-[82.5%] border rounded cursor-pointer h-[25px] px-2">
            <IssuesHeader />
          </div>
          <div className="absolute top-3  hidden md:block md:left-[85%]  lg:left-[86%] border rounded cursor-pointer h-[25px] px-2">
            <Pullrequest />
          </div>
          <div className="absolute top-3 right-[10%]  md:left-[90%]  lg:left-[89.5%] border rounded cursor-pointer h-[25px] w-[35px] text-center">
            <NotificationsProfile />
          </div>
          <div className="absolute top-3   md:left-[95%] right-[0%] rounded-full cursor-pointer h-[25px] w-8">
            <MenuProfile />
          </div>
        </div>
      </div>
      <main className=" relative flex flex-wrap justify-center h-[100vh]">
       
        <div className="bg-white w-[100%] relative  flex flex-wrap justify-center md:justify-end px-5  gap-2 py-2 ">

        {searchactive ? (
            <div className="w-full flex flex-wrap justify-center items-center flex-col md:flex-row md:w-[60%] md:justify-start lg:w-[75%] ">
             
              
              {Array.isArray(searchusersrepositories) && searchusersrepositories.length > 0 ? (
                searchusersrepositories.map((data, key) => (
                  <>
                   {key === 0 && (
                     <div className="  mt-3 md:absolute md:top-0 md:left-14 ">
                        <img src={data.owner.avatar_url} alt="" className="w-[200px] md:w-[250px] rounded-[50%] border-[2px] border-gray-400" />
                        <p className="text-gray-500 text-[16px] ">{data.owner.login}</p>
                        <button className="border w-full mt-2 mb-10 border-gray-400 text-gray-800 rounded bg-gray-100">Edit profile</button>

                     </div>
                      

                    )}
                  <div className=" w-[300px] h-[150px] md:w-[100%] mt-3 mb-2  px-5 md:px-5 relative hover:bg-gray-200 hover:rounded-lg" key={key}>
                 
                    
                    <div className="flex  gap-2 mt-1">
                    <Link  to={data.clone_url} target="_blank" className="text-blue-700 hover:border-b hover:border-white "><h6 className="text-lg" >{data.full_name}</h6></Link>
                    <p className="border border-gray-300 rounded-2xl px-2 py-0 text-gray-800 text-xs flex items-center h-[20px] font-medium">{data.visibility}</p>
                    </div>
                    <div>
                      <p className="text-sm mb-4 mt-2 text-gray-600">{data.description}</p>
                    </div>
                    <div className="  mb-1 mt-2 flex items-center gap-1">
                      <p className=" mb-1 text-sm text-[gold]">{data.language}</p>
                    </div>
                    <div className="flex gap-1 items-center absolute top-1 right-2">
                      <button className="" onClick={()=>guardarRepositorio(data.owner.login,data.full_name,data.clone_url,data.description,data.visibility,data.language)}><AiOutlineStar color={esFavorito(data) ? "gold" : "black"}/></button>
                      
                    </div>
                   <hr />
                  </div>
                  
                  </>
                 
                  
                ))
              ) : (
                <p className="text-gray-600 absolute top-64  md:left-44 md:top-36 md:flex text-[20px] text-center lg:left-[35%]">Usuario no encontrado, ingrese un usuario válido.</p>
              )}
            </div>
          ) : (
            <>
              <div className="md:w-[200px] md:h-[200px] w-full rounded-[50%] flex justify-center items-center gap-2 md:left-20 md:top-[40%] md:fixed md:flex md:items-center md:gap-2">
              <img
                src={
                  datausergithub.avatar_url
                    ? datausergithub.avatar_url
                    : "https://github.githubassets.com/images/modules/site/home-campaign/hero-drone.webp"
                }
                alt=""
                className="md:w-full md:h-full w-[200px] mt-2 rounded-[50%] "
              />
              <p className="text-white border-b  border-b-slate-200 ">{datausergithub.name}</p>
              </div>
              <div className="w-full flex flex-wrap  justify-center md:w-[79%] md:gap-2">
                {datarepositories.map((data, key) => (
                  <div className="rounded w-[300px] h-[120px] md:w-[300px] md:h-[200px]  mt-4 mb-2 border border-gray-300 px-5 md:px-5 relative lg:w-[30%]  hover:bg-slate-950" key={key}>
                     
                      <div className="flex justify-between mt-1">
                      <Link  to={data.clone_url} target="_blank" className="text-blue-500 hover:border-b hover:border-blue-900 "><h6 >{data.name}</h6></Link>
                      <p className="border rounded-md px-1 py-0 text-white text-xs flex items-center hover:bg-slate-700 ">{data.visibility}</p>
                      </div>
                      <div>
                        <p className="text-xs mb-4 mt-2 text-white">{data.description}</p>
                      </div>
                      <div className="absolute bottom-1  mt-2 flex items-center gap-1">
                        <p className=" text-xs text-[gold]">{data.language}</p>
                      </div>
                  
                  </div>
                ))}
              </div>
            </>
          )}

        </div>
       
        <footer className=" hidden w-full md:items-end lg:flex justify-around items-start bg-white py-2">
          <hr />
          <div className="flex gap-1  text-xs">
            <img src={LogoGithub} alt="LogoHithub" className="w-4" />
            <p className="text-gray-600">© 2023 GitHub, Inc.</p>
          </div>
          <ul className="flex gap-6 text-[13px]  items-center m-0  text-blue-900 ">
            <li className="hover:border-b hover:border-blue-800">Terms</li>
            <li className="hover:border-b hover:border-blue-800">Privacy</li>
            <li className="hover:border-b hover:border-blue-800">Security</li>
            <li className="hover:border-b hover:border-blue-800">Status</li>
            <li className="hover:border-b hover:border-blue-800">Docs</li>
            <li className="hover:border-b hover:border-blue-800">Contact GitHub</li>
            <li className="hover:border-b hover:border-blue-800">Pricing</li>
            <li className="hover:border-b hover:border-blue-800">API</li>
            <li className="hover:border-b hover:border-blue-800">Training</li>
            <li className="hover:border-b hover:border-blue-800">Blog</li>
            <li className="hover:border-b hover:border-blue-800">About</li>
          </ul>
          <ul>

          </ul>
        </footer>
      </main>
      
    </>
  );
}
