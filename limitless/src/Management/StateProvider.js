import React, { createContext, useContext, useReducer } from 'react';

//Prepares the datalayer
export const StateContext = createContext();

//wrap our app and provide data layer
export const StateProvider = ({ reducer, intialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, intialState)}>
        {children}
    </StateContext.Provider>
);

//pull information from datalayer
export const useStateValue = () => useContext(StateContext);