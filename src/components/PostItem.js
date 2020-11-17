import moment from 'moment';
import React from 'react';
import {Text, View} from 'react-native';
import {post} from './styles';

import Svg, {
  Path,
  Use,
  Image,
} from 'react-native-svg';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';


const PostItem = (props) => { 
  return (
    <View style={[post.item, post.itemOut]}>
      <View style={[post.balloon, {backgroundColor: '#1084ff'}]}>
      <View
          style={[
            post.arrowContainer,
            post.arrowRightContainer,
          ]}
        >
        
        {/* <Text style={{paddingRight: 10, color: 'white'}}>{props.post.userMail.split('@')[0]}</Text> */}
        <Text  style={{paddingRight: 40,  color: 'white', fontSize:15}} >{props.post.postText}</Text>

        {/* <Text style={{paddingTop: 5, color: 'white'}}>
          {moment
            .duration( 
              moment(props.post.time).diff(moment(new Date()), 'seconds'),
              'seconds',
            )
            .humanize(true)}
        </Text> */}
        <Svg style={post.arrowRight} width={moderateScale(15.5, 0.6)} height={moderateScale(17.5, 0.6)} viewBox="32.485 17.5 15.515 17.5"  enable-background="new 32.485 17.5 15.515 17.5">
                <Path
                    d="M48,35c-7-4-6-8.75-6-17.5C28,17.5,29,35,48,35z"
                    fill="#1084ff"
                    x="0"
                    y="0"
                />
            </Svg>
          </View>
      </View> 
       <View >
      </View> 
    </View> 
  );
};

export {PostItem};