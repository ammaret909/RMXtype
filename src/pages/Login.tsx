import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import Cookies from "js-cookie";

export function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const [statusLogin, setStatusLogin] = useState();

  const handleCheckboxChange = () => {
    setCheckbox(!checkbox);
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const loginBody = {
      userid: email,
      drawssap: password,
    };
    //3.133.137.68 RemomaxBE
    const responseLogin = await fetch(
      `http://3.133.137.68:8080/RemomaxBE/check/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginBody),
      }
    );

    if (responseLogin.ok) {
      const data = await responseLogin.json();
      // Cookies.set("RCC", data.rcc);
      // Cookies.set("USERID", email);
      navigate("/home");
    } else {
      const data = await responseLogin.json();
      alert(data.massage + " (" + data.id + ")");
      window.location.reload();
    }
  };

  return (
    <>
      <div className="grid grid-cols-12 justify-center items-center">
        <div className=" grid col-span-1">1</div>
        <div className=" grid col-span-10">1</div>
        <div className=" grid col-span-1">1</div>
      </div>
      {/* <form
        className="bg-white grid grid-cols-12 justify-center items-center p-2"
        onSubmit={handleSubmit}
      >
        <div className=" grid col-span-1"></div>
        <div className="grid col-span-10 bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4 max-w-sm">
          <div className=" pb-4">
            <img
              //pt-16 pb-16
              className="object-cover p-4 rmx_blue "
              src="miti.jpg"
              alt="Logo"
            ></img>
          </div>
          <div className="space-y-4">
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                value={password}
                placeholder="Enter your password"
                required
              />
            </div>

            <div className="items-center">
              <input
                id="link-checkbox"
                type="checkbox"
                onChange={() => {
                  handleCheckboxChange();
                }}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                value={checkbox}
                required
              />
              <label
                htmlFor="link-checkbox"
                className="ml-2 text-sm font-medium text-center"
              >
                I agree with the{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  terms and conditions
                </a>
                .
              </label>
            </div>

            <div className="md:justify-between">
              <button
                className="btn rmx_blue hover:rmx_blue text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Sign In
              </button>
              <div className="text-center text-zinc-600 text-xs mt-4">
                <div>Forgot Password?</div>
                <div>Contact REMOMAX 000-000-0000</div>
              </div>
            </div>
          </div>
          <p className="text-center text-zinc-600 text-xs  ">
            Copyright © 1999 - 2023 REMOMAX
          </p>
        </div>
        <div className=" grid col-span-1"></div>
      </form> */}
    </>
  );
}
