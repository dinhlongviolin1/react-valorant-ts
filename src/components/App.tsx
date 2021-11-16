import React, { useEffect } from "react";
import Login from "./Login";
import { store_data } from "../utils/requests";

function App() {
    useEffect(() => {
        store_data("dinhlongviolin", "long300800").then((loginData) => console.log(loginData));
    }, []);
    return <Login />;
}

export default App;
