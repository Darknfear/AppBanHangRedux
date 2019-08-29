import { StyleSheet,Dimensions } from 'react-native';

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

const styles = StyleSheet.create({
    container : {
        flex : 1,   
    },
    button : {
        width : width/4,
        height : height/16,
        justifyContent : "center",
        alignItems : "center"
    },
    firstRouter : {
        flex : 1,
        backgroundColor : "yellow"
    },
    tabview : {
        flex : 1
    },
    body : {
        justifyContent : "center",
        alignItems : "center"
    },
    heder : {
        backgroundColor : "white"
    }
})
export default styles;