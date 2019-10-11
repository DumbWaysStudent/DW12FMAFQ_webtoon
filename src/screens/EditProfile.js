import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Icon, Item, Input } from 'native-base'
import ImagePicker from 'react-native-image-picker'
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window')
export default class Profile extends Component {
  constructor() {
    super()
    this.state = {
      data: { name: "asffd" },
      image: {
        uri: 'data:image/png;base64,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'
      }
    }
  }

  _handleFinishEdit = () => {
    this.props.navigation.navigate('Profile')
  }

  handleChoosePhoto = () => {
    const options = {
      title: 'Pilih Photo',
      customButtons: [],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        let tmpPhoto = {
          uri: response.uri,
          type: response.type,
          name: response.fileName,
        };
        const source = tmpPhoto;
        this.setState({
          image: source
        });
      }
    });
  };

  render() {
    return (
      <ScrollView style={{ position: 'relative', backgroundColor: '#f7f7f7' }}>
        <View style={{ width: SCREEN_WIDTH, height: SCREEN_HEIGHT / 12, }}>
        </View>
        <View >
          <View style={{ alignItems: "center", }}>
            <Image style={styles.avatar} source={{ uri: this.state.image.uri }} />
            <Icon onPress={this.handleChoosePhoto} name="camera" />
          </View>
          <View style={{ alignItems: "center", marginTop: 50 }}>
            <Item>
              <Input
                placeholder='Your Name'
              />
            </Item>
            <Item>
              <Input placeholder='Your Address' />
            </Item>
          </View>

        </View>


      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  absolutebg: {
    padding: 20,
    backgroundColor: '#2ce617',
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between",
    width: SCREEN_WIDTH,
    borderBottomEndRadius: SCREEN_WIDTH,
    borderBottomStartRadius: SCREEN_WIDTH,
    height: SCREEN_HEIGHT / 4,
  },
  avatar: {
    padding: 20,
    width: SCREEN_WIDTH / 2.5,
    height: SCREEN_WIDTH / 2.5,
    borderRadius: SCREEN_WIDTH / 5,
    borderColor: 'black',
    borderWidth: 1
  },
  texthello: {
    fontSize: 20,
    color: 'white',
    fontFamily: "OpenSans-SemiBold"
  },
  nameInfo: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 20
  }
})