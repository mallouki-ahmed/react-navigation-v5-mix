import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';

class Profile extends Component {
  render() {
    const findIt = this.props.users.find(d => {
      const name =
        this.props.auth && this.props.auth.data && this.props.auth.data.login;
      console.log('name', name);
      return d.email === name;
    });
    console.log('findIt', findIt, this.props);
    return (
      <View style={styles.container}>
        <View style={styles.header} />
        <Image
          style={styles.avatar}
          source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}
        />
        <View style={styles.body}>
          <View style={styles.bodyContent}>
            <Text style={styles.name}>{findIt && findIt.firstName}</Text>
            <Text style={styles.info}>Email:{findIt && findIt.email}</Text>
            {/*   <Text style={styles.description}>PHONE:22353134</Text> */}
            <TouchableOpacity style={styles.buttonContainer}>
              <Text>Update</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
const mapState = state => {
  return {auth: state.users.authUser, users: state.users.users};
};
export default connect(mapState)(Profile);

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    height: 100,
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
    fontSize: 16,
    color: '#696969',
    marginTop: 10,
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
