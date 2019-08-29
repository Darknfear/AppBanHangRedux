import React, { Component } from 'react';
import { Container, Button, Text, Body,Icon,Input ,Header,Right,Left} from 'native-base'
import { Dimensions,Image,TouchableOpacity } from 'react-native';
import NewModal from './modal/modal'
import styles from '../styles/StyleInHome'
import { TabView, SceneMap } from 'react-native-tab-view';
import { connect } from 'react-redux'
// const FirstRoute = () => (
//     <Container />
//   );
//   const SecondRoute = () => (
//     <Container  />
//   );

class Home extends Component {
    static navigationOptions = ({navigation}) => {
        // const { params = {} } = navigation.state;
        // let headerTitle = "Home";
        // let headerTitleStyle = { color : "red",}
        // let headerStyle = { backgroundcolor : "#8DEEEE"}
        // let headerRight= (
        //     <TouchableOpacity
        //         onPress={() => {
                
        //         }}>
        //         <Image source={require("../assets/icon/search.png")} />
        //     </TouchableOpacity>
        // )
        let header = null;
        let tabBarLabel = "Home"
        let  gesturesEnabled = false
        let tabBarIcon = () => {
                return(
                    <Image 
                        source={require("../assets/icon/home.png")}/>
                );
        }
        let swipeEnabled = true  
        return { tabBarIcon,tabBarLabel,gesturesEnabled}
    }
     
    onShowModal = () => {
        this.props.dispatch({
            type : "SHOW_SEARCH"
        })
    }


    constructor(props) {
        super(props);
       
    }
    render() {
        const title = this.props.isShowSearch ? <Input placeholder="Tìm kiếm"/> : <Text>Home</Text>
        console.log("dispatch" + this.props.isShowSearch)
        return (
            <Container style={styles.container}>
                <Header style={styles.heder}>
                    <Left></Left>
                    <Body style={styles.body}>
                        {title}
                    </Body>
                    <Right>
                        <TouchableOpacity 
                            onPress={() => this.onShowModal()}>
                        <Image source={require("../assets/icon/search.png")}/>
                        </TouchableOpacity>
                    </Right>
                </Header>
                {/* <TabView
                
                    style={styles.tabview}
                    navigationState={this.state}
                    renderScene={SceneMap({
                        first: FirstRoute,
                        second: SecondRoute,
                    })}
                    onIndexChange={index => this.setState({ index })}
                    //initialLayout={{ width: Dimensions.get('window').width }}
                /> */}
                <NewModal 
                ref="myModal" />
               
            </Container>
        );
    }
}
function mapStateToProps(state) {
    return {
        isShowSearch : state.isShowSearch
    }
}
export default connect(mapStateToProps)(Home)