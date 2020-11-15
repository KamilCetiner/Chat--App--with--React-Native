import React from 'react'
import {View, TextInput} from 'react-native'

import {input_style} from '../styles'


const Input = (props) => {
    return(
        <View style={input_style.container}>
            <TextInput style={input_style.textInput}
            placeholder={props.placeholder}
            {...props.inputProps}
            onChangeText={props.onValue}
            />            
        </View>
    )
}


export {Input}