import React, { useRef, useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { v4 as uuidv4 } from 'uuid';

const Manager = () => {
  const ref = useRef();
  const passwordRef = useRef();

  const [form, setform] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setPasswordArray] = useState([]);

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setPasswordArray(JSON.parse(passwords));
    }
  }, []);

  const showPassword = () => {
    if (ref.current.src.includes("icons/eye.png")) {
      ref.current.src = "icons/hide.png";
      passwordRef.current.type = "text";
    } else {
      ref.current.src = "icons/eye.png";
      passwordRef.current.type = "password";
    }
  };

  const handleChange = (e) => {
    setform({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const savePassword = () => {
    setPasswordArray([...passwordArray, {...form, id: uuidv4()}]);
    localStorage.setItem("passwords", JSON.stringify([...passwordArray, {...form, id: uuidv4()}]));
    console.log([...passwordArray, {...form, id: uuidv4()}]);
    setform({ site: "", username: "", password: "" });
    toast.success("Password saved!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const editPassword = (id) => {
    console.log(`Editing password with id: ${id}`);
    setform(passwordArray.filter(item => item.id === id)[0]);
    setPasswordArray(passwordArray.filter(item => item.id !== id));
  };

  const deletePassword = (id) => {
    if (window.confirm("Are you sure you want to delete this password?")) {
        toast.success("Password deleted!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        console.log(`Deleting password with id: ${id}`);
        setPasswordArray(passwordArray.filter(item => item.id !== id));
        localStorage.setItem("passwords", JSON.stringify(passwordArray.filter(item => item.id !== id)));
    }
  };

  const copiedToast = (text) => {
    toast.success("Copied to clipboard", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    navigator.clipboard.writeText(text);
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="absolute top-0 z-[-2] h-screen w-screen rotate-180 transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]"></div>

      <div className="container bg-green-50 shadow-lg mx-auto max-w-5xl p-4 ">
        <h1 className="text text-4xl text-center font-bold">
          <span className="text-green-700">&lt;</span>
          <span>pass</span>
          <span className="text-green-700">OP/&gt;</span>
        </h1>

        <p className="text-center text-green-800 text-lg">
          Your Own Password Manager
        </p>

        <div className="flex flex-col p-4 gap-6 text-black items-center">
          <input
            value={form.site}
            onChange={handleChange}
            placeholder="Enter Website Name"
            className="rounded-full border border-green-900 p-4 py-2 w-full text-xl"
            type="text"
            name="site"
          />
          <div className="flex w-full justify-between gap-4 mt-4">
            <input
              value={form.username}
              onChange={handleChange}
              placeholder="Enter Username"
              className="rounded-full border border-green-900 p-4 py-1 w-full"
              type="text"
              name="username"
            />

            <div className="relative ">
              <input
                ref={passwordRef}
                value={form.password}
                onChange={handleChange}
                placeholder="Enter Password"
                className="rounded-full border border-green-900 p-4 py-1 w-full"
                type="password"
                name="password"
              />
              <span
                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                onClick={showPassword}
              >
                <img width={20} ref={ref} src="icons/eye.png" alt="eye" />
              </span>
            </div>
          </div>

          <button
            className="bg-green-500 hover:bg-green-400 font-medium text-xl rounded-full w-fit px-5 py-2 flex justify-center items-center gap-2"
            onClick={savePassword}
          >
            <lord-icon
              src="https://cdn.lordicon.com/efxgwrkc.json"
              trigger="hover"
            ></lord-icon>
            Save
          </button>
        </div>

        <div className="passwords">
          <h2 className="text-2xl font-bold py-4">Your Password</h2>
          {passwordArray.length === 0 && <div>No password to show</div>}
          {passwordArray.length > 0 && (
            <table className="table-auto w-full rounded-md overflow-hidden">
              <thead className="bg-green-500">
                <tr>
                  <th className="py-2">Site</th>
                  <th className="py-2">Username</th>
                  <th className="py-2">Password</th>
                  <th className="py-2">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-green-100">
                {passwordArray.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td className="text-center w-0 py-2 border-y-2 border-y-grey">
                        <div className="flex items-center justify-center gap-1 ">
                          <a href={item.site} target="_blank">
                            {item.site}
                          </a>
                          <span className="cursor-pointer ">
                            <animated-icons
                              onclick={() => {
                                copiedToast(item.site);
                              }}
                              src="https://animatedicons.co/get-icon?name=copy&style=minimalistic&token=047dcf87-b84c-41c5-b2c6-5d33d94222ee"
                              trigger="hover"
                              height="20"
                              width="20"
                            ></animated-icons>
                          </span>
                        </div>
                      </td>
                      <td className="text-center w-0 py-2 border-y-2 border-y-grey">
                        <div className="flex items-center justify-center gap-1">
                          <span>{item.username}</span>
                          <span className="cursor-pointer ">
                            <animated-icons
                              onclick={() => {
                                copiedToast(item.username);
                              }}
                              src="https://animatedicons.co/get-icon?name=copy&style=minimalistic&token=047dcf87-b84c-41c5-b2c6-5d33d94222ee"
                              trigger="hover"
                              height="20"
                              width="20"
                            ></animated-icons>
                          </span>
                        </div>
                      </td>
                      <td className="text-center w-0 py-2 border-y-2 border-y-grey">
                        <div className="flex items-center justify-center gap-1">
                          <span>{item.password}</span>
                          <span className="cursor-pointer ">
                            <animated-icons
                              onclick={() => {
                                copiedToast(item.password);
                              }}
                              src="https://animatedicons.co/get-icon?name=copy&style=minimalistic&token=047dcf87-b84c-41c5-b2c6-5d33d94222ee"
                              trigger="hover"
                              height="20"
                              width="20"
                            ></animated-icons>
                          </span>
                        </div>
                      </td>
                      <td className="text-center w-0 py-2 border-y-2 border-y-grey">
                        <div className="cursor-pointer flex items-center justify-center gap-2">
                          <animated-icons
                            src="https://animatedicons.co/get-icon?name=edit&style=minimalistic&token=bef79568-d828-4e67-a904-60a1bb446375"
                            trigger="hover"
                            onclick={() => {editPassword(item.id)}}
                            height="20"
                            width="20"
                          ></animated-icons>
                          <animated-icons
                            src="https://animatedicons.co/get-icon?name=delete&style=minimalistic&token=c1352b7b-2e14-4124-b8fd-a064d7e44225"
                            trigger="hover"
                            onclick={() => {deletePassword(item.id)}}
                            height="20"
                            width="20"
                          ></animated-icons>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};

export default Manager;
