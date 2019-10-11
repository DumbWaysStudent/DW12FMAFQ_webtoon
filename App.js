
import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Share, Alert } from 'react-native';
import { Icon } from 'native-base'
// Screen
import Login from './src/screens/Login';
import Foryou from './src/screens/Foryou';
import DetailWebtoon from './src/screens/DetailWebtoon';
import DetailEpisode from './src/screens/DetailEpisode';
import EditProfile from './src/screens/EditProfile';
import MyWebtoon from './src/screens/MyWebtoon';
import CreateWebtoon from './src/screens/CreateWebtoon';
import CreateWebtoonEpisode from './src/screens/CreateWebtoonEpisode';
import EditWebtoon from './src/screens/EditWebtoon';
import EditEpisode from './src/screens/EditEpisode';

const onShare = async () => {
  try {
    const result = await Share.share({
      message: 'url',
    });
  } catch (error) {
    Alert.alert(error.message);
  }
};

const App = createStackNavigator({
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
  EditProfile: {
    screen: EditProfile,
    navigationOptions: {
      headerTitle: 'Edit Profile',
      headerLeft: null,
      headerRight: (
        <Icon style={{ color: 'range' }} name="create" />
      ),
      headerStyle: {
        backgroundColor: '##fff',
        padding: 10,
        borderBottomWidth: 1
      },
      headerRightContainerStyle: {
        marginEnd: 20,
      },
      headerTintColor: 'black',
    },
  },
  MyWebtoon: {
    screen: MyWebtoon,
    navigationOptions: {
      headerTitle: 'My Webtoon',
      headerStyle: {
        backgroundColor: '#ffffff',
      },
      headerRightContainerStyle: {
        marginEnd: 20,
      },
      headerTintColor: 'black',
    },
  },
  CreateWebtoon: {
    screen: CreateWebtoon,
    navigationOptions: {
      headerTitle: 'Create Webtoon',
      headerRight: (
        <Icon style={{ color: 'orange', fontSize: 30 }} name="checkmark" />
      ),
      headerStyle: {
        backgroundColor: '#fff',
      },
      headerRightContainerStyle: {
        marginEnd: 20,
      },
      headerTintColor: 'black',
    },
  },
  CreateWebtoonEpisode: {
    screen: CreateWebtoonEpisode,
    navigationOptions: {
      headerTitle: 'Create Episode',
      headerRight: (
        <Icon style={{ color: 'orange', fontSize: 30 }} name="checkmark" />
      ),
      headerStyle: {
        backgroundColor: '#fff',
      },
      headerRightContainerStyle: {
        marginEnd: 20,
      },
      headerTintColor: 'black',
    },
  },
  EditWebtoon: {
    screen: EditWebtoon,
    navigationOptions: {
      headerTitle: 'Edit Webtoon',
      headerRight: (
        <Icon style={{ color: 'orange', fontSize: 30 }} name="checkmark" />
      ),
      headerStyle: {
        backgroundColor: '#fff',
      },
      headerRightContainerStyle: {
        marginEnd: 20,
      },
      headerTintColor: 'black',
    },
  },
  EditEpisode: {
    screen: EditEpisode,
    navigationOptions: {
      headerTitle: 'Edit Episode',
      headerRight: (
        <Icon style={{ color: 'orange', fontSize: 30 }} name="checkmark" />
      ),
      headerStyle: {
        backgroundColor: '#fff',
      },
      headerRightContainerStyle: {
        marginEnd: 20,
      },
      headerTintColor: 'black',
    },
  },
});

const AppStack = createSwitchNavigator({
  Auth: {
    screen: Login,
  },
  App: {
    screen: App,
  },
});

export default createAppContainer(AppStack);