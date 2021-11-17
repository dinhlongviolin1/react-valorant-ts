import React, { useState } from "react";
import { StoreData } from "../utils/interface";
import Login from "./Login";
import Store from "./Store";

function App() {
    const [storeData, setstoreData] = useState<StoreData>({
        RP: 30,
        VP: 75,
        bundleData: [
            {
                duration: 485377,
                imageUrl: "https://media.valorant-api.com/bundles/2270b116-4255-8a14-4486-db9de4979b89/displayicon.png",
                name: "Arcane",
            },
            {
                duration: 53377,
                imageUrl: "https://media.valorant-api.com/bundles/3a824027-4414-5a08-64f0-c8905a2aaa66/displayicon.png",
                name: "Radiant Crisis 001",
            },
        ],
        dailyReset: 60577,
        skinsData: [
            {
                contentTierColor: "00958733",
                contentTierImg:
                    "https://media.valorant-api.com/contenttiers/0cebb8be-46d7-c12a-d306-e9907bfc5a25/displayicon.png",
                imgUrl: "https://media.valorant-api.com/weaponskinchromas/f9bde748-403a-acd2-e760-33b8ea9c1b80/fullrender.png",
                name: "Avalanche Phantom",
                price: 1275,
            },
            {
                contentTierColor: "d1548d33",
                contentTierImg:
                    "https://media.valorant-api.com/contenttiers/60bca009-4182-7998-dee7-b8a2558dc369/displayicon.png",
                imgUrl: "https://media.valorant-api.com/weaponskinchromas/825648b2-4c6f-4bb7-6d47-43a9734a18ab/fullrender.png",
                name: "VALORANT GO! Vol. 2 Ares",
                price: 1775,
            },
            {
                contentTierColor: "f1b82d33",
                contentTierImg:
                    "https://media.valorant-api.com/contenttiers/e046854e-406c-37f4-6607-19a9ba8426fc/displayicon.png",
                imgUrl: "https://media.valorant-api.com/weaponskinchromas/8ceded3e-4365-9aa6-eb7e-bda2cd553d6f/fullrender.png",
                name: "RGX 11z Pro Blade",
                price: 4350,
            },
            {
                contentTierColor: "d1548d33",
                contentTierImg:
                    "https://media.valorant-api.com/contenttiers/60bca009-4182-7998-dee7-b8a2558dc369/displayicon.png",
                imgUrl: "https://media.valorant-api.com/weaponskinchromas/b3e64067-4afc-05a6-85b7-b8a983ca6c29/fullrender.png",
                name: "Forsaken Spectre",
                price: 1775,
            },
        ],
    });
    return Object.keys(storeData).length === 0 ? <Login setstoreData={setstoreData} /> : <Store setstoreData={setstoreData} storeData={storeData} />;
}

export default App;
