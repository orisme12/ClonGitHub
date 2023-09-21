import { createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged } from "firebase/auth";
import { createContext } from "react"; // Para crear el contexto global 
import { useContext } from 'react' // Es para usar el contexto 
import { useState,useEffect } from "react"; // HOOK DE ESTADO 
import { useNavigate } from "react-router-dom"; // Para navegar 
import { auth , googleProvider} from "../Config/Firebase";


import { signInWithPopup } from "firebase/auth";

export const context = createContext();  // Craer contexto 

// Custom Hook Creado
export function useAuth() {
   const authContent = useContext(context)
   return authContent
}

// 
export  function AuthContext({children}) {
    
    const navigate = useNavigate();
    const [passwordError, setPasswordError] = useState("");
    const [emailused,setEmailUsed] = useState("");
    const [user, setUser] = useState(null); 
    const [loading, setLoading] = useState(true);
    const [datausergithub,setDataUserGitHub] = useState(null)
    const [datarepositories,setDataRepositories] = useState(null)
    const [infousergithub,setInfoUserGitHub] = useState(null)
    const [searchusers,setSearchUsers] = useState(null)
    const [searchusersrepositories,setSearchUsersRepositories] = useState(null)
    const [searchactive,setSearchActive] = useState(false)
    
    let url = "https://api.github.com/users"
 
   

    const singUp = async (email,password) => {

        try {
          if (password.length > 6 && !/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            setPasswordError("La contraseña debe tener al menos 6 caracteres incluido uno especial(.-?).");
            return;
          }
          const infouser = await createUserWithEmailAndPassword(auth, email, password);
          console.log(infouser)
          // console.log("Ya Se encuentra registrado")
          navigate("/homeprofile")
        } catch (error) {
          console.log(error);
          if (error.code === "auth/email-already-in-use" ) {
            const mensaje = "La cuenta ya existe, verifique su correo electrónico"
            setEmailUsed(mensaje)
          }
          
        }
      };
    const singIn = async(email,password) =>{
        try {
            const ingreso = await signInWithEmailAndPassword(auth,email,password);
            console.log(ingreso.user)
            navigate("/homeprofile")
        } catch (error) {
            console.log(error)
            if (error.code === "auth/user-not-found" || error.code === "auth/wrong-password") {
              const mensaje = "Correo o contraseña ingresada incorrectamente"
              setEmailUsed(mensaje)
            }
        }
    }
    const singInWithGoogle = async () => {
      try {
        await signInWithPopup(auth, googleProvider);
      
      // console.log("Autenticado por google")
      navigate("/HomeProfile")
      } catch (error) {
        console.log(error);
        
      }
    }
      // Permite Salir de la cuenta 
  const logout = async () => {
    try {
      const datos = await signOut(auth);
      console.log(auth)
      navigate("/")
      
    } catch (error) {
      console.log(error);
    }
  };
  
  const fetchGitHub = async(usergithub)=>{
    //peticion
    
    const response = await fetch(`${url}/${usergithub ? usergithub : "orisme12"}`)
    const data = await response.json()
    const responseRepositories = await fetch(`${url}/${usergithub ? usergithub : "orisme12"}/repos`)
    const dataRepos = await responseRepositories.json()

    setDataRepositories(dataRepos)

    setDataUserGitHub(data)
    
  }
  const searchUserGitHub = async(usergithub)=>{
    //peticion
    
    const response = await fetch(`${url}/${usergithub ? usergithub : "orisme12"}`)
    const data = await response.json()
    const responseRepositories = await fetch(`${url}/${usergithub ? usergithub : "orisme12"}/repos`)
    const dataRepos = await responseRepositories.json()
    // console.log(dataRepos)

    setSearchUsers(data)
    setSearchUsersRepositories(dataRepos)
    setSearchActive(true)

    
    
  }
  

  useEffect(() => {
    fetchGitHub();
    searchUserGitHub();
    const unsubscrite = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    fetchGitHub()
    return () => unsubscrite();
  }, []);

  

  
  return (
    <context.Provider value={{passwordError,singUp,singIn,emailused,singInWithGoogle,logout,user,loading,fetchGitHub,datausergithub,datarepositories,searchUserGitHub,searchusers,searchusersrepositories,searchactive}}> 
        {children}
    </context.Provider>
  )
}
