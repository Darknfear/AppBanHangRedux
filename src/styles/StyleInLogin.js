import { StyleSheet,Dimensions } from 'react-native';
const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;
const styles = StyleSheet.create({
    container : {
        flex : 1,
        paddingHorizontal : 10
    },
    input : {
        borderBottomWidth : 1,
        padding : 5,

    },
    button : {
        width : width/4,
        height : height/16
    }
    
})

export default styles;