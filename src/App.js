import React, { Component } from 'react';
import AppContainer from './components/navigations/TabNavigator'
import { Provider } from 'react-redux'
import store from './redux/store/Store'
export default class App extends Component{
    render(){
        return(
            <Provider store={store}>
                <AppContainer />
            </Provider>
        );
    }
}