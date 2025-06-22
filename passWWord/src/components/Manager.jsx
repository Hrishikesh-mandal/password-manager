import React, { useRef, useState, useEffect } from "react";

const Manager = () => {
    const ref = useRef();

    const [form, setform] = useState({site: "", username: "", password: ""});
    const [passwordArray, setPasswordArray] = useState([]);

    useEffect(() => {
        let passwords = localStorage.getItem("passwords");
        if(passwords) {
            setPasswordArray(JSON.parse(passwords));
        }
    }, [])
    

    const showPassword = () => {
        if(ref.current.src.includes("icons/eye.png")) {
            ref.current.src = "icons/hide.png";
        } else{
            ref.current.src = "icons/eye.png";
        }
        
    }

    const handleChange = (e) => {
        setform({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    const savePassword = () => {
        setPasswordArray([...passwordArray, form]);
        localStorage.setItem("passwords", JSON.stringify([...passwordArray, form]));
        console.log([...passwordArray, form]);

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
                <input value={form.site} onChange={handleChange} placeholder="Enter Website Name" className="rounded-full border border-green-900 p-4 py-2 w-full text-xl" type="text" name="site" />
                <div className="flex w-full justify-between gap-4 mt-4">
                    
                    <input value={form.username} onChange={handleChange} placeholder="Enter Username" className="rounded-full border border-green-900 p-4 py-1 w-full" type="text" name="username" />

                    <div className="relative ">
                        <input value={form.password} onChange={handleChange} placeholder="Enter Password" className="rounded-full border border-green-900 p-4 py-1 w-full" type="text" name="password" />
                        <span className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={showPassword}>
                            <img width={20} ref={ref} src="icons/eye.png" alt="eye" />
                        </span>
                    </div>

                </div>

                <button className="bg-green-500 hover:bg-green-400 rounded-full w-fit px-4 py-2 flex justify-center items-center gap-2" onClick={savePassword}>
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
