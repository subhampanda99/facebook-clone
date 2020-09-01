import React, { createContext, useReducer, useContext } from "react";

//Preapering a data layer
export const StateContext = createContext();

//High order component and we are using this to rapup our app
export const StateProvider = ({ reducer, initialState, childern }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {childern}
    </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);