import { LiaBookSolid } from "react-icons/lia";


export  function SlideBarRepositories() {
  return (
    <>
    <div className="flex flex-col mt-3 justify-start items-start bg-slate-600">
       <div className="hidden  md:flex justify-start w-full md:justify-around items-center ">
            <p className="px-6 md:px-0 text-xs font-semibold opacity-75">Top Repositories</p>
            <div className=" flex items-center px-2  py-1 border rounded bg-green-600 hover:bg-green-500">
            <LiaBookSolid className="text-xs"/> 
                <button className="text-xs">
                    New
                </button>
            </div>
        </div>
        <p className="flex md:hidden text-[13px]">Repositories</p>

        <div className=" border w-full rounded-[4px] md:border-hidden ">
        <div className="flex w-full justify-start px-6 md:px-0 md:justify-center mt-1">
            <input className="w-4/5 px- py-1 text-xs rounded placeholder:text-xs placeholder:px-1 bg-gray-100 hover:bg-gray-50 border-2 focus:border-blue-700 outline-none" type="text" placeholder="Find a repository..."/>
        </div>
        <div className="flex justify-start px-6 mt-3 text-xs">
            <ul className="opacity-60">
                <li className="mt-1">Repositorio 1</li>
                <li className="mt-1">Repositorio 2</li>
                <li className="mt-1">Repositorio 3</li>
                <li className="mt-1">Repositorio 4</li>
                <li className="mt-1">Repositorio 5</li>
                <li className="mt-1">Repositorio 6</li>
            </ul>
        </div>
        </div>
       
        <div className="mt-3 p-6">
            <p className="text-xs font-semibold opacity-75">Recent activity</p>
            <div className="border-dotted rounded p-3 border-2 border-gray-300 mt-1">
                <p className="text-[10px] text-gray-400">When you take actons acroos GitHub, we´ll provide links to that activity here.</p>
            </div>
        </div>
    </div>
    
    </>
  )
}
