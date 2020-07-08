import React from 'react';

import {Searchbar} from 'react-native-paper';
import {View, Text, StyleSheet} from 'react-native';
import {DataTable,Button} from 'react-native-paper';
import Search from "./SearchbarHome"
export default class MyComponent extends React.Component {
  state = {
    searchQuery: '',
  };

  _onChangeSearch = query => this.setState({searchQuery: query});

  render() {
    const {searchQuery} = this.state;
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
      <Button style={{width:100,marginTop: 30,}} mode="contained">
                  ADD
                </Button>
    </View>
    </View>
      <DataTable style={{marginTop: 30,}}>
      
        <DataTable.Header>
          <DataTable.Title>Khawla</DataTable.Title>
          <DataTable.Title numeric>Show Counter</DataTable.Title>
          <DataTable.Title numeric>Update</DataTable.Title>
          <DataTable.Title numeric>Delete</DataTable.Title>

        </DataTable.Header>

        <DataTable.Row>
          <DataTable.Cell>Marwa</DataTable.Cell>
          <DataTable.Cell numeric>Show Counter</DataTable.Cell>
          <DataTable.Cell numeric>Update</DataTable.Cell>
          <DataTable.Cell numeric>Delete</DataTable.Cell>

        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>Jobran</DataTable.Cell>
          <DataTable.Cell numeric>Show Counter</DataTable.Cell>
          <DataTable.Cell numeric>Update</DataTable.Cell>
         <DataTable.Cell numeric>Delete</DataTable.Cell>

        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>Ahmed</DataTable.Cell>
          <DataTable.Cell numeric>Show Counter</DataTable.Cell>
          <DataTable.Cell numeric>Update</DataTable.Cell>
          <DataTable.Cell numeric>Delete</DataTable.Cell>

        </DataTable.Row>
      </DataTable>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  cards: {
    marginTop: 20,
    width: '100%',
    padding: 10,
  },
  search: {
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
  
  },
  searcht:{
    marginLeft: 10,
    marginTop: 20,
    width: '60%',
  }
});
