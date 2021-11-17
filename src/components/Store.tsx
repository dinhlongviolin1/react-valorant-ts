import React from "react";
import { AppProps } from "../utils/interface";

export default function Store(props: AppProps) {
    const { storeData, setstoreData } = props;
    return <div>{JSON.stringify(storeData)}</div>;
}
