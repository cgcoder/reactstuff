import React, {createContext} from 'react';
import BrowserSession from '../models/browsersession';

export const SessionContext = createContext<BrowserSession>({ isLoggedIn: true });

export interface SessionContextProps {
    session?: BrowserSession
}

export const DEFAULT_SESSION: BrowserSession = {
    isLoggedIn: false
}

export const SessionContextProvider: React.FC<SessionContextProps> = (props) => {
    return (
        <SessionContext.Provider value={{...(props.session ? props.session : DEFAULT_SESSION)}}>
            {props.children}
        </SessionContext.Provider>
    )
}