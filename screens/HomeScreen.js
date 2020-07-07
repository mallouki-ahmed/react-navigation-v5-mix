import React from 'react';

import {Searchbar} from 'react-native-paper';
import {View, Text, StyleSheet} from 'react-native';
import {DataTable} from 'react-native-paper';

export default class MyComponent extends React.Component {
  state = {
    searchQuery: '',
  };

  _onChangeSearch = query => this.setState({searchQuery: query});

  render() {
    const {searchQuery} = this.state;
    return (
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Dessert</DataTable.Title>
          <DataTable.Title numeric>Calories</DataTable.Title>
          <DataTable.Title numeric>Fat</DataTable.Title>
        </DataTable.Header>

        <DataTable.Row>
          <DataTable.Cell>Frozen yogurt</DataTable.Cell>
          <DataTable.Cell numeric>159</DataTable.Cell>
          <DataTable.Cell numeric>6.0</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>Ice cream sandwich</DataTable.Cell>
          <DataTable.Cell numeric>237</DataTable.Cell>
          <DataTable.Cell numeric>8.0</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>Ice cream sandwich</DataTable.Cell>
          <DataTable.Cell numeric>257</DataTable.Cell>
          <DataTable.Cell numeric>8.0</DataTable.Cell>
        </DataTable.Row>
      </DataTable>
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
    marginLeft: 40,
    marginTop: 20,
    width: '80%',
  },
});
