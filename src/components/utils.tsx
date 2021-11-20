import { CountdownTimeDelta, zeroPad } from "react-countdown";

export const countDownRenderer = ({ days, hours, minutes, seconds }: CountdownTimeDelta) => {
    return (
        <span className="text-yellow-100">
            {zeroPad(days)}:{zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}
        </span>
    );
};

export const countDownRendererNoDays = ({ hours, minutes, seconds }: CountdownTimeDelta) => {
    return (
        <span className="text-yellow-100">
            {zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}
        </span>
    );
};