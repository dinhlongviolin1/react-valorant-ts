import React from "react";
import Countdown from "react-countdown";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { AppProps } from "../utils/interface";

import logo from "../img/valorant_logo.png";
import vp from "../img/valorant_points.png";
import rp from "../img/radianite_points.png";
import Bundle from "./Bundle";
import Skin from "./Skin";
import { countDownRendererNoDays } from "./utils";

export default function Store(props: AppProps) {
    const { storeData, setstoreData } = props;
    const cleanUpAndGoBack = () => {
        setstoreData({});
    };
    return (
        <div>
            <nav className="bg-gray-800 shadow-sm sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-2 sm:px-6 lg:px-8">
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
                                <img className="h-4 w-4 sm:h-6 sm:w-6 rounded-full" src={vp} alt="VP" />
                                <p className="text-gray-200 ml-1 text-sm sm:text-base">{storeData?.VP}</p>
                            </div>
                            <div className="flex items-center ml-0 sm:ml-4 mt-1 sm:mt-0">
                                <img className="h-4 w-4 sm:h-6 sm:w-6 rounded-full" src={rp} alt="RP" />
                                <p className="text-gray-200 ml-1 text-sm sm:text-base">{storeData?.RP}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="max-w-8xl mx-auto px-3 sm:px-6 lg:px-8 mt-4 sm:mt-5 lg:mt-6">
                <Carousel
                    className="rounded-sm"
                    autoPlay={true}
                    transitionTime={1000}
                    interval={5000}
                    showStatus={false}
                    swipeable={true}
                    infiniteLoop={true}
                    emulateTouch={true}
                    stopOnHover={false}
                    autoFocus={false}
                    showThumbs={false}
                >
                    {storeData?.bundleData?.map((v) => (
                        <Bundle name={v.name} imageUrl={v.imageUrl} duration={v.duration} />
                    ))}
                </Carousel>
                <div className="mt-4">
                    <hr className="relative top-4 sm:top-4 md:top-5 border-gray-700 z-0" />
                    <div className="rounded-sm text-xs sm:text-sm md:text-base relative left-1/2 transform -translate-x-1/2 z-10 text-gray-100 text-center bg-gray-900 border-gray-600 border w-auto inline-block mx-auto py-1 px-2 uppercase font-semibold tracking-wide">
                        Offers<span className="text-gray-500 mx-2">|</span>
                        <Countdown
                            date={Date.now() + (storeData?.dailyReset ?? 0) * 1000}
                            intervalDelay={0}
                            zeroPadTime={2}
                            renderer={countDownRendererNoDays}
                        />
                    </div>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-5 mb-7">
                    {storeData?.skinsData?.map((v) => (
                        <Skin
                            name={v.name}
                            imgUrl={v.imgUrl}
                            contentTierColor={v.contentTierColor}
                            contentTierImg={v.contentTierImg}
                            price={v.price}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
