import Dashboard from '../pages/Dashboard';
import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

const AppStack = createStackNavigator();

const AppRoutes: React.FC = () =>(
    <AppStack.Navigator>
        <AppStack.Screen name="Dashboard" component={Dashboard} />
    </AppStack.Navigator>
);

export default AppRoutes;