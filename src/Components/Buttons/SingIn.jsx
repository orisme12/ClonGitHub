import { Link} from "react-router-dom"


export function SingIn() {
  
  return (
    <div className="SingIn hidden md:flex">
        <button>
            <Link to='singin'>Sing In</Link>
        </button>
    </div>
  )
}

