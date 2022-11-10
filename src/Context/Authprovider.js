import React, { createContext, useEffect, useState } from 'react';
import {getAuth,createUserWithEmailAndPassword,
     onAuthStateChanged, signInWithEmailAndPassword, 
     signOut,updateProfile,GoogleAuthProvider,GithubAuthProvider, signInWithPopup
    } from 'firebase/auth';

import app from '../Firebase/Firebase.config';
export const AuthContext = createContext();
const auth = getAuth(app);

const Authprovider = ({children}) => {

    const [user,setUser] = useState([]);
    const [loading,setLoading]= useState(true);

    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();


    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const registerWithGoogle = ()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider);
    }

    const registerWithGithub = ()=>{
        setLoading(true)
        return signInWithPopup(auth,gitHubProvider);
    }

    const logInWithGoogle = ()=>
    {   setLoading(true)
        return signInWithPopup(auth,googleProvider);
    }

    const logInWithGithub = ()=>
    {   setLoading(true)
        return signInWithPopup(auth,gitHubProvider);
    }



    const updateNameAndPhoto =(name,url)=>{
        return updateProfile(auth.currentUser,{
            displayName: name,
            photoURL: url
        });
    }

    const logIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }


    const logOut = () =>{
        localStorage.removeItem('alishanToken');
        return signOut(auth);
    }

    useEffect( () =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            setLoading(false);
        });

        return () =>{
            return unsubscribe();
        }
    }, [])

    const authInfo = {
        user, 
        loading,
        createUser, registerWithGoogle,registerWithGithub,
        logInWithGoogle,logInWithGithub,
        updateNameAndPhoto,
        logIn, 
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;