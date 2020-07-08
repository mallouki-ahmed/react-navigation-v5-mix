import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import {Alert} from 'react-native';

import {saveUserToken} from './token/actions';
import {url} from './index';

export const setSession = async tok => {
  if (tok) {
    const resToken = tok['token'];
    await AsyncStorage.setItem('token', resToken);
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + resToken;
  } else {
    AsyncStorage.removeItem('token');
    delete axios.defaults.headers.common['Authorization'];
  }
};

export const getConteurs = idUser => dispatch => {
  // console.log("params getCourse", id,user);
  axios
    .get(`${url}/api/conteur/${idUser}`)
    .then(res =>
      dispatch({
        type: 'GET_CONTEURS',
        payload: res.data,
      }),
    )
    .catch(err =>
      dispatch({
        type: ERRORS,
        payload: null,
      }),
    );
};

/** Action function to get all users */
export const getUsers = () => dispatch => {
  axios
    .get(`${url}/api/user/`)
    .then(res =>
      dispatch({
        type: 'GET_USERS',
        payload: res.data,
      }),
    )
    .catch(err =>
      dispatch({
        type: ERRORS,
        payload: null,
      }),
    );
};

export const deleteUser = userId => dispatch => {
  axios
    .delete(`${url}/api/user/${userId}`)
    .then(res =>
      dispatch({
        type: 'DELETE_USER',
        payload: res.data,
      }),
    )
    .catch(err =>
      dispatch({
        type: ERRORS,
        payload: null,
      }),
    );
};

/** Action function to add user */
export const addUserRegister = userData => dispatch => {
  axios
    .post(`${url}/api/user/register`, userData)
    .then(res =>
      dispatch({
        type: 'ADD_USER',
        payload: res.data,
      }),
    )
    .catch(err => {
      alert(err);
      dispatch({
        type: 'ERRORS',
        payload: err.response,
      });
    });
};

export const signInWithEmailAndPassword = ({email, password}) => {
  let axiosConfig = {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin': '*',
    },
  };

  return dispatch => {
    return new Promise((resolve, reject) => {
      //dispatch({ type: "LOADING" });
      axios
        .post(
          `${url}/api/user/login`,
          {
            email,
            password,
          },
          axiosConfig,
        )
        .then(response => {
          dispatch({type: 'UNLOADING'});
          if (response && response.data) {
            dispatch(saveUserToken(response.data['token']));
            setSession(response.data);
            dispatch({
              type: 'LOGIN_USER',
              payload: {
                key: 'me',
                data: {
                  token: response.data['token'],
                  login: email,
                },
              },
            });
            resolve(response.data);

            return response.data;
          } else {
            reject(response.data);
            dispatch({type: 'UNLOADING'});
            return response.data;
          }
        })
        .catch(err => {
          console.log('err', err.message);
          if ('Request failed with status code 401' === err.message) {
            Alert.alert(
              'Numéro de téléphone ou mot de passe incorrect. Réessayez correctement ou créez un compte.',
            );
          } else {
            Alert.alert(JSON.stringify(err.message));
          }
        });
    });
  };
};
