import React, {Component} from 'react';
import {View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';

import {WebView} from 'react-native-webview';
import PureChart from 'react-native-pure-chart';
//import Echarts from 'native-echarts';

class ExploreScreen extends Component {
  render() {
    let sampleData = [
      {
        seriesName: 'series1',
        data: [
          {x: '2018-02-01', y: 30},
          {x: '2018-02-02', y: 200},
          {x: '2018-02-03', y: 170},
          {x: '2018-02-04', y: 250},
          {x: '2018-02-05', y: 10},
        ],
        color: '#297AB1',
      },
      /*       {
        seriesName: 'series2',
        data: [
          {x: '2018-02-01', y: 20},
          {x: '2018-02-02', y: 100},
          {x: '2018-02-03', y: 140},
          {x: '2018-02-04', y: 550},
          {x: '2018-02-05', y: 40},
        ],
        color: 'yellow',
      }, */
    ];
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={{
            position: 'absolute',
            top: 100,
            left: 10,
          }}
          onPress={() => this.props.navigation.goBack()}>
          <Text> {`<`} Go Back</Text>
        </TouchableOpacity>
        <PureChart width={'100%'} height={300} data={sampleData} type="line" />
      </View>
    );
  }
}

export default ExploreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
