import React, { Component } from 'react';
import { StyleSheet, FlatList, Image } from 'react-native';
import { Container, View, Content } from 'native-base';

class DetailEpisode extends Component {
    constructor(props) {
        super(props);
        this.state = {
            position: 1,
            interval: null,
            banners: [
                {
                    url: 'https://i0.wp.com/mangacanblog.com/mangas/naruto/381%20-%20Jiraya%20Vs%20Pain/04.jpg',
                },
                {
                    url: 'https://i2.wp.com/mangacanblog.com/mangas/naruto/381%20-%20Jiraya%20Vs%20Pain/11.jpg',
                },
                {
                    url: 'https://i2.wp.com/mangacanblog.com/mangas/naruto/381%20-%20Jiraya%20Vs%20Pain/11.jpg',
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
            <Container style={styles.container}>
                <Content>
                    <View>
                        <View style={styles.viewColor}>
                            <FlatList
                                showsVerticalScrollIndicator={false}
                                data={this.state.banners}
                                renderItem={({ item }) => (
                                    <View style={styles.viewAddFav}>
                                        <Image
                                            style={{
                                                width: '100%',
                                                height: 500,
                                            }}
                                            source={{ uri: item.url }}
                                        />
                                    </View>
                                )}
                                keyExtractor={item => item}
                            />
                        </View>
                    </View>
                </Content>
            </Container>
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
    itemMarginBottom: {
        marginBottom: 10,
    },
    itemMarginBottomInput: {
        marginBottom: 20,
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
        width: '100%',
        marginStart: 10,
        justifyContent: 'center',
    },
    btnFavorite: {
        height: 20,
        width: 120,
    },
});

export default DetailEpisode;