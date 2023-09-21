import { Link } from "react-router-dom"
import Github from "../../assets/githubLogo.svg"



export function NavLogo() {
  return (
    <div className="NavLogo">
      <Link to='/' className="flex justify-center">
      <img src={Github} alt="" />
      </Link>
      
    </div>
  )
}
