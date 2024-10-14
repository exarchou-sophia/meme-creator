import { createContext, useState } from "react";


export const SearchContext = createContext();
export const SearchProvider = ({ children }) => {
    const [userSearchInput, setUserSearchInput] = useState("");

    return (
        <SearchContext.Provider value={{ userSearchInput, setUserSearchInput }}>
            {children}
        </SearchContext.Provider>
    );
};