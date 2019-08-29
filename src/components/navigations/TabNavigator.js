import { createAppContainer,createBottomTabNavigator } from 'react-navigation'
import Cloud from '../Cloud'
import Setting from '../Setting'
import Home from '../Home'
import Info from '../Info'

const TabNavigator = createBottomTabNavigator(
    {
        home : {
            screen : Home
        },
        info : {
            screen : Info
        },
        setting : {
            screen : Setting
        }, 
        cloud : {
            screen : Cloud
        }
    },
    {
        animationEnabled : true,
        swipeEnabled : true,
        navigationOptions : {
              gesturesEnabled : false
        },
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          },
    }
   
)

const AppContainer = createAppContainer(TabNavigator);

export default AppContainer;