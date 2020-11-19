import moment from 'moment';
import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import {post} from './styles';
import { useDispatch } from 'react-redux';


import Svg, {
  Path,
  Use,
  Image,
} from 'react-native-svg';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';


const PostItem = (props) => { 
  const [ isPress, setIsPress] = React.useState(false)
  const dispatch = useDispatch();


  const touchProps = {

  style : isPress ? styles.btnPress : null
  
  
  
  }

  return (

    <TouchableOpacity {...touchProps}
    
    onLongPress={() => {setIsPress(true); props.onCategorySelect(props.post.time); dispatch({
      type: "ADD_ICON",
      payload: {
        newIconName : "playlist-remove"
      }
  })}  }
    onPress={() => setIsPress(false)}

    
    >
    <View style={[post.item, post.itemOut]}>
      <View style={[post.balloon, {backgroundColor: '#E2FFC7'}]}>
      <View
          style={[
            post.arrowContainer,
            post.arrowRightContainer,
          ]}
        >
        
        {/* <Text style={{paddingRight: 10, fontSize:12, color: 'black'}}>{props.post.userMail.split('@')[0]}</Text> */}
        <Text  style={{paddingRight: 40,  color: 'black', fontSize:15, fontWeight: 'bold'}} >{props.post.postText}</Text>

        <Text style={{paddingTop: 20, paddingRight:10, color: 'black', fontSize: 10,fontWeight: 'bold' }}>
          {moment
            .duration( 
              moment(props.post.time).diff(moment(new Date()), 'seconds'),
              'seconds',
            )
            .humanize(true)}
        </Text>
        <Svg style={post.arrowRight} width={moderateScale(15.5, 0.6)} height={moderateScale(17.5, 0.6)} viewBox="32.485 17.5 15.515 17.5"  enable-background="new 32.485 17.5 15.515 17.5">
                <Path
                    d="M48,35c-7-4-6-8.75-6-17.5C28,17.5,29,35,48,35z"
                    fill="#E2FFC7"
                    x="0"
                    y="0"
                />
            </Svg>
          </View>
      </View> 
       <View >
      </View> 
    </View> 
    </TouchableOpacity>
  );
};

export {PostItem};

var styles = StyleSheet.create({
 
   btnPress: {
    backgroundColor: '#8CC9E3'
  }
});