import React, { useState, useEffect, useContext } from 'react';
import { createContext } from 'react';
import * as auth from '../services/auth';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../services/api';

interface AuthContextData {
    signed: boolean;
    user: object | null;
    loading: boolean;
    signIn(): Promise<void>;
    signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
    const [user, setUser] = useState<object | null>(null);
    const [loading, setLoading] = useState(true)

useEffect(()=>{
    async function loadStorageData(){
       const storageUser = await AsyncStorage.getItem('@RNAuth:user');
       const storageToken = await AsyncStorage.getItem('@RNAuth:token');


       if(storageUser && storageToken){
        api.defaults.headers['Authorization'] = `Bearer ${storageToken}`;
           setUser(JSON.parse(storageUser));
           setLoading(false);
       }
    }
    loadStorageData();
},[])

    function signOut() {
        AsyncStorage.clear().then(()=>{
            setUser(null);
        });
    }

    async function signIn() {
        const response = await auth.signIn();

        /* const {token, user} = response; */
        setUser(response.user);

        api.defaults.headers['Authorization'] = `Bearer ${response.token}`;
        await AsyncStorage.setItem('@RNAuth:user',JSON.stringify(response.user));
        await AsyncStorage.setItem('@RNAuth:token',response.token);
    }
    
    return (
        <AuthContext.Provider value={{ signed: !!user, user, loading, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
};

export function useAuth(){
    const context = useContext(AuthContext);
    return context;
}