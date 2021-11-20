import React from "react";
import Countdown from "react-countdown";
import { BundleData } from "../utils/interface";
import { countDownRenderer } from "./utils";

const bundleTextStyle: React.CSSProperties = {
    left: "4%",
    top: "4%",
};

export default function Bundle(props: BundleData) {
    const { duration, imageUrl, name } = props;
    return (
        <div className="w-full relative">
            <div className="absolute uppercase text-left" style={bundleTextStyle}>
                <div className="text-gray-100 font-semibold text-sm sm:text-sm md:text-lg lg:text-xl tracking-wide">
                    Featured<span className="text-gray-500 mx-1">|</span>
                    <Countdown
                        date={Date.now() + duration * 1000}
                        intervalDelay={0}
                        zeroPadTime={2}
                        renderer={countDownRenderer}
                    />
                </div>
                <div className="text-gray-100 text-xl sm:text-3xl md:text-5xl lg:text-6xl font-bold tracking-wide">{name}</div>
                <div className="text-gray-100 text-base sm:text-base md:text-xl lg:text-2xl font-extralight tracking-wider">
                    Collection
                </div>
            </div>
            <img className="w-full h-auto rounded" src={imageUrl} alt={name} />
        </div>
    );
}
