import React, { useContext } from 'react';
import { View, Button } from 'react-native';

import styles from './styles';
import {useAuth} from '../../contexts/auth';

const Dashboard: React.FC = () => {
  const {signOut} = useAuth();

  function handleSignOut() {
    signOut();
  }

  return (
    <View style={styles.container}>
      <Button title='Sign Out' onPress={handleSignOut} />
    </View>
  );
}

export default Dashboard;