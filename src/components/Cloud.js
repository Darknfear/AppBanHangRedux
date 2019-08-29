import React, { Component } from 'react';
import { Container} from 'native-base'
import {Image } from 'react-native';
export default class Cloud extends Component {
    static navigationOptions = ({ navigation }) => {
        let tabBarLabel = "Cloud"
        let tabBarIcon = () => {
            return(
                <Image 
                    source={require("../assets/icon/cloud.png")}/>
            );
    }
    let swipeEnabled = true  
        return {  tabBarLabel,tabBarIcon,swipeEnabled }
    }
    constructor(props){
        super(props)
    }
    render() {
        return (
            <Container style={{ flex: 1, backgroundColor: "red" }} />
        );
    }
}