import React, {useState} from 'react';
import  moment from 'moment'
import {View, Text, FlatList} from 'react-native';
import auth from '@react-native-firebase/auth';
import database  from '@react-native-firebase/database';
import {Provider} from 'react-redux';
import {createStore} from 'redux'

import {reducer, initialState} from '../contex';
const store = createStore(reducer, initialState)

import {timelinePage} from './style';

import { PostItem, PostInput,Header, TopicSelectModal} from '../components';

const user = auth().currentUser;

const Timeline = (props) => {

    const [postList, setPostList] = useState([]);
    const [indexList, setIndexList] = useState([]);

    const[topicModalFlag, setTopicModalFLag] = useState(true);
    const [selectedTopic, setSelectedTopic] = useState(null);

    const selectingTopic = (value) => {
        database().ref(`/${selectedTopic}/`).off('value');
        setSelectedTopic(value);
        setTopicModalFLag(false) 

        database()
        .ref(`${value}`) 
        .on('value', (snapshot) => {

            const data = snapshot.val()
            const formattedData = Object.keys(data).map(key =>({ ...data[key]  }))
            

            formattedData.sort((a, b) => {
                return new Date(b.time) - new Date(a.time)
            })
                
            setPostList(formattedData);
            
            
        }); 
         
    };

    const onRemove =(moves) => {
        console.log(moves)
        
        const newMessages = [...postList]
        
        const messagesIndex = postList.findIndex((msg) => {
            const selectedTime = msg.time 
            console.log(selectedTime)
            return selectedTime === moves ? postList.indexOf(selectedTime) : null
            
        })

        setIndexList(messagesIndex)
        newMessages.splice(messagesIndex, 1)
        setPostList(newMessages)



        
    }

    // const onRemoveAllItem = () => {
        
    // }


    // const formattedData = Object.keys(data).map(key =>({
    //     userMail : data[key].userMail,
    //     postText : data[key].postText,
    //     time : data[key].time

    //     setPostList(formattedData);
    // }))

    const renderPost = ({item}) => <PostItem onCategorySelect={(value) => onRemove(value)}
        
    post={item} />

    const sendingPost = (value) => {
        const postObject = {
            userMail : user.email,
            postText : value,
            time : moment().toISOString()
        }
        database().ref(`${selectedTopic}/`).push(postObject);
    }

    return(

    <Provider store={store}>
    <View style={timelinePage.container}>
        <View style={timelinePage.container}>

            <Header

            title={selectedTopic}
            onTopicModalSelect={() => setTopicModalFLag(true)}
             
            />

            <FlatList
            
            keyExtractor={(_, index) => index.toString()}
            data={postList} 
            renderItem={renderPost} 
            /> 

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
    </Provider>
    )
}

export {Timeline};


