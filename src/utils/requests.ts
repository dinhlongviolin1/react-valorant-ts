import axios from "axios";

const store_data = async (username: string, password: string, region: string) => {
    let loginData = await axios.post(`${process.env.REACT_APP_URL}/store-data`, { username, password, region });
    return loginData.data;
};

export { store_data };
