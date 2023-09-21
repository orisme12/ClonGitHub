import { Link } from "react-router-dom"
export function SingUp() {
    return (
      <div className="SingUp text-xs md:text-[15px]">
          <button>
              <Link to='/singup'> Sing Up</Link>
          </button>
      </div>
    )
}