import React, {useState} from 'react';
import  moment from 'moment'
import {View, Text, FlatList} from 'react-native';
import auth from '@react-native-firebase/auth'
import database  from '@react-native-firebase/database'

import {timelinePage} from './style';

import { PostInput,Header, TopicSelectModal} from '../components';

const user = auth().currentUser;

const Timeline = () => {

    const[topicModalFlag, setTopicModalFLag] = useState(true);
    const [selectedTopic, setSelectedTopic] = useState(null);

    const selectingTopic = (value) => {
        setSelectedTopic(value);
        setTopicModalFLag(false) 

        database()
        .ref()
        .on('value', (snapshot) => {
            console.log('UPDATE...')
            console.log(snapshot.val())
        })
         
    }

    

    const sendingPost = (value) => {
        const postObject = {
            userMail : user.email,
            postText : value,
            time : moment().toISOString()
        }
        database().ref(`${selectedTopic}/`).push(postObject);
    }

    return(
    <View style={timelinePage.container}>
        <View style={timelinePage.container}>

            <Header
            title={selectedTopic}
            onTopicModalSelect={() => setTopicModalFLag(true)}
 
            />

            <FlatList

            data={[]} renderItem={() => null} />

            <PostInput 
            onSendPost={sendingPost}
            
            />

            <TopicSelectModal 
            visibility={topicModalFlag}
            onClose={() => selectedTopic ?  setTopicModalFLag(false) : null}
            onTopicSelect={selectingTopic}
            />
        </View>


    </View>
    )
}

export {Timeline};


