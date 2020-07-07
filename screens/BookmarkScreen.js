import React from 'react';

import {Searchbar} from 'react-native-paper';
import {View, Text, StyleSheet} from 'react-native';
import {Card, Title, Button, Paragraph} from 'react-native-paper';

export default class MyComponent extends React.Component {
  state = {
    searchQuery: '',
  };

  _onChangeSearch = query => this.setState({searchQuery: query});

  render() {
    const {searchQuery} = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.search}>
          <Searchbar
            style={{borderColor: '#000000', borderWidth: 1}}
            placeholder="Search"
            onChangeText={this._onChangeSearch}
            value={searchQuery}
          />
        </View>
        <View style={styles.cards}>
          <Card style={{marginTop: 20, borderColor: '#000000', borderWidth: 1}}>
            <Card.Content>
              <Title>Counter 1</Title>

              <Card.Actions style={{marginLeft: 20}}>
                <Button style={{marginLeft: 0}} mode="contained">
                  Update
                </Button>
                <Button style={{marginLeft: 20}} mode="contained">
                  Delete
                </Button>
                <Button style={{marginLeft: 20}} mode="contained">
                  Détail
                </Button>
              </Card.Actions>
            </Card.Content>
          </Card>
          <Card style={{marginTop: 20, borderColor: '#000000', borderWidth: 1}}>
            <Card.Content>
              <Title>Counter 2</Title>

              <Card.Actions style={{marginLeft: 20}}>
                <Button style={{marginLeft: 0}} mode="contained">
                  Update
                </Button>
                <Button style={{marginLeft: 20}} mode="contained">
                  Delete
                </Button>
                <Button style={{marginLeft: 20}} mode="contained">
                  Détail
                </Button>
              </Card.Actions>
            </Card.Content>
          </Card>
          <Card style={{marginTop: 20, borderColor: '#000000', borderWidth: 1}}>
            <Card.Content>
              <Title>Counter 3</Title>

              <Card.Actions style={{marginLeft: 20}}>
                <Button style={{marginLeft: 0}} mode="contained">
                  Update
                </Button>
                <Button style={{marginLeft: 20}} mode="contained">
                  Delete
                </Button>
                <Button style={{marginLeft: 20}} mode="contained">
                  Détail
                </Button>
              </Card.Actions>
            </Card.Content>
          </Card>
        </View>
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
    marginLeft: 40,
    marginTop: 20,
    width: '80%',
  },
});
