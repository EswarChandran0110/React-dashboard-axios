import React , {useState,useEffect} from "react";
import axios from "axios";

// to create context for users

export const UsersContext = React.createContext();

// creating a provider function 
// every component wrapped inside UsersProvider will be able to access Usersdata

export const UsersProvider = ({children}) => {
    const [UsersData , setUsersData] = useState([]);
    const BaseUrl = `https://609e2a6d33eed80017957e08.mockapi.io`;

    useEffect(() => {
        const fetchUserData = async () => {
            await axios.get(`${BaseUrl}/usersData`).then(response => setUsersData(response.data))
        }
        fetchUserData();
        return () =>{
            <></>
        }
    },[BaseUrl])
    return(
        <UsersContext.Provider value={[UsersData, setUsersData,BaseUrl]}>
            {children}
        </UsersContext.Provider>
    )
}