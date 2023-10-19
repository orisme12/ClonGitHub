import { createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged } from "firebase/auth";
import { createContext } from "react"; // Para crear el contexto global 
import { useContext } from 'react' // Es para usar el contexto 
import { useState,useEffect } from "react"; // HOOK DE ESTADO 
import { useNavigate } from "react-router-dom"; // Para navegar 
import { auth } from "../Config/Firebase";




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
    const [emailused,setEmailUsed] = useState(null);
    const [emailusedsingup,setEmailUsedSingpUp] = useState(null);
    const [user, setUser] = useState(null); 
    const [loading, setLoading] = useState(true);
    const [datausergithub,setDataUserGitHub] = useState(null)
    const [datarepositories,setDataRepositories] = useState(null)
    // const [infousergithub,setInfoUserGitHub] = useState(null)
    const [searchusers,setSearchUsers] = useState(null)
    const [searchusersrepositories,setSearchUsersRepositories] = useState(null)
    const [searchactive,setSearchActive] = useState(false)
    
    let url = "https://api.github.com/users"
 
   

    const singUp = async (email,password) => {
      
        try {
          if (password.length > 6 && !/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            setPasswordError("La contraseña debe tener al menos 6 caracteres incluido uno especial(.-?).");
            setEmailUsed("")
          }
           await createUserWithEmailAndPassword(auth, email, password);
          // console.log(infouser)
          // console.log("Ya Se encuentra registrado")
          navigate("/homeprofile")
        } catch (error) {
          // console.log(error);
          if (error.code === "auth/email-already-in-use" ) {
             setEmailUsed("La cuenta ya existe, verifique su correo electrónico")
             
          }
          
        }
      };

    const singIn = async(email,password) =>{
        
        try {
            await signInWithEmailAndPassword(auth,email,password);
            // console.log(ingreso.user)
            navigate("/homeprofile")
            
        } catch (error) {
            // console.log(error)
            if (error.code === "auth/user-not-found" || error.code === "auth/wrong-password" || error.code === "auth/invalid-login-credentials" || error.code ==="auth/network-request-failed") {
              setEmailUsedSingpUp("Correo o contraseña ingresada incorrectamente")
            } 
           
        }
    }
    // const singInWithGoogle = async () => {
    //   try {
    //     await signInWithPopup(auth, googleProvider);
      
    //   // console.log("Autenticado por google")
    //   navigate("/HomeProfile")
    //   } catch (error) {
    //     console.log(error);
        
    //   }
    // }
      // Permite Salir de la cuenta 
  const logout = async () => {
    try {
      const datos = await signOut(auth);
      // console.log(auth)
      navigate("/singin")
      
    } catch (error) {
      console.log(error);
    }
  };
  
  const fetchGitHub = async(usergithub)=>{
    const response = await fetch(`${url}/${usergithub ? usergithub : "orisme12"}`)
    const data = await response.json()
    // console.log(data)
    const responseRepositories = await fetch(`${url}/${usergithub ? usergithub : "orisme12"}/repos`)
    const dataRepos = await responseRepositories.json()
    // console.log(dataRepos)
    setDataRepositories(dataRepos)
    setDataUserGitHub(data)
    
  }

  const searchUserGitHub = async(usergithub)=>{
    const response = await fetch(`${url}/${usergithub ? usergithub : "orisme12"}`)
    const data = await response.json()
    const responseRepositories = await fetch(`${url}/${usergithub ? usergithub : "orisme12"}/repos`)
    const dataRepos = await responseRepositories.json()
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
    <context.Provider value={{passwordError,singUp,singIn,emailused,logout,user,loading,fetchGitHub,datausergithub,datarepositories,searchUserGitHub,searchusers,searchusersrepositories,searchactive,emailusedsingup}}> 
        {children}
    </context.Provider>
  )
}
