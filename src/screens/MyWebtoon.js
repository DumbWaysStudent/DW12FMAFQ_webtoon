import React, { Component } from 'react';
import { StyleSheet, FlatList, Image } from 'react-native';
import { Text, View, Icon, Item, Input, Fab } from 'native-base';

class MyWebtoon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      banners: [
        {
          title: 'Kematian Jiraiya',
          url: 'https://dreager1.files.wordpress.com/2012/02/jiraiya_killed_by_pain.jpg',
          favorite: '32 Episode(s)',
        },
        {
          title: 'Naruto vs Pain',
          url: 'https://i.pinimg.com/originals/ef/4a/6f/ef4a6f97b3184a39859977511dc34bad.jpg',
          favorite: '20 Episode(s)',
        },
        {
          title: 'Rapat Kage',
          url: 'https://d.wattpad.com/story_parts/179/images/1585520188369900607095857880.jpg',
          favorite: '42 Episode(s)',
        },
        {
          title: 'Itachi vs Sasuke',
          url: 'https://i.ytimg.com/vi/o95fomzhCZo/maxresdefault.jpg',
          favourite: '25 Episode(s)',
        },
        {
          title: 'Bangkitnya Madara',
          url: 'https://vignette.wikia.nocookie.net/naruto/images/6/63/Madara_targets_Tailed_Beasts.png/revision/latest?cb=20141216140857&path-prefix=id',
          favorite: '10 Episode(s)'
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
        <Fab
          direction="up"
          containerStyle={{}}
          style={{ backgroundColor: 'orange' }}
          position="bottomRight"
          onPress={() => this.props.navigation.navigate('CreateWebtoon')}>
          <Icon name="add" />
        </Fab>
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

export default MyWebtoon;