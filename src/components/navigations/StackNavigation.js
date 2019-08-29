import { createAppContainer,createStackNavigator } from 'react-navigation'
import Home from '../Home';
import Login from '../Login'

const stackNavigator = createStackNavigator(
    {
      
        home : {
            screen : Home,
          
        },
        login : {
            screen : Login
        },
    }
)

export default AppContainer = createAppContainer(stackNavigator)