import React,{Component}from 'react';
import {
    View,
    Text,} from 'react-native';
import firebase from 'firebase';
import db from '../config';
import { createStackNavigator } from '@react-navigation/stack';

export default class RecieversDetailScreen extends React.Component() {
    constructor(props) {
        super(props);
        this.state = {
            userId: firebase.auth().currentUser.email,
            recieverId: this.props.navigation.getParam('details')["user_id"],
            requestId: this.props.navigation.getParam('details')["request_id"],
            bookName: this.props.navigation.getParam('details')["book_name"],
            reason_for_requesting: this.props.navigation.getParam('details')["reason_to_request"],
            recieverName: '',
            recieverContact: '',
            recieverAddress: '',
            recieverRequestDocId: '',
        }
    }

    getRecieverDetails() {
        
        db.collection('users').where('email_id','==',this.state.receiverId).get()
        .then(snapshot => {
          snapshot.forEach(doc => {
            this.setState({
             
              receiverName : doc.data().first_name, 
              receiverAddress   : doc.data().address,
              receiverContact   : doc.data().contact,
            })
          });
        }
    }// continue here

    
    render() {
        return(
            <View>
                <Text>
                    Reciever Detail Screen
                </Text>
            </View>
        )
    }
}