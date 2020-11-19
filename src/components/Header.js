import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector} from 'react-redux';

import {header} from './styles';

const Header = (props) => {
  const homeIcon = useSelector( x => x.iconName)

 
  return (
    <View style={header.container}>
      <View style={header.textContainer}>
        <Text style={header.text}>#{props.title}</Text>
      </View>
      <View style={{justifyContent: 'center', flexDirection: 'row'}}>

      {/* { This aim was to remove all the item 
          homeIcon ? <Icon onPress={props.onRemoveAll} style={{marginRight:40}} name='playlist-remove' size={50} color="#5c6bc0" 
           /> :null
        } */}
        
        <Icon
          name="chat-plus-outline"
          size={35}
          color="#5c6bc0"
          onPress={props.onTopicModalSelect}
          style={{
            marginRight: 20,
            
            
          }}
        />
   

       
       
      </View>
    </View>
  );
};

export {Header};