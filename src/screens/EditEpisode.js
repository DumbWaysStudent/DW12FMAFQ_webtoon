import React, { Component } from 'react';
import { StyleSheet, FlatList, SafeAreaView, Image, TouchableOpacity, TextInput } from 'react-native';
import { Text, View, Item, Button } from 'native-base';

class EditEpisode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      banners: [
        {
          title: '1.cover.png',
          url: 'https://vignette.wikia.nocookie.net/naruto/images/6/63/Madara_targets_Tailed_Beasts.png/revision/latest?cb=20141216140857&path-prefix=id',
        },
        {
          title: '2.introduction.png',
          url: 'https://i.ytimg.com/vi/o95fomzhCZo/maxresdefault.jpg',

        },
        {
          title: '3.basic.png',
          url: 'https://d.wattpad.com/story_parts/179/images/1585520188369900607095857880.jpg',
        },
        {
          title: '4.advance.png',
          url: 'https://i.pinimg.com/originals/ef/4a/6f/ef4a6f97b3184a39859977511dc34bad.jpg',
        },
        {
          title: '5.tutor.png',
          url: 'https://dreager1.files.wordpress.com/2012/02/jiraiya_killed_by_pain.jpg',
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
              <Text style={styles.titleStyle}>Name</Text>
              <TextInput
                style={{ height: 40, width: 375, borderColor: 'black', borderWidth: 2, marginStart: 10 }}
                onChangeText={text => this.setState({ inputValue: text })}
                value={this.state.title}
              />
              <Text style={styles.subtitleStyle}>Add Image</Text>
              <FlatList
                showsVerticalScrollIndicator={false}
                data={this.state.banners}
                renderItem={({ item }) => (
                  <View style={styles.viewAddFav}>
                    <Image
                      style={{
                        width: 70,
                        height: 70,
                        borderWidth: 2,
                        borderColor: 'black',
                      }}
                      source={{ uri: item.url }}
                    />
                    <View style={styles.viewListItem}>
                      <TouchableOpacity onPress={() => this.props.navigation.navigate('DetailEpisode')}>
                        <Text>{item.title}</Text>
                      </TouchableOpacity>
                      <Button
                        warning
                        style={{ justifyContent: 'center', height: 30, width: 90 }}>
                        <Text style={{ fontSize: 12 }}>Delete</Text>
                      </Button>
                    </View>
                  </View>
                )}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>
            <Button style={styles.btnAdd}>
              <Text style={{ color: "black" }}>+ Image</Text>
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
    backgroundColor: '#fff',
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

export default EditEpisode;