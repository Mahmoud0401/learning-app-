import React from 'react';
import { render } from 'react-dom';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, Image, ImageBackground } from 'react-native';
const Separator = () => (
    <View style={styles.separator} />
);
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 50,
        marginVertical: 20,
    },
    title: {
        textAlign: 'center',
        marginVertical: 8,
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    buttonStyle: {
        shadowColor: "black"




    }
});
export default class AccueilEns extends React.Component {
    render() {
        return (<ImageBackground

            source={require('../images/backgroundAccueil.jpg')}
            style={{
                width: "100%", height: "100%"
            }}
        >
            <SafeAreaView style={styles.container}>


                <View>
                    <Button


                        color="#85C1E9"
                        title="Your course list"
                        onPress={() => this.props.navigation.navigate("managingModules")}
                    />
                </View>
                <Separator />
                <View>

                    <Button
                        color="#C39BD3"
                        title="Your profile"

                    />
                </View>



            </SafeAreaView>
        </ImageBackground >

        );



    }
}

