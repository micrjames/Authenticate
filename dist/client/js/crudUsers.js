import { fetchData, setOption } from "./fetchData.js";                                                  
import { HOST, PORT } from "./config_server.js";

const fetchUsers = async () => {
    return await fetchData(`http://${HOST}:${PORT}/users`);
};
const addUser = async user => {
    await fetchData(`http://${HOST}:${PORT}/users`, setOption('POST', user));
};

export { fetchUsers, addUser };
