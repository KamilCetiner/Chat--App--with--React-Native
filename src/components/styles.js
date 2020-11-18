import {StyleSheet, Dimensions} from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

export const input = StyleSheet.create({
  container: {
    backgroundColor: '#eceff1',
    margin: 10,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  textInput: {},
});

export const button = StyleSheet.create({
  container: {
    backgroundColor: 'purple',
    margin: 10,
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export const button_outline = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  title: {
    color: 'purple',
    fontWeight: 'bold',
  },
});

export const post = StyleSheet.create({
  item: {
    marginVertical: moderateScale(7, 2),
    flexDirection: 'row'
 },
 itemIn: {
     marginLeft: 20
 },
 itemOut: {
    alignSelf: 'flex-end',
    marginRight: 20
 },
 balloon: {
    maxWidth: moderateScale(250, 2),
    paddingHorizontal: moderateScale(100, 2),
    paddingTop: moderateScale(55, 2),
    paddingBottom: moderateScale(10, 2),
    paddingRight: moderateScale(40, 2),
    borderRadius: 20,
 },
 arrowContainer: {
     position: 'absolute',
     top: 0,
     left: 0,
     right: 0,
     bottom: 0,
     zIndex: -1,
     flex: 1,

 },
 arrowLeftContainer: {
     justifyContent: 'flex-end',
     alignItems: 'flex-start'
 },

 arrowRightContainer: {
     justifyContent: 'center',
     alignItems: 'flex-end',
     paddingLeft:10

 },

 arrowLeft: {
     left: moderateScale(-6, 0.5),
 },

 arrowRight: {
     right:moderateScale(-6, 0.5),
 }
});

export const post_input = StyleSheet.create({
   container: {
      width: Dimensions.get('window').width * 0.9,
      alignSelf: 'center',
      bottom: 10,
      position: 'absolute',
      backgroundColor: '#e0e0e0',
      borderRadius: 5,
      padding: 5,
      flexDirection: 'row',
      borderWidth: 1,
      borderColor: "#b0bec5"
   },  
   inputContainer: {
      flex: 1,
   },
   button: {

   }
});

export const header = StyleSheet.create({
   container: {
      flexDirection: 'row',
      padding: 5,
      alignItems: 'center',
      borderBottomWidth: 1,
      borderColor: '#90a4ae'
   },  
   textContainer: {
      flex: 1
   },  
   text: {
      fontSize: 30,
      fontWeight: 'bold',
      color: '#78909c'
   },  
});

export const topicModal = StyleSheet.create({
  modal: {
    margin: 0,
    justifyContent: 'flex-end',
    padding: 0,
    paddingHorizontal: 10
  },  
  container: {
    paddingTop: 5,
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  topicItemContainer: {
     padding: 10,
  },  
  topicItemText: {
     fontSize: 20,
     fontWeight: 'bold',
     color: '#78909c'
  },  
});