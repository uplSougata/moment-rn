import { Dimensions, StyleSheet, useColorScheme } from "react-native";
const { height, width } = Dimensions.get("window");

export const HomeCardStyles = StyleSheet.create({
    mainCard: {
        borderRadius: 5,
        marginTop: 5,
        overflow: 'hidden'
    },
    detailsTextStyle: {
        color: 'white',
        fontFamily: 'PlayfairDisplay-Italic',
        fontSize: 15,
        fontWeight: '500'
    },
    headingStyle: {
        color: 'white',
        fontFamily: 'PlayfairDisplay-Italic',
        fontSize: 18,
        fontWeight: '400'
    },
    backGroundImageStyle: {
        height: 'auto',
        width: Dimensions.get('window').width / 2,
    }

})


export const HomeStyles = StyleSheet.create({
    floatingButtonStyle: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        backgroundColor: '#7AA2E3',
        borderRadius: 60,
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
    }
})


export const DetailsScreenStyles = StyleSheet.create({
    mainContainer: {
        height: height,
        width: width,
        // borderWidth:1
        alignItems: 'center',
    },
    imageStyle: {
        height: height / 2.5,
        width: width,
        resizeMode: 'cover',
    },
    scrollViewStyle: {
        height: height - 80,
        width: width - 30,
        marginTop: -70,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        elevation: 10,
        padding:20
    },
    headerTextStyle:{
        fontSize:20,
        fontWeight:'700',
    },
    headerTextContainer:{
        paddingVertical:15
    },
    descriptionTextStyle:{
        fontSize:15,
        fontWeight:'500',
        lineHeight:20,
    }

})
export const AddDetailsStyles = StyleSheet.create({}) 