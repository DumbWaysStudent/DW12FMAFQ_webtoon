import React, { Component } from 'react';
import { StyleSheet, FlatList, SafeAreaView, Image, TouchableOpacity, TextInput } from 'react-native';
import { Text, View, Item, Button } from 'native-base';

class EditWebtoon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      banners: [
        {
          title: 'Ep.5',
          url: 'https://vignette.wikia.nocookie.net/naruto/images/6/63/Madara_targets_Tailed_Beasts.png/revision/latest?cb=20141216140857&path-prefix=id',
          dates: '5 Februari 2019',
        },
        {
          title: 'Ep.4',
          url: 'https://i.ytimg.com/vi/o95fomzhCZo/maxresdefault.jpg',
          dates: '20 Januari 2019',

        },
        {
          title: 'Ep.3',
          url: 'https://d.wattpad.com/story_parts/179/images/1585520188369900607095857880.jpg',
          dates: '1 Januari 2019',
        },
        {
          title: 'Ep.2',
          url: 'https://i.pinimg.com/originals/ef/4a/6f/ef4a6f97b3184a39859977511dc34bad.jpg',
          dates: '15 Desember 2018',
        },
        {
          title: 'Ep.1',
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
                onChangeText={search =>
                  this.setState({ inputValue: search.toLowerCase() })
                }
                value={this.state.inputValue}
              />
              <Text style={styles.subtitleStyle}>Episode</Text>
              <FlatList
                showsVerticalScrollIndicator={false}
                data={this.state.banners.filter(item =>
                  item.title.toLowerCase().includes(this.state.inputValue),
                )}
                renderItem={({ item }) => (
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('EditEpisode')}>
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
                        <Text>{item.title}</Text>
                        <Text
                          style={{ fontSize: 13, fontColor: 'grey' }}>{item.dates}
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                )}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>
            <Button style={styles.btnAdd} onPress={() => this.props.navigation.navigate('CreateWebtoonEpisode')}>
              <Text style={{ color: "#fff" }}>+ Image</Text>
            </Button>
            <Button style={styles.btnDelete}>
              <Text style={{ color: "white" }}>Delete Episode</Text>
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
  },
  btnDelete: {
    backgroundColor: '#d63031',
    marginTop: 10,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'black',
    marginStart: 15
  }
});

export default EditWebtoon;