import axios from "axios";

const store_data = async (username: string, password: string) => {
    let loginData = await axios.post(`${process.env.REACT_APP_URL}/store-data`, { username, password, region: "AP" });
    return loginData.data
};

export { store_data };
