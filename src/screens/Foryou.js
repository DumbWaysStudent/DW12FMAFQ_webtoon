import React, { Component } from 'react';
import { StyleSheet, FlatList, Image, Dimensions, TouchableOpacity } from 'react-native';
import { Text, View, Icon, Item, Label, Input, Button, } from 'native-base';
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Slideshow from 'react-native-image-slider-show';
import Favourite from './Favourite';
import Profile from './Profile';


const width = Dimensions.get('window').width
class Foryou extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: 1,
      interval: null,
      banners: [
        {
          title: 'Kematian Jiraiya',
          url: 'https://dreager1.files.wordpress.com/2012/02/jiraiya_killed_by_pain.jpg',
        },
        {
          title: 'Naruto vs Pain',
          url: 'https://i.pinimg.com/originals/ef/4a/6f/ef4a6f97b3184a39859977511dc34bad.jpg',
        },
        {
          title: 'Rapat Kage',
          url: 'https://d.wattpad.com/story_parts/179/images/1585520188369900607095857880.jpg',
        },
        {
          title: 'Itachi vs Sasuke',
          url: 'https://i.ytimg.com/vi/o95fomzhCZo/maxresdefault.jpg',
        },
        {
          title: 'Bangkitnya Madara',
          url: 'https://vignette.wikia.nocookie.net/naruto/images/6/63/Madara_targets_Tailed_Beasts.png/revision/latest?cb=20141216140857&path-prefix=id',
        },
      ],
    };
  }
  componentWillMount() {
    this.setState({
      interval: setInterval(() => {
        this.setState({
          position:
            this.state.position === this.state.banners.length
              ? 0
              : this.state.position + 1,
        });
      }, 2000),
    });
  }
  componentWillUnmount() {
    clearInterval(this.state.interval);
  }
  render() {
    console.disableYellowBox = true;
    return (
      <View style={styles.viewContent}>
        <View style={styles.viewColor}>
          <Item rounded style={[styles.inputText, { width: '90%', marginTop: 20 }]} regular>
            <Input placeholder="Pencarian" />
            <Icon active name="search" />
          </Item>
          <Item style={styles.itemMarginBottom}>
            <Slideshow
              containerStyle={styles.sliderImage}
              dataSource={this.state.banners}
              position={this.state.position}
              indicatorSelectedColor="#f39c12"
              indicatorColor="#f0edf6"
              onPositionChanged={position => this.setState({ position })}
            />
          </Item>
        </View>

        <View style={styles.inputText}>
          <View>
            <Label style={styles.textSubTitle}>Favourite</Label>
            <View style={styles.viewColor}>
              <FlatList
                style={styles.itemMarginBottom}
                horizontal
                showsHorizontalScrollIndicator={false}
                data={this.state.banners}
                renderItem={({ item }) => (
                  <View style={styles.favItem}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('DetailWebtoon')}>
                      <Image
                        style={{ width: 100, height: 100, borderWidth: 3, borderColor: 'grey' }}
                        source={{ uri: item.url }}
                      />
                      <Text style={styles.favoriteTitle}>{item.title}</Text>
                    </TouchableOpacity>
                  </View>
                )}
                keyExtractor={item => item}
              />
            </View>
          </View>
        </View>
        <Label style={styles.textSubTitle}>All</Label>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={this.state.banners}
          renderItem={({ item }) => (
            <View style={styles.viewAddFav}>
              <Image
                style={{ width: 50, height: 50, borderWidth: 3, borderColor: 'grey' }}
                source={{ uri: item.url }}
              />
              <View style={styles.viewListItem}>
                <Text>{item.title}</Text>
                <TouchableOpacity >
                  <Button onPress={() => this.props.navigation.navigate('DetailWebtoon')} warning style={styles.btnFavorite}><Text style={styles.textFavorite}> + Favorite </Text></Button>
                </TouchableOpacity>
              </View>
            </View>
          )}
          keyExtractor={item => item}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f1f2f6',
    alignItems: 'center'
  },
  viewContent: {
    marginStart: 10,
    width: '95%',
    alignItems: 'flex-start',
    borderRadius: 15,
    flex: 1,
  },
  viewColor: {
    width: '100%',
    backgroundColor: '#ffffff',
    alignItems: 'center'
  },
  inputText: {
    width: '100%',
    marginTop: 10,
    marginBottom: 20,
    borderRadius: 15,
  },
  sliderImage: {
    width: '90%',
    borderWidth: 3,
    borderColor: 'grey',
  },
  favoriteTitle: {
    textAlign: 'center',
    fontSize: 12
  },
  textSubTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  favItem: {
    marginStart: 20,
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 15,
  },
  viewAddFav: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    padding: 15,
    width: width
  },
  viewListItem: {
    marginStart: 10,
    justifyContent: 'center',
  },
  btnFavorite: {
    height: 30,
    width: 120
  },
  textFavorite: {
    color: 'black'
  }
});

const TabNavigator = createMaterialBottomTabNavigator(
  {
    Foryou: {
      screen: Foryou,
      navigationOptions: {
        tabBarLabel: 'For You',
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: tintColor }]} size={25} name={'apps'} />
          </View>
        ),
      },
    },
    Favourite: {
      screen: Favourite,
      navigationOptions: {
        tabBarLabel: 'Favourite',
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: tintColor }]} size={25} name={'star'} />
          </View>
        ),
        activeColor: 'orange',
        inactiveColor: '#ccc',
        barStyle: { backgroundColor: '#ffffff' },
      },
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: 'Profile',
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: tintColor }]} size={25} name={'person'} />
          </View>
        ),
        activeColor: 'orange',
        inactiveColor: '#ccc',
        barStyle: { backgroundColor: '#ffffff' },
      },
    },
  },
  {
    initialRouteName: 'Foryou',
    activeColor: 'orange',
    inactiveColor: '#ccc',
    barStyle: { backgroundColor: '#ffffff' },
  },
);

export default createAppContainer(TabNavigator);