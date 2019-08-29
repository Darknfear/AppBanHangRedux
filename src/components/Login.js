import React, { Component } from 'react';
import { Container,Input,Button,Body,Text} from 'native-base'
import styles from '../styles/StyleInLogin'

export default class Login extends Component{
    
    render(){
        return(
            <Container style={styles.container}>
                <Container style={{flex : 2}}/>
                <Container style={{flex : 1}}>
                    <Input style={styles.input}/>
                    <Input style={styles.input}/>
                </Container>
                <Container  style={{flex : 4,alignItems : "center",margin : 5}}>
                    <Button 
                        onPress={() => this.props.navigation.navigate("home")}
                        style={styles.button}>
                        <Body>
                            <Text>Đăng Nhập</Text>
                        </Body>
                    </Button>
                </Container>
            </Container>
        );
    }
}