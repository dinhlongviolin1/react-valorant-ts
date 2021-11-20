import React, { useState } from "react";
import { StoreData } from "../utils/interface";
import Login from "./Login";
import Store from "./Store";

function App() {
    const [storeData, setstoreData] = useState<StoreData>({});
    return Object.keys(storeData).length === 0 ? (
        <Login setstoreData={setstoreData} />
    ) : (
        <Store setstoreData={setstoreData} storeData={storeData} />
    );
}

export default App;
