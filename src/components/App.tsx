import React, { useState } from "react";
import Login from "./Login";

function App() {
    const [storeData, setstoreData] = useState("");
    return !storeData ? <Login setstoreData={setstoreData} /> : <div>{JSON.stringify(storeData)}</div>;
}

export default App;
