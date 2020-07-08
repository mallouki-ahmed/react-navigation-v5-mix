/* import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const DetailsScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text>Details Screen</Text>
        <Button
            title="Go to details screen...again"
            onPress={() => navigation.push("Details")}
        />
        <Button
            title="Go to home"
            onPress={() => navigation.navigate("Home")}
        />
        <Button
            title="Go back"
            onPress={() => navigation.goBack()}
        />
      </View>
    );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
 */
import React, {Component} from 'react';

import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

import {
  Card,
  Button,
  Title,
  TextInput,
  Paragraph,
  RadioButton,
} from 'react-native-paper';

const Profile = props => {
  const [checked, setChecked] = React.useState('first');

  const [reason, setReason] = React.useState('');

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.header} />
        <Image
          style={styles.avatar}
          source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}
        />
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
        <TextInput
          label="Reason"
          value={reason}
          onChangeText={text => {
            setReason(text);
          }}
        />
      </Card>
      <RadioButton.Group
        style={{
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onValueChange={value => setChecked(value)}
        value={checked}>
        <View
          style={{
            borderLeftWidth: 5,
            borderEndWidth: 5,
            borderTopWidth: 5,
            borderBottomWidth: 5,
            borderColor: '00BFFF',
            width: 80,
            margin: 5,
            marginTop: 20,
            borderRadius: 10,
            padding: 2,
          }}>
          <Text>Fixed</Text>
          <RadioButton value="first" />
        </View>
        <View
          style={{
            borderLeftWidth: 5,
            borderEndWidth: 5,
            borderTopWidth: 5,
            borderBottomWidth: 5,
            borderColor: '00BFFF',
            width: 80,
            margin: 5,
            borderRadius: 10,
            padding: 2,
          }}>
          <Text>Not Fixed</Text>
          <RadioButton value="second" />
        </View>
      </RadioButton.Group>

      <TouchableOpacity
        onPress={() => props.navigation.navigate('Home')}
        style={styles.buttonContainer}>
        <Text>Enregistrer</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    // width: 250,
    borderRadius: 30,
    backgroundColor: '#00BFFF',
  },
  card: {
    marginTop: 80,
    width: '100%',
    padding: 10,
  },
  radio: {
    display: 'flex',
  },
  header: {
    backgroundColor: '#00BFFF',
    height: 200,
  },

  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 10,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 130,
  },
  name: {
    fontSize: 22,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  body: {
    marginTop: 40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding: 30,
  },
  name: {
    fontSize: 28,
    color: '#696969',
    fontWeight: '600',
  },
  info: {
    fontSize: 16,
    color: '#00BFFF',
    marginTop: 10,
  },
  description: {
    fontSize: 20,
    color: '#00BFFF',
    marginBottom: 10,
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    backgroundColor: '#00BFFF',
  },
});
