import { StyleSheet,Dimensions } from 'react-native';

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

const styles = StyleSheet.create({
    container : {
        flex : 1
    },
    modal : {
        width : width/2,
        height : height/4,
        borderRadius : 5
    }
})

export default styles;
