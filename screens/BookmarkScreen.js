import React from 'react';

import {Searchbar} from 'react-native-paper';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Card, Title, Button, Paragraph} from 'react-native-paper';
import {connect} from 'react-redux';
import {ScrollView} from 'react-native-gesture-handler';

import {getConteurs} from '../modules/user.action';

class MyComponent extends React.Component {
  state = {
    searchQuery: '',
  };
  //https://template-kh.herokuapp.com/api/conteur/
  _onChangeSearch = query => this.setState({searchQuery: query});

  componentDidMount() {
    this.props.getConteurs(this.props.route.params.id);
  }
  details = idCounter => {
    this.props.navigation.navigate('ChartView', {idCounter});
  };

  updateScreen = idCounter => {
    this.props.navigation.navigate('SettingsScreen', {idCounter});
  };
  render() {
    console.log('this.props', this.props);
    const {searchQuery} = this.state;
    return (
      <ScrollView style={styles.container}>
        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
          <Text> {`<`} Go Back</Text>
        </TouchableOpacity>
        <View style={styles.search}>
          <Searchbar
            style={{borderColor: '#000000', borderWidth: 1}}
            placeholder="Search"
            onChangeText={this._onChangeSearch}
            value={searchQuery}
          />
        </View>
        <View style={styles.cards}>
          {this.props.counter &&
            this.props.counter.map(el => {
              return (
                <Card
                  style={{
                    marginTop: 20,
                    borderColor: '#000000',
                    borderWidth: 1,
                  }}>
                  <Card.Content>
                    <Title>Counter {el._id}</Title>

                    <Card.Actions style={{marginLeft: 20}}>
                      <Button
                        onPress={this.updateScreen}
                        style={{marginLeft: 0}}
                        mode="contained">
                        Update
                      </Button>
                      <Button style={{marginLeft: 20}} mode="contained">
                        Delete
                      </Button>
                      <Button
                        onPress={this.details}
                        style={{marginLeft: 20}}
                        mode="contained">
                        Détail
                      </Button>
                    </Card.Actions>
                  </Card.Content>
                </Card>
              );
            })}
        </View>
      </ScrollView>
    );
  }
}
const mapState = state => {
  return {counter: state.users.counter};
};
export default connect(
  mapState,
  {getConteurs},
)(MyComponent);
const styles = StyleSheet.create({
  container: {
    marginTop: 100,
  },
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
