import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, Image, Alert, Platform, TouchableHighlight, Dimensions, TextInput, ClippingRectangle } from 'react-native';
import Modal from 'react-native-modalbox';
import Button from 'react-native-button';
import flatListData from '../data/flatListData'
var screen = Dimensions.get('window');

export default class EditModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            foodName: '',
            foodDescription: ''
        }
    }
    showEditModal = (edittingFood, flaslistItem) => {
        console.log(`edittingFood = ${JSON.stringify(edittingFood)}`)
        this.setState({
            key: edittingFood.key,
            foodName: edittingFood.name,
            foodDescription: edittingFood.foodDescription,
            flaslistItem: flaslistItem,
        })
        this.refs.myModal.open();
    }

    generateKey = (numberOfCharacters) => {
        return require('random-string')({ length: numberOfCharacters });
    }
    render() {
        return (
            <Modal
                ref={"myModal"}
                style={{
                    justifyContent: 'center',
                    borderRadius: Platform.OS === 'ios' ? 30 : 0,
                    shadowRadius: 10,
                    width: screen.width - 80,
                    height: 280,
                }}
                position='center'
                backdrop={true}
                onClosed={() => {
                    alert('Modal closed');
                }}
            >
                <Text
                    style={{
                        fontSize: 18,
                        fontWeight: 'bold',
                        textAlign: 'center',
                        marginTop: 40
                    }}
                >Food's infomation</Text>
                <TextInput
                    style={{
                        height: 40,
                        borderBottomColor: 'gray',
                        marginLeft: 30,
                        marginRight: 30,
                        marginBottom: 10,
                        borderBottomWidth: 1,
                    }}
                    onChangeText={(text) => this.setState({ foodName: text })}
                    placeholder="Enter food's name"
                    value={this.state.foodName}
                />
                <TextInput
                    style={{
                        height: 40,
                        borderBottomColor: 'gray',
                        marginLeft: 30,
                        marginRight: 30,
                        marginBottom: 10,
                        borderBottomWidth: 1,
                    }}
                    onChangeText={(text) => this.setState({ foodDescription: text })}
                    placeholder="Enter food's name"
                    value={this.state.foodDescription}
                />
                <Button
                    style={{ fontSize: 18, color: 'white' }}
                    containerStyle={{
                        padding: 8,
                        marginLeft: 70,
                        marginRight: 70,
                        borderRadius: 6,
                        backgroundColor: 'green'
                    }}
                    onPress={() => {
                        if (this.state.foodName.length == 0 || this.state.foodDescription.length == 0) {
                            alert("You must enter food's name and description")
                        }
                        // Update food
                        var foundIndex = flatListData.findIndex(item => this.state.key == item.key);
                        if (foundIndex < 0) {
                            return; //not found
                        }
                        flatListData[foundIndex].name = this.state.foodName;
                        flatListData[foundIndex].foodDescription = this.state.foodDescription;
                        this.state.flaslistItem.refreshFlatListItem();
                        this.refs.myModal.close();
                    }}
                >
                    Save
                </Button>
            </Modal>
        )
    }
}