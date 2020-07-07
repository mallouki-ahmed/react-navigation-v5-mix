import React, { Component } from 'react';


import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput 
} from 'react-native';

import { Card, Button,Title, Paragraph,RadioButton } from 'react-native-paper';



export default class Profile extends Component {
  state = {
    value: 'first',
  };

  render() {
    return (
      <View>
      <View style={styles.container}>
          <View style={styles.header}></View>
          <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>John Doe</Text>
              <Text style={styles.description}>Phone Nbr:22353134</Text>
              <Text style={styles.info}>Problem:</Text>  
               
   
            </View>
            
        </View>
       
       
      </View>
      <Card style={styles.card}>
    <Card.Content>
      <Paragraph>Exceeding the usual consumption rate</Paragraph>
    </Card.Content>
  </Card>
<View >
<RadioButton.Group style={styles.radio}>
      <RadioButton.Item label="Fixed" value="first" />
      <RadioButton.Item label="Not Fixed" value="second" />
    </RadioButton.Group>
</View>
     </View>
    );
  }
}

const styles = StyleSheet.create({
  card:{
marginTop:80,
width: '100%',
padding: 10
  },
  radio:{
  display:"flex",
      },
  header:{
    backgroundColor: "#00BFFF",
    height:200,
  },
 
 
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:130
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  body:{
    marginTop:40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  name:{
    fontSize:28,
    color: "#696969",
    fontWeight: "600"
  },
  info:{
    fontSize:16,
    color: "#00BFFF",
    marginTop:10
  },
  description:{
    fontSize:20,
    color: "#00BFFF",
    marginBottom:10,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#00BFFF",
  },
});
 