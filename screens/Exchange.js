import React, { Component } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView, KeyboardAvoidingView} from 'react-native';
import MyHeader from '../components/MyHeader';
import db from '../config';
import firebase from 'firebase';

export default class Home extends Component {

constructor(){
super()
this.state = {
userName: firebase.auth().currentUser.email,
itemName :'',
description :''
}
}

addItem = (itemName, description)=>{
var userName = this.state.userName
db.collection("exchange_requests").add({
"username" : userName,
"item_Name" : itemName,
"description" : description
})
this.setState({
itemName:'',
description:''
})
this.setState({
itemName:'',
description:''
})
return Alert.alert ('Item ready to exchange.'), ' ', [{text:'Okay', onPress:()=>{
this.props.navigation.navigate('Home')
}}]
}



render(){
return(
<View>

<View>

<MyHeader title = "Enter an Item" />

<TextInput style = {styles.textInput1}placeholder = {"Item Name"} numberOfLines={10} onChangeText = {(text)=>{this.setState({itemName:text})}} value = {this.state.itemName}  />
<TextInput style = {styles.textInput2} placeholder = {"Item Description"} multiline numberOfLines={80} onChangeText = {(text)=>{this.setState({description:text})}} value = {this.state.description}/>
</View>


<TouchableOpacity style = {styles.title} onPress = {()=>{this.addItem(this.state.itemName, this.state.description)}}>
<Text style = {styles.titleText}> Enter an Item </Text>
</TouchableOpacity>

</View>
)
}
}

const styles = StyleSheet.create ({
textInput1:{
borderWidth:2,
width:500,
height:50,
marginLeft:700,
marginTop:200,
borderRadius:10,
borderColor:'pink'
},

textInput2:{
borderWidth:2,
width:500,
height:250,
marginLeft:700,
marginTop:30,
borderRadius:10,
borderColor:'pink'
},

title : {
borderWidth:5,
borderColor:'orange',
width:200,
backgroundColor:'orange',
borderRadius:10,
marginLeft:850,
marginTop:40
},

titleText:{
fontSize:20,
fontFamily:'Times New Roman',
fontWeight:'bold',
marginLeft:30
}
})