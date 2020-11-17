import { useLinkProps } from '@react-navigation/native';
import React from 'react';
import {View, Text, FlatList, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {post_input} from './styles';

const PostInput = (props) => {

    const [postText, setPostText] = React.useState('');
    return(
        <View>
            <View>
                <TextInput
                multiline
                placeholder='Enter your message...'
                onChangeText={(value) => setPostText(value) }

                />
            </View>

            <TouchableOpacity

            style={{justifyContent: 'center'}}
            onPress={() => props.onSendPost(postText)}>
            <Icon name='telegram' size={30} color='#69007f' />

            </TouchableOpacity>

        </View>
    )
}

export {PostInput}