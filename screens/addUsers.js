import * as React from 'react';
import {TextInput} from 'react-native-paper';
import {View} from 'react-native-animatable';

const AddUsers = props => {
  const [data, setDta] = React.useState({
    email: '',
    firstName: '',
    lastName: '',
    password: '',
  });
  const exportData = () => {
    props.exportData(data);
  };
  return (
    <View>
      <TextInput
        label="firstName"
        value={data.firstName}
        onChangeText={text => {
          exportData();
          setDta({...data, firstName: text});
        }}
      />
      <TextInput
        label="lastName"
        value={data.lastName}
        onChangeText={text => {
          exportData();
          setDta({...data, lastName: text});
        }}
      />
      <TextInput
        label="Email"
        value={data.email}
        onChangeText={text => {
          exportData();
          setDta({...data, email: text});
        }}
      />
      <TextInput
        label="password"
        value={data.password}
        onChangeText={text => {
          exportData();
          setDta({...data, password: text});
        }}
      />
    </View>
  );
};

export default AddUsers;
