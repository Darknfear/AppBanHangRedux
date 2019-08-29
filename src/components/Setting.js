import React, { Component } from 'react';
import { Container } from 'native-base'
import { Image } from 'react-native';

export default class Setting extends Component {
    static navigationOptions = ({navigation}) => {
        let tabBarLabel = "Setting"
        let tabBarIcon = () => {
                return(
                    <Image 
                        source={require("../assets/icon/setting.png")}/>
                );
        }
        let swipeEnabled = true  
        return { tabBarIcon,tabBarLabel,swipeEnabled }
    }
     
    
    constructor(props) {
        super(props);
       
    }
    render() {
      
        return (
            <Container style={{flex : 1,backgroundColor :"green"}}>
                
            </Container>
        );
    }
}
