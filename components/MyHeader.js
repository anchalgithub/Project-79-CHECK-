import React from 'react';
import { Header,Icon } from 'react-native-elements';
import { StyleSheet, Text, View } from 'react-native';

const MyHeader = props => {
return(
<Header centerComponent={{text:props.title, style:{color:'#90A5A9', fontSize:20, fontWeight:"bold"}}} background = "#eaf8fe" />
)
}

export default MyHeader;