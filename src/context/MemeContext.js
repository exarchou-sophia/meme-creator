import { createContext, useContext } from "react";

export const MemeContext = createContext();
export const useMemes = () => useContext(MemeContext);