import React from "react";
import { AppProps } from "../utils/interface";
import logo from "../img/valorant_logo.png";
import vp from "../img/valorant_points.png"
import rp from "../img/radianite_points.png"

export default function Store(props: AppProps) {
    const { storeData, setstoreData } = props;
    const cleanUpAndGoBack = () => {
        setstoreData({});
    };
    return (
        <div>
            <nav className="bg-gray-800 shadow-2xl sticky top-0">
                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="relative flex items-center justify-between h-16">
                        <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={cleanUpAndGoBack}>
                                <img className="block h-8 w-auto" src={logo} alt="Workflow" />
                                <div className="hidden sm:block text-gray-200 font-semibold text-lg ml-2">
                                    Valorant Rotation Store
                                </div>
                            </div>
                        </div>
                        <div className="absolute inset-y-0 right-0 flex flex-col sm:flex-row items-center justify-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            <div className="flex items-center">
                                <img
                                    className="h-4 w-4 sm:h-6 sm:w-6 rounded-full"
                                    src={vp}
                                    alt="VP"
                                />
                                <p className="text-gray-200 ml-1 text-sm sm:text-base">{storeData?.VP}</p>
                            </div>
                            <div className="flex items-center ml-0 sm:ml-4">
                                <img
                                    className="h-4 w-4 sm:h-6 sm:w-6 rounded-full"
                                    src={rp}
                                    alt="RP"
                                />
                                <p className="text-gray-200 ml-1 text-sm sm:text-base">{storeData?.RP}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <section>
                
            </section>
        </div>
    );
}
