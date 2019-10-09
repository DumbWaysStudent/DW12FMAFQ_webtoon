import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from './src/screens/Login';
import Foryou from './src/screens/Foryou';

const AuthStack = createStackNavigator({
  ForYou: {
    screen: Foryou,
    navigationOptions: {
      title: 'Foryou',
      header: null,
      cardStack: {
        gesturesEnabled: false,
      },
    },
  },
});

const App = createSwitchNavigator({
  App: {
    screen: Login,
  },
  Auth: {
    screen: AuthStack,
  },
});

export default createAppContainer(App);