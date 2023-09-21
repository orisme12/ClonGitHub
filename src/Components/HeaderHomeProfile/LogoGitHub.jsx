import React from 'react'
import { Link } from 'react-router-dom'
import logoGitHub from "../../assets/githubLogo.svg"
export default function LogoGitHub() {
  return (
    <div className = "logoHeaderProfile">
      <Link to = "/homeprofile"><img className = "ImagenHeaderProfile " src={logoGitHub} alt=""  style={{maxWidth: "30px", minWidth: "10px"}}/></Link>  
    </div>
  )
}
