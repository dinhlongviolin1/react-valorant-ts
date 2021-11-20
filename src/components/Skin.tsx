import React from "react";
import { SkinData } from "../utils/interface";

import vp from "../img/valorant_points.png";

export default function Skin(props: SkinData) {
    const { contentTierColor, imgUrl, contentTierImg, name, price } = props;
    const backgroundStyle: React.CSSProperties = {
        backgroundColor: contentTierColor,
        backgroundBlendMode: "multiply",
    };
    // const imgBackgroundStyle: React.CSSProperties = {
    //     background,
    // };
    return (
        <div className="relative w-full h-56 overflow-hidden" style={backgroundStyle}>
            <div className="absolute bottom-2 left-2 text-left w-1/3">
                <div className="uppercase leading-tight text-gray-200 text-xs sm:text-sm font-bold tracking-wider">{name}</div>
            </div>
            <div className="absolute top-2 right-2">
                <div className="flex justify-end items-center">
                    <img className="h-4 w-4 md:h-5 md:w-5 mr-1 rounded-full" src={vp} alt="VP" />
                    <div className="uppercase leading-tight text-gray-200 text-xs sm:text-sm font-light tracking-wider">
                        {price.toLocaleString()}
                    </div>
                    <img className="h-5 w-5 ml-1 md:h-6 md:w-6 rounded-full" src={contentTierImg} alt="VP" />
                </div>
            </div>
            <img
                className="relative w-1/2 md:w-5/6 h-auto rounded transform rotate-45 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                src={imgUrl}
                alt={name}
            />
        </div>
    );
}
