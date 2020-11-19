import React, {useRef} from 'react';
import {View, Text, FlatList, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {post_input} from './styles';

const PostInput = (props) => {

    const [postText, setPostText] = React.useState('');
    // clearing text input with Useref
    const inputRef = useRef();   
    const onClearInput = () => {
      inputRef.current.clear();
    };
    return(
        <View>
            <View>
                <TextInput
                ref={inputRef}
                placeholder='Enter your message...'
                onChangeText={(value) =>setPostText(value) }

                />
            </View>

            <TouchableOpacity

            style={{justifyContent: 'center'}}
            onPress={() => {props.onSendPost(postText); onClearInput()}}>
            <Icon name='telegram' size={30} color='#69007f' />

            </TouchableOpacity>

        </View>
    )
}

export {PostInput}