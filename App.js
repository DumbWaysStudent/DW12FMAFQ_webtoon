import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Share, Alert } from 'react-native';
import { Icon } from 'native-base'
import Login from './src/screens/Login';
import Foryou from './src/screens/Foryou';
import DetailWebtoon from './src/screens/DetailWebtoon';
import DetailEpisode from './src/screens/DetailEpisode';
import EditProfile from './src/screens/EditProfile';

const onShare = async () => {
  try {
    const result = await Share.share({
      message: 'Apps Webtoon',
    });

    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        Alert.alert('1');
      } else {
        Alert.alert('2');
      }
    } else if (result.action === Share.dismissedAction) {
      Alert.alert('3');
    }
  } catch (error) {
    Alert.alert(error.message);
  }
};

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
  DetailWebtoon: {
    screen: DetailWebtoon,
    navigationOptions: {
      headerTitle: 'Kematian Jiraiya',
      headerRight: <Icon light name="share" onPress={onShare} />,
      headerStyle: {
        backgroundColor: '#ffffff',
      },
      headerRightContainerStyle: {
        marginEnd: 20,
      },
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerTintColor: 'black',
    },
  },
  DetailEpisode: {
    screen: DetailEpisode,
    navigationOptions: {
      headerTitle: 'Kematian Jiraiya',
      headerRight: <Icon light name="share" style={{ color: 'orange' }} onPress={onShare} />,
      headerStyle: {
        backgroundColor: '#ffffff',
      },
      headerRightContainerStyle: {
        marginEnd: 20,
      },
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerTintColor: 'black',
    },
  },
  EditProfile: {
    screen: EditProfile,
    navigationOptions: {
      headerTitle: 'Edit Profile',
      headerLeft: null,
      headerRight: (
        <Icon style={{ color: 'orange' }} name="checkmark" />
      ),
      headerStyle: {
        backgroundColor: '##fff',
        padding: 10,
        borderBottomWidth: 1
      },
      headerRightContainerStyle: {
        marginEnd: 15,
      },
      headerTintColor: 'black',
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