import React from "react";
import { useState } from "react";

export default function Signup({ closemod }) {
  const [credentials, setcredentials] = useState({ email: "", password: "" });
  const onchange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const [loggedin, setloggedin] = useState(false);

  const eventHandler = async () => {
    const body = {
      email: credentials.email,
      password: credentials.password,
    };
    const response = await fetch("https://cryptofolio-backstack-aiwo.onrender.com/register/Signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    //  const json=response.json();
    const data = await response.text();
    //  console.log(data);
    if (data == "No such user found") {
      alert("No such user found");
    } else {
      closemod[1](false);

      const leyy = JSON.parse(data);
      console.log(leyy);
      localStorage.setItem("authToken", leyy.authToken);
      console.log(localStorage.getItem("authToken"));
    }

    //  console.log(json);

    //  if(!json.success){
    //   console.log("hi");
    //      alert("enter  credentials");
    //  }
  };

  return (
    <div>
     <div className="fixed inset-0 bg-[#131722c3] flex justify-center items-center z-50">
  <div className="bg-white rounded-lg shadow-lg w-[90%] md:w-[50%] p-6 relative">
    {/* Close Button */}
    <button
      onClick={() => closemod[1](false)}
      className="absolute top-4 right-4 text-gray-600 hover:text-red-500 text-xl font-bold"
    >
      ✖
    </button>

    {/* Title */}
    <h1 className="text-center font-bold text-xl sm:text-2xl text-gray-900 mb-4">
      Welcome to Tricon Trade!
    </h1>

    {/* Form */}
    <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="flex flex-col">
        <label htmlFor="email" className="font-medium text-gray-700 mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={credentials.email}
          onChange={onchange}
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="password" className="font-medium text-gray-700 mb-1">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={credentials.password}
          onChange={onchange}
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </form>

    {/* Links */}
    <div className="text-center mt-4">
      <button
        onClick={() => {
          closemod[0](true);
          closemod[1](false);
        }}
        className="text-blue-600 hover:underline"
      >
        Don't have an account? Sign up
      </button>
    </div>

    {/* Signup Button */}
    <div className="mt-6 flex justify-center">
      <button
        onClick={eventHandler}
        className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-md hover:bg-blue-700 transition duration-300"
      >
        Sign Up
      </button>
    </div>
  </div>
</div>

    </div>
  );
}
