import React, { Component } from 'react';
import { StyleSheet, FlatList, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { Text, View, Item } from 'native-base';

class DetailWebtoon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: 1,
      interval: null,
      banners: [
        {
          title: 'Ep.5 Bangkitnya Madara',
          url: 'https://vignette.wikia.nocookie.net/naruto/images/6/63/Madara_targets_Tailed_Beasts.png/revision/latest?cb=20141216140857&path-prefix=id',
          dates: '5 Februari 2019',
        },
        {
          title: 'Ep.4 Itachi vs Sasuke',
          url: 'https://i.ytimg.com/vi/o95fomzhCZo/maxresdefault.jpg',
          dates: '20 Januari 2019',

        },
        {
          title: 'Ep.3 Rapat Kage',
          url: 'https://d.wattpad.com/story_parts/179/images/1585520188369900607095857880.jpg',
          dates: '1 Januari 2019',
        },
        {
          title: 'Ep.2 Naruto vs Pain',
          url: 'https://i.pinimg.com/originals/ef/4a/6f/ef4a6f97b3184a39859977511dc34bad.jpg',
          dates: '15 Desember 2018',
        },
        {
          title: 'Ep.1 Kematian Jiraiya',
          url: 'https://dreager1.files.wordpress.com/2012/02/jiraiya_killed_by_pain.jpg',
          dates: '1 Desember 2018',
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
    return (
      <View>
        <View style={styles.viewColor}>
          <Item style={styles.itemMarginBottom}>
            <Image
              style={{
                width: "100%",
                height: 200
              }}
              source={{ uri: 'https://dreager1.files.wordpress.com/2012/02/jiraiya_killed_by_pain.jpg' }}
            />
          </Item>
        </View>

        <Item style={[styles.inputText, styles.itemMarginBottomInput]}>
          <SafeAreaView>
            <View style={styles.viewContent}>
              <FlatList
                showsVerticalScrollIndicator={false}
                data={this.state.banners}
                renderItem={({ item }) => (
                  <View style={styles.viewAddFav}>
                    <Image
                      style={{
                        width: 50,
                        height: 50,
                        borderWidth: 2,
                        borderColor: 'black',
                      }}
                      source={{ uri: item.url }}
                    />
                    <View style={styles.viewListItem}>
                      <TouchableOpacity onPress={() => this.props.navigation.navigate('DetailEpisode')}>
                        <Text>{item.title}</Text>
                        <Text
                          style={{ fontSize: 13, fontColor: 'grey' }}>{item.dates}
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                )}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>
          </SafeAreaView>
        </Item>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f1f2f6',
    alignItems: 'center',
  },
  viewContent: {
    marginStart: 10,
    width: '95%',
    alignItems: 'center',
    borderRadius: 15,
  },
  viewColor: {
    width: '100%',
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
  inputText: {
    width: '100%',
    marginTop: 10,
    marginBottom: 20,
    borderRadius: 15,
  },
  itemSliderImage: {
    width: '90%',
    borderWidth: 3,
    borderColor: 'grey',
  },
  favoriteTitle: {
    textAlign: 'center',
  },
  textSubTitle: {
    fontSize: 18,
    marginBottom: 4,
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
  },
  viewListItem: {
    width: "100%",
    marginStart: 10,
    justifyContent: 'center',
  },
  btnFavorite: {
    height: 30,
    width: 120,
  },
});

export default DetailWebtoon;