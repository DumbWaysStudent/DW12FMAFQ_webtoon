import React, { Component } from 'react';
import { StyleSheet, FlatList, SafeAreaView, Image, TouchableOpacity, TextInput } from 'react-native';
import { Text, View, Item, Button } from 'native-base';

class CreateWebtoon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
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

  render() {
    return (
      <View>
        <Item style={[styles.inputText, styles.itemMarginBottomInput]}>
          <SafeAreaView>
            <View style={styles.viewContent}>
              <Text style={styles.titleStyle}>Title</Text>
              <TextInput
                style={{ height: 40, width: 375, borderColor: 'black', borderWidth: 2, marginStart: 10 }}
                onChangeText={text => this.setState({ inputValue: text })}
                value={this.state.inputValue}
              />
              <Text style={styles.subtitleStyle}>Episode</Text>
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
            <Button style={styles.btnAdd}>
              <Text style={{ color: "white" }}>+ ADD EPISODE</Text>
            </Button>
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
    marginStart: 5,
    marginEnd: 5,
    marginRight: 20,
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
  titleStyle: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 20,
    alignItems: 'flex-start',
    marginStart: 10
  },
  subtitleStyle: {
    fontFamily: 'Montserrat-SemiBold',
    marginTop: 20,
    fontSize: 20,
    alignItems: 'flex-start',
    marginStart: 10
  },
  btnAdd: {
    backgroundColor: 'orange',
    marginTop: 10,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'black',
    marginStart: 15
  }
});

export default CreateWebtoon;