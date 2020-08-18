import React, { useContext } from 'react';
import { View, Button } from 'react-native';
import {useAuth} from "../../contexts/auth";

import styles from './styles';

const SignIn: React.FC = () => {
    const { signed, signIn } = useAuth();
    console.log(signed)
    
    function handleSignIn() {
        signIn();
    }
    return (
        <View style={styles.container}>
            <Button title='Sign in' onPress={handleSignIn} />
        </View>
    );
}

export default SignIn;