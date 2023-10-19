import React from "react";
import { useState, useEffect } from "react";
import { collection, getDocs, doc,deleteDoc} from "firebase/firestore";
import { useAuth } from "../Context/AuthContext";
import { db } from "../Config/Firebase";
import { Link } from "react-router-dom";
import { Animacion } from "../Components/animacion/animacion";
import HeaderProfile from "../Components/HeaderHomeProfile/HeaderProfile";
import NameStatus from "../Components/HeaderHomeProfile/NameStatus";
import SearchProfile from "../Components/HeaderHomeProfile/SearchProfile";
import { CreatNewHomeProfile } from "../Components/HeaderHomeProfile/CreatNewHomeProfile";
import IssuesHeader from "../Components/HeaderHomeProfile/IssuesHeader";
import { Pullrequest } from "../Components/HeaderHomeProfile/Pullrequest";
import { NotificationsProfile } from "../Components/HeaderHomeProfile/NotificationsProfile";
import { MenuProfile } from "../Components/HeaderHomeProfile/MenuProfile";
import { BsTrash } from "react-icons/bs";
import Busqueda from "../assets/busqueda.png";
export function HomeFavorite() {
  const { user} = useAuth();
  const [mostrar, useMostrar] = useState([]);

  const eliminarDocumento = async (documentId) => {
    try {
      // console.log("Eliminando documento con ID:", documentId);
      const docRef = doc(db, user.email, documentId);
      // console.log("Referencia al documento:", docRef);
  
      await deleteDoc(docRef);
  
      // console.log("Documento eliminado con éxito.");
      useMostrar((prevData) => prevData.filter((item) => item.id !== documentId));
    } catch (error) {
      console.error("Error al eliminar el documento:", error);
    }
  };
  
  useEffect(()=>{
    const extraer = async() =>{
        try {
           const extraerColecion = await getDocs(collection(db,user.email)) 
           const datos = [];
           extraerColecion.forEach(element => {
            datos.push({
              ...element.data(),
              id: element.id
            })
            // console.log(element)
           
           });
           
            useMostrar(datos)
        } catch (error) {
            console.log(error)
        }
    }
    
    
    extraer();
    
  },[])

  return (
    <>
      <div className="headerHomeProfile relative w-full bg-white ">
        <Animacion/>
        <div className="flex w-[100%] bg-[#f6f8fa] bord h-[60px]">
          <div className="flex max-[420px]:w-[40%] max-[541px]:w-[30%] max-[280px]:w-[55%] md:w-[18%]  items-center">
            <HeaderProfile />
            <div className="px-9 text-xs md:text-lg font-semibold">
              <NameStatus name="Favorites" />
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
      <div className=" bg-white flex flex-col justify-center items-center md:flex-row md:items-start w-full relative" >
          
          <div className="  w-[50%] flex justify-center flex-col  items-center gap-2 md:w-[200px] md:h-[200px]  md:left-20 md:top-[40%] md:fixed md:flex md:items-center md:gap-2 ">
              <img
                src={                  
                   "https://avatars.githubusercontent.com/u/128756400?v=4"
                }
                alt=""
                className=" w-[100px] mt-2 rounded-[50%] md:w-full md:h-full  "
              />
              <p className="text-black border-b  border-b-slate-200 ">{user.email}</p>
              <button className="border w-full mt-2 mb-10 border-gray-400 text-gray-800 rounded bg-gray-100">Edit profile</button>
              </div>

            <div className=" w-[100%] flex flex-col items-center mt-6 md:w-[90%] md:mt-0 md:items-end lg:w-[80%]  ">
                { mostrar.length === 0 ? (
                  <div className="md:absolute  md:left-[50%] md:top-[20vh] text-[2rem] flex  flex-col  items-center text-center italic">
                    <img src={Busqueda} alt=""  className=" w-[30%] md:w-[50%]"/>
                      <p >No hay ningún repositorio agregado</p>
                  </div>
                
              ) : (

             mostrar.map((data,key)=>(
              
                          
               <div className=" w-[300px] h-[150px]  mt-3 mb-2  px-5 md:w-[50%] md:px-5 relative hover:bg-gray-200 hover:rounded-lg lg:w-[80%]" key={key}>
                
                    
                 <div className="flex  gap-2 mt-1">
                 <Link  to={data.urlRepositorio} target="_blank" className="text-blue-700 hover:border-b hover:border-white "><h6 className="text-lg" >{data.nombreRepositorio}</h6></Link>
                 <p className="border border-gray-300 rounded-2xl px-2 py-0 text-gray-800 text-xs flex items-center h-[20px] font-medium">{data.visibilidad}</p>
                 </div>
                 <div>
                   <p className="text-sm mb-4 mt-2 text-gray-600">{data.description}</p>
                 </div>
                 <div className="  mb-1 mt-2 flex items-center gap-1">
                   <p className=" mb-1 text-sm text-[gold]">{data.lenguaje}</p>
                 </div>
                 <button
                  className="text-red-600 hover:underline absolute top-2 right-2"
                  onClick={() => eliminarDocumento(data.id)}
                >
                  <BsTrash/>
                </button>
                <hr />
               </div>
              
              
              
            )))
          }
            </div>
          
      </div>
    </>
  );
}
