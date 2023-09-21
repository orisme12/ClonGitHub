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

export default function HomeProfile() {
  const {
    datausergithub,
    datarepositories,
    searchusersrepositories,
    searchusers,
    searchactive,
  } = useAuth();
  // console.log(datausergithub);
  // console.log(datarepositories);
  // console.log(searchusersrepositories)
  
  

  

  
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
      <main className="w-[100%] relative flex flex-wrap justify-center h-[100vh]">
       
        <div className="bg-[#021c3f] w-[100%] relative  flex flex-wrap justify-center md:justify-end px-5  gap-2 ">

        {searchactive ? (
            <div className="w-full flex flex-wrap justify-center flex-col items-center">
             
              
              {Array.isArray(searchusersrepositories) && searchusersrepositories.length > 0 ? (
                searchusersrepositories.map((data, key) => (
                  <>
                   {key === 0 && (
                     <div className="flex items-center gap-2 mt-3">
                        <img src={data.owner.avatar_url} alt="" className="w-[100px] rounded-[50%]" />
                        <p className="text-white border-b border-blue-700  hover:shadow-lg  hover:text-gray-500 hover:border-blue-900 transition duration-300 ease-in-out">{data.owner.login}</p>

                     </div>
                      

                    )}
                  <div className="rounded w-[300px] h-[150px] md:w-[300px] mt-4 mb-2 border border-gray-300 px-5 md:px-5 relative lg:w-[55%] hover:bg-blue-950 md:hover:bg-blue-950" key={key}>
                 
                    
                    <div className="flex justify-between mt-1">
                    <Link  to={data.clone_url} target="_blank" className="text-blue-400 hover:border-b hover:border-white "><h6 className="text-[14px]" >{data.full_name}</h6></Link>
                    <p className="border rounded-md px-1 py-0 text-white text-xs flex items-center h-[20px] hover:bg-slate-500">{data.visibility}</p>
                  </div>
                  <div>
                    <p className="text-xs mb-4 mt-2 text-white">{data.description}</p>
                  </div>
                  <div className="absolute bottom-1  mt-2 flex items-center gap-1">
                    <p className=" text-xs text-[gold]">{data.language}</p>
                  </div>
                 
                  </div>
                  
                  </>
                 
                  
                ))
              ) : (
                <p className="text-white absolute top-64 md:flex text-[20px] text-center">Usuario no encontrado, ingrese un usuario válido.</p>
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
              <p className="text-white border-b border-b-slate-200 ">{datausergithub.name}</p>
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
      </main>
    </>
  );
}
