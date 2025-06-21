import React, { useRef } from "react";

const Manager = () => {
    const ref = useRef()
    const showPassword = () => {
        if(ref.current.src.includes("icons/eye.png")) {
            ref.current.src = "icons/hide.png";
        } else{
            ref.current.src = "icons/eye.png";
        }
        
    }


  return (
    <>
        <div className="absolute top-0 z-[-2] h-screen w-screen rotate-180 transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]"></div>


        <div className="container bg-green-50 mx-auto max-w-5xl p-4 shadow-lg">
            <h1 className="text text-4xl text-center font-bold">
                <span className='text-green-700'>&lt;</span>
                <span>pass</span>
                <span className='text-green-700'>OP/&gt;</span>
            </h1>

            <p className="text-center text-green-800 text-lg">Your Own Password Manager</p>

            <div className="flex flex-col p-4 gap-6 text-black items-center" >
                <input placeholder="Enter Website Name" className="rounded-full border border-green-900 p-4 py-2 w-full text-xl" type="text" />
                <div className="flex w-full justify-between gap-4 mt-4">
                    
                    <input placeholder="Enter Username" className="rounded-full border border-green-900 p-4 py-1 w-full" type="text" />

                    <div className="relative ">
                        <input placeholder="Enter Password" className="rounded-full border border-green-900 p-4 py-1 w-full" type="text" />
                        <span className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={showPassword}>
                            <img width={20} ref={ref} src="icons/eye.png" alt="eye" />
                        </span>
                    </div>

                </div>

                <button className="bg-green-500 hover:bg-green-400 rounded-full w-fit px-4 py-2 flex justify-center items-center gap-2">
                    <lord-icon
                        src="https://cdn.lordicon.com/efxgwrkc.json"    
                        trigger="hover">
                    </lord-icon>
                    Add Password</button>
                           
            </div>

        </div>          

    </>
  );
};

export default Manager;
