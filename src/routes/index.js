import React from 'react';
import {NavigationContainer, DrawerActions} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/AntDesign';
import DrawerContent from '../components/DrawerContent';
import {APP_STACK_SCREENS} from '../constants';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const navOptionHandler = ({navigation}) => ({
  statusBarColor: '#0163d2',
  headerStyle: {
    backgroundColor: '#0163d2',
  },
  headerTintColor: '#fff',
  headerTitleAlign: 'center',
  headerLeft: () => {
    return (
      <Icon
        name="menu-fold"
        size={30}
        color="#fff"
        onPress={() => navigation?.dispatch(DrawerActions.openDrawer())}
      />
    );
  },
});

const StackNav = () => {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={navOptionHandler}>
      {APP_STACK_SCREENS.map((screen, key) => (
        <Stack.Screen
          key={key}
          name={screen.name}
          component={screen.component}
        />
      ))}
    </Stack.Navigator>
  );
};

const AppDrawer = () => {
  return (
    <Drawer.Navigator
      screenOptions={{headerShown: false}}
      drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={StackNav} />
    </Drawer.Navigator>
  );
};

const Routes = () => {
  return (
    <NavigationContainer>
      <AppDrawer />
    </NavigationContainer>
  );
};

export default Routes;
