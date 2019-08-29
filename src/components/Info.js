import React, { Component } from 'react';
import { Container } from 'native-base'
import { Image } from 'react-native';
export default class Info extends Component {
    static navigationOptions = ({navigation}) => {
     
        let header = null;
        let tabBarLabel = "Info"
        let tabBarIcon = () => {
            return(
                <Image 
                    source={require("../assets/icon/info.png")}/>
            );
          
    }
    let swipeEnabled = true  
        return { tabBarLabel,tabBarIcon,swipeEnabled }
       
    }
    constructor(props){
        super(props)
    }
    render(){
        return(
            <Container style={{flex : 1,backgroundColor : "yellow"}}/>
        );
    }
}