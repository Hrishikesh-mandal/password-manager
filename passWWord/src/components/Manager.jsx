import React from "react";

const Manager = () => {
  return (
    <>
        <div class="absolute top-0 z-[-2] h-screen w-screen rotate-180 transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]"></div>


        <div className="container bg-green-50 mx-auto max-w-5xl p-4 shadow-lg">
            <h1 className="text text-4xl text-center font-bold">
                <span className='text-green-700'>&lt;</span>
                <span>pass</span>
                <span className='text-green-700'>OP/&gt;</span>
            </h1>

            <p className="text-center text-green-800 text-lg">Your Own Password Manager</p>

            <div className="flex flex-col p-4 gap-6 text-black" >
                <input className="rounded-full border border-green-900 p-4 py-1 w-full" type="text" />
                <div className="flex w-full justify-between gap-4 mt-4">
                    <input className="rounded-full border border-green-900 p-4 py-1 w-full" type="text" />
                    <input className="rounded-full border border-green-900 p-4 py-1 w-full" type="text" />
                </div>
            </div>

        </div>

    </>
  );
};

export default Manager;
