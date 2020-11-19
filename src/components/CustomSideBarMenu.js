import React from 'react';
import {useSelector} from 'react-redux';


import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  Linking,
  Dimensions,
} from 'react-native';

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';




const CustomSidebarMenu = (props) => {
  const drawer_user = useSelector(y =>y.userName)

  
  return (
    
    <SafeAreaView style={{flex: 0.7}}>
      
      {/*Top Large Image */}
      <View style={styles.container} > 

      <View>
      <Image
        source={{uri:'https://i.sozcu.com.tr/wp-content/uploads/2018/07/iecrop/f4-2_1_1_1532941431-400x400.jpg'}}
        style={styles.sideMenuProfileIcon}
      /> 
      <Text style={{marginLeft:15, color:'black', fontWeight:'bold',color:'white'}}>{drawer_user}</Text>

      </View>
      </View>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        
        </DrawerContentScrollView>
      <Text
        style={{
          fontSize: 16,
          textAlign: 'center',
          color: 'grey'
        }}> {props.userShow}
       
      </Text>
    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#64b5f6',
    height: Dimensions.get('window').height / 4.3,
  },
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: 85,
    height: 90,
    borderRadius: 100 / 1.5,
    marginLeft: 15,
    marginBottom: 50,
    marginTop:20
  },
  iconStyle: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
  },
  customItem: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export {CustomSidebarMenu};
