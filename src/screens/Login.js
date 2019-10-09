import React, { Component } from 'react';
import { StyleSheet, Image } from 'react-native';
import { Container, Text, View, Icon, Item, Label, Input, Button } from 'native-base';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPassword: false,
      validLogin: false,
      validEmail: true,
      emailValue: '',
      passwordValue: '',
      userEmail: 'asu@gmail.com',
      userPassword: 'jiancuk',
    };
  }

  handleEmail = text => {
    this.setState({ emailValue: text });
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(text) === false) {
      this.setState({ validEmail: false });
    } else {
      this.setState({ validEmail: true });
      if ((this.state.userEmail == text) && (this.state.passwordValue == this.state.userPassword)) {
        this.setState({ validLogin: true });
      } else {
        this.setState({ validLogin: false });
      }
    }
  };

  handlePassword = text => {
    this.setState({ passwordValue: text });
    if ((this.state.emailValue == this.state.userEmail) && (this.state.userPassword == text)) {
      this.setState({ validLogin: true });
    } else {
      this.setState({ validLogin: false });
    }
  };

  showPassword = () => {
    if (this.state.passwordValue != '') {
      !this.state.showPassword ? this.setState({ showPassword: true }) : this.setState({ showPassword: false });
      if ((this.state.emailValue == this.state.userEmail) && (this.state.passwordValue == this.state.userPassword)) {
        this.setState({ validLogin: true });
      } else {
        this.setState({ validLogin: false });
      }
    }
  };

  render() {
    return (
      <Container style={styles.container}>
        <View style={styles.content}>
          <Image style={styles.image} source={require('../assets/logo.png')}></Image>
          <Text style={styles.title}>LOG IN</Text>
          <Text style={styles.subtitle}>
            Login with your account WEBTOON
          </Text>
          <Item floatingLabel style={[styles.inputEmail, !this.state.validEmail ? styles.textInputError : null]}>
            <Label>Email</Label>
            <Input
              placeholder="Email"
              autoCapitalize="none"
              onChangeText={text => this.handleEmail(text)}
              value={this.state.emailValue}
            />
          </Item>
          <Item floatingLabel style={styles.inputPassword}>
            <Label>Password</Label>
            <Input
              placeholder="Password"
              autoCapitalize="none"
              secureTextEntry={!this.state.showPassword ? true : false}
              onChangeText={text => this.handlePassword(text)}
              value={this.state.passwordValue}
            />
            <Icon
              active name={!this.state.showPassword ? "eye" : "eye-off"}
              onPress={() => {
                this.showPassword();
              }}
            />
          </Item>
          <Button full warning rounded
            disabled={!this.state.validLogin}
            onPress={() => this.props.navigation.navigate('Home')}
          >
            <Text style={styles.textButton}>Log In</Text>
          </Button>
        </View>
      </Container>
    );
  }
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f6fa',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 15,
    marginBottom: '10%',
    textAlign: 'center',
  },
  textInput: {
    fontSize: 20,
    borderWidth: 1,
  },
  textButton: {
    color: 'black',
  },
  inputEmail: {
    marginBottom: '3%',
    width: '80%',
  },
  inputPassword: {
    marginBottom: '8%',
    width: '80%',
  },
  textInputError: {
    borderColor: 'red',
  },
  image: {
    width: 130,
    height: 120,
    marginBottom: 30,
    alignSelf: "center"
  }
});