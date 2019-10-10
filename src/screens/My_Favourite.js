import React, { Component } from 'react';
import { StyleSheet, FlatList, Image } from 'react-native';
import { Container, Text, View, Icon, Content, Item, Input } from 'native-base';

class My_Favourite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      banners: [
        {
          title: 'Kematian Jiraiya',
          url: 'https://dreager1.files.wordpress.com/2012/02/jiraiya_killed_by_pain.jpg',
          favorite: '100+ Favorite',
        },
        {
          title: 'Naruto vs Pain',
          url: 'https://i.pinimg.com/originals/ef/4a/6f/ef4a6f97b3184a39859977511dc34bad.jpg',
          favorite: '90 Favorite',
        },
        {
          title: 'Rapat Kage',
          url: 'https://d.wattpad.com/story_parts/179/images/1585520188369900607095857880.jpg',
          favorite: '80 Favorite',
        },
      ],
    };
  }

  render() {
    return (
      <View style={styles.viewContent}>
        <View style={styles.viewColor}>
          <Item rounded style={styles.inputText} regular>
            <Input
              placeholder="Pencarian"
              value={this.state.inputValue}
              onChangeText={search =>
                this.setState({ inputValue: search.toLowerCase() })
              }
            />
            <Icon active name="search" />
          </Item>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={this.state.banners.filter(item =>
              item.title.toLowerCase().includes(this.state.inputValue),
            )}
            renderItem={({ item }) => (
              <View style={styles.viewAddFav}>
                <Image
                  onPress={() =>
                    this.props.navigation.navigate('DetailEpisode', {
                      itemTitle: item.title,
                    })
                  }
                  style={{
                    width: 80,
                    height: 80,
                    borderWidth: 1,
                    borderColor: 'black',
                  }}
                  source={{ uri: item.url }}
                />
                <View style={styles.viewListItem}>
                  <Text
                    onPress={() =>
                      this.props.navigation.navigate('DetailEpisode', {
                        itemTitle: item.title,
                      })
                    }>
                    {item.title}
                  </Text>
                  <Text
                    style={{ marginTop: 5, fontSize: 13, color: '#7f8c8d' }}
                    onPress={() =>
                      this.props.navigation.navigate('DetailEpisode', {
                        itemTitle: item.title,
                      })
                    }>
                    {item.favorite}
                  </Text>
                </View>
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
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
    marginStart: 5,
    marginEnd: 5,
    alignItems: 'center',
    borderRadius: 15,
  },
  viewColor: {
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
  inputText: {
    width: '95%',
    marginTop: 20,
    marginBottom: 10,
    borderRadius: 15,
  },
  viewAddFav: {
    width: 600,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  viewListItem: {
    marginStart: 10,
    marginBottom: 10,
    justifyContent: 'center',
  },
});

export default My_Favourite;