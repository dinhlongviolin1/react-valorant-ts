import React, { FormEvent, useState } from "react";
import { store_data } from "../utils/requests";

import logo from "../img/valorant_logo.png";
import "./Login.css";

interface AppProps {
    setstoreData: React.Dispatch<React.SetStateAction<string>>;
}
export default function Login(props: AppProps) {
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const [region, setregion] = useState("AP");
    const [isLoading, setisLoading] = useState(false);
    const resetData = () => {
        setusername("");
        setpassword("");
        setregion("AP");
        setisLoading(false);
    };
    const onFormSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (!username || !password || !region) {
            return alert("Please fill all fields before submitting");
        }
        setisLoading(true);
        store_data(username, password, region)
            .then((userStoreData) => {
                if ("error" in userStoreData) {
                    setisLoading(false);
                    return alert(userStoreData["error"].toString());
                }
                resetData();
                props.setstoreData(userStoreData);
            })
            .catch((error) => {
                console.log(error);
                setisLoading(false);
                alert(error.toString());
            });
    };
    return (
        <div className="w-screen h-screen background-img flex flex-col justify-center items-center">
            <div className="bg-white w-min p-14">
                <div className="w-80 sm:w-96">
                    <div className="mb-7">
                        <img className="mx-auto h-12 w-auto" src={logo} alt="Workflow" />
                        <h2 className="mt-2 text-center text-3xl font-extrabold text-gray-900">Valorant Rotation Store</h2>
                        <p className="mt-2 text-xs text-center text-gray-600">
                            An open source project available on{" "}
                            <span>
                                <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href="https://github.com/dinhlongviolin1/react-valorant-ts"
                                    className="underline text-red-500 hover:text-red-600"
                                >
                                    Github
                                </a>
                            </span>
                        </p>
                    </div>
                    {!isLoading ? (
                        <>
                            <form onSubmit={onFormSubmit}>
                                <div className="mb-5">
                                    <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                                        Username
                                    </label>
                                    <input
                                        type="text"
                                        name="username"
                                        id="username"
                                        autoComplete="username"
                                        value={username}
                                        onChange={(e) => setusername(e.target.value)}
                                        className="mt-1 focus:ring-red-400 focus:border-red-400 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>

                                <div className="mb-5">
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        autoComplete="password"
                                        value={password}
                                        onChange={(e) => setpassword(e.target.value)}
                                        className="mt-1 focus:ring-red-400 focus:border-red-400 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>
                                <div className="mb-5">
                                    <label htmlFor="region" className="block text-sm font-medium text-gray-700">
                                        Region
                                    </label>
                                    <select
                                        id="region"
                                        name="region"
                                        autoComplete="region"
                                        value={region}
                                        onChange={(e) => setregion(e.target.value)}
                                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-red-400 focus:border-red-400 sm:text-sm"
                                    >
                                        <option value="AP">Asia Pacific</option>
                                        <option value="KO">Korea</option>
                                        <option value="NA">North America</option>
                                        <option value="EU">Europe</option>
                                    </select>
                                </div>
                                <div className="mt-5">
                                    <button
                                        type="submit"
                                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                                    >
                                        Sign in
                                    </button>
                                </div>
                            </form>
                            <p className="mt-5 text-xs text-gray-600">
                                <strong>Disclaimer:</strong> This project is not endorsed by Riot Games in any way. Riot Games,
                                Valorant, and all associated properties are trademarks of{" "}
                                <span>
                                    <a
                                        target="_blank"
                                        rel="noreferrer"
                                        href="https://www.riotgames.com/en"
                                        className="underline text-red-500 hover:text-red-600"
                                    >
                                        Riot Games, Inc.
                                    </a>
                                </span>
                            </p>
                        </>
                    ) : (
                        <div className="mt-2 text-center text-xl font-bold text-gray-900">
                            <div className="animate-spin rounded-full h-24 w-24 border-b-2 border-t-2 border-red-500 m-auto"></div>
                            <p className="mt-5">Loading user data...</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
