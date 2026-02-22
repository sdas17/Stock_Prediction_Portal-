import { createContext, useState } from 'react';

const AuthContext = createContext();

const AuthsProvider =({children})=>{
    const [islogged,setIslogges]=useState(
        !!localStorage.getItem("access")
    )
    return (
        <AuthContext.Provider value={{ islogged, setIslogges }}>
            {children}
        </AuthContext.Provider>
    )

}
export default AuthsProvider
export {AuthContext}