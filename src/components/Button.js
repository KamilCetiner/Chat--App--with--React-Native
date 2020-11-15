import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native'

import {button} from '../styles'


const Button = (props) => {
    
    return(
        <View style={button.container} >
            <TouchableOpacity style={button.Touch}
            onPress={props.onPress}
            
            
            >
                <Text style={button.text}> {props.title} </Text>

            </TouchableOpacity>
        </View>
    )
}


export {Button}