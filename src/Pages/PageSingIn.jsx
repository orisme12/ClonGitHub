import { Link } from "react-router-dom";
import LogoGithub from "../assets/githubLogo.svg";
import { useState } from "react";
import { useAuth } from "../Context/AuthContext";
import { Animacion } from "../Components/animacion/animacion";

export function PageSingIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { singIn, emailused, singInWithGoogle, fetchGitHub } = useAuth();
  const [usergithub, setUserNameGitHub] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    singIn(email, password);
    console.log("iniciando sesion");
    fetchGitHub(usergithub);
  };

  return (
    <>
      <div className=" h-[100vh] bg-slate-900" >
        <Animacion/>
        <div className="flex  flex-1 flex-col justify-center px-6 py-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <Link to="/">
              <img
                className="mx-auto h-10 w-auto invert"
                src={LogoGithub}
                alt="Logo GitHub"
              />
            </Link>

            <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-white">
              Sign in to GitHub
            </h2>
          </div>

          <div className="mt-1 sm:mx-auto sm:w-full sm:max-w-sm border-solid ">
            <form
              className="space-y-3 bg-slate-800 py-4 px-4 h-72 flex flex-col justify-between rounded-md"
              onSubmit={handleSubmit}
            >
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  Email address
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
                    className="block text-sm font-medium leading-6 text-white"
                  >
                    Password
                  </label>
                  <div className="text-sm">
                    <Link
                      to="/"
                      className="font-semibold text-indigo-600 hover:text-indigo-500"
                    >
                      Forgot password?
                    </Link>
                  </div>
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
                
                <p className="text-white">{emailused}</p>
              </div>
              <div>
                {/* <input
                  type="text"
                  placeholder="Ingrese su usuario en GitHub"
                  required
                  className="w-full flex justify-center placeholder:text-center py-2 border border-gray-300 rounded-[5px] text-center text-gray-600"
                  onChange={(e) => setUserNameGitHub(e.target.value)}
                /> */}
              </div>
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-blue-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  onClick={singIn}
                >
                  Sign in
                </button>
              </div>
            </form>
            <p className="mt-4 text-center text-sm text-white border py-3 rounded-md">
              New to GitHub?{" "}
              <Link
                to="/singup"
                className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
              >
                Create an account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
