import { Link } from "react-router-dom";
import LogoGithub from "../assets/githubLogo.svg";
import { useState, useEffect } from "react";
import { useAuth } from "../Context/AuthContext";
import { Animacion } from "../Components/animacion/animacion";

export function PageSingUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [usergithub, setUserNameGitHub] = useState("");
  const { passwordError, singUp, emailused, singInWithGoogle } = useAuth();
  let url = "https://api.github.com/users";

  const handleSubmit = async (event) => {
    // console.log(usergithub);
    event.preventDefault();
    singUp(email, password);

    const response = await fetch(`${url}/${usergithub}`);
    const data = await response.json();
    // console.log(data);
  };
 
  return (
    <>
      <div className="ContenedorFormSingUp bg-slate-950 finisher-header">
      <Animacion/>
        <div className="flex justify-center LogoSingUp ">
          <Link to="/" className="w-20">
            <img src={LogoGithub} alt="Logo de Github" className="w-8 md:w-10"/>
          </Link>
        </div>
        <div className="GoSingInPage">
          <h4>
            Already have an account?{" "}
            <Link className="GoSingInOption" to="/singin">
              Sing in →
            </Link>{" "}
          </h4>
        </div>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 lg:px-8 mt-14">
          <div className="mt-1 sm:mx-auto sm:w-full sm:max-w-sm border-solid rounded-xl absolute;  z-20 top-1 left-5 ContenedorForm">
            <form
              className="space-y-8 space-x-2  p-2  rounded-md FormSingUp "
              onSubmit={handleSubmit}
            >
              <h2 className="typewriter-text">
                <span>Welcome to GitHub!</span>
                <br />
                <span>Let’s begin the adventure</span>
              </h2>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-teal-700"
                >
                  Enter your email
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className=" px-4  block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Enter your Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="px-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                {passwordError && (
                  <p className="text-red-500 text-sm mt-1">{passwordError}</p>
                )}
                <h1 className="text-gray-400 italic mt-5">{emailused}</h1>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-slate-950 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 border"
                >
                  Create Acount
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
