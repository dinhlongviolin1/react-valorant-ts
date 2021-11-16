import React from "react";
import "./Login.css";

export default function Login() {
    return (
        <div className="w-screen h-screen background-img flex flex-col justify-center items-center">
            <div className="bg-white w-min p-14">
                <div className="w-11/12 sm:w-80">
                    <h1 className="text-center text-red-500 tex">Valorant Store</h1>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Username
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username"
                            type="text"
                            placeholder="Username"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            placeholder="******************"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
