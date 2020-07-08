import React from 'react';

import {Searchbar} from 'react-native-paper';
import {View, Text, StyleSheet} from 'react-native';
import {DataTable, Button, Dialog, Portal} from 'react-native-paper';
import {connect} from 'react-redux';

import AddUsers from './addUsers';
import Search from './SearchbarHome';
import {getUsers, addUserRegister, deleteUser} from '../modules/user.action';
import {ScrollView} from 'react-native-gesture-handler';

class MyComponent extends React.Component {
  state = {
    searchQuery: '',
    visible: false,
    saveData: {},
  };

  hideDialog = () => this.setState({visible: false});

  componentDidMount() {
    this.props.getUsers();
  }

  _onChangeSearch = query => this.setState({searchQuery: query});
  showCounter = id => {
    console.log('id', id);
    this.props.navigation.navigate('BookmarkScreen', {id});
  };
  updateCounter = () => {};
  deleteCounterFn = id => {
    this.props.deleteUser(id);
    this.props.getUsers();
  };
  addUser = () => {
    this.setState({visible: true});
  };

  addUserAction = () => {
    this.props.addUserRegister(this.state.saveData);
    this.cancelUserAction();
    this.props.getUsers();
  };

  cancelUserAction = () => {
    this.setState({visible: false});
  };

  exportData = data => {
    this.setState({saveData: data});
  };

  render() {
    console.log('this.props', this.props.users);
    const {searchQuery, visible} = this.state;

    console.log('searchQuery', searchQuery);
    return (
      <View>
        <View style={styles.search}>
          <View style={styles.searcht}>
            <Searchbar
              style={{borderColor: '#000000', borderWidth: 1}}
              placeholder="Search"
              onChangeText={this._onChangeSearch}
              value={searchQuery}
            />
          </View>
          <View>
            <Button
              onPress={this.addUser}
              style={{width: 100, marginTop: 30}}
              mode="contained">
              ADD
            </Button>
          </View>
        </View>
        <ScrollView>
          <DataTable style={{marginTop: 30, paddingBottom: 100}}>
            <DataTable.Header>
              <DataTable.Title>Users</DataTable.Title>
              <DataTable.Title numeric>Show Counter</DataTable.Title>
              <DataTable.Title numeric>Update</DataTable.Title>
              <DataTable.Title numeric>Delete</DataTable.Title>
            </DataTable.Header>
            {this.props.users &&
              this.props.users
                .filter(dl => {
                  const name = dl.firstName;
                  return name.includes(searchQuery);
                })
                .map(el => {
                  return (
                    <DataTable.Row>
                      <DataTable.Cell>{el.firstName}</DataTable.Cell>
                      <DataTable.Cell numeric>
                        <Button
                          mode="contained"
                          onPress={() => this.showCounter(el._id)}>
                          <Text>Show Counter</Text>
                        </Button>
                      </DataTable.Cell>
                      <DataTable.Cell numeric>
                        <Button
                          mode="contained"
                          onPress={() => this.updateCounter(el._id)}>
                          <Text>Update</Text>
                        </Button>
                      </DataTable.Cell>
                      <DataTable.Cell numeric>
                        <Button
                          mode="contained"
                          onPress={() => this.deleteCounterFn(el._id)}>
                          <Text>Delete</Text>
                        </Button>
                      </DataTable.Cell>
                    </DataTable.Row>
                  );
                })}
          </DataTable>
        </ScrollView>
        <Portal>
          <Dialog visible={visible} onDismiss={this.hideDialog}>
            <AddUsers exportData={this.exportData} />
            <Dialog.Actions>
              <Button onPress={() => this.cancelUserAction()}>Cancel</Button>
              <Button onPress={() => this.addUserAction()}>Ok</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>
    );
  }
}

const mapState = state => {
  return {users: state.users.users};
};

export default connect(
  mapState,
  {getUsers, deleteUser, addUserRegister},
)(MyComponent);

const styles = StyleSheet.create({
  cards: {
    marginTop: 20,
    width: '100%',
    padding: 10,
  },
  search: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searcht: {
    marginLeft: 10,
    marginTop: 20,
    width: '60%',
  },
});
