import React, { useEffect } from 'react';
import { useState } from 'react';
import {
  View,
  Text,
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from 'react-native';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { login, selectUser } from '../../store/slices/userSlice';

const LoginScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const user = useSelector(selectUser);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    GoogleSignin.configure();
  }, []);

  useEffect(() => {
    // Si el usuario está logueado en Redux, navegar a TabNavigator directamente
    if (user.isLoggedIn) {
      navigation.navigate('TabNavigator');
    }
  }, [user.isLoggedIn]);

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const { user } = await GoogleSignin.signIn();
      console.log('User:', user);
      dispatch(login(user));
      navigation.navigate('TabNavigator');
      setLoggedIn(true);
    } catch (error) {
      console.log(error);
      // Manejar errores según sea necesario
    }
  };



  return (
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View>
            <View>
              <GoogleSigninButton
                style={{ width: 192, height: 48 }}
                size={GoogleSigninButton.Size.Wide}
                color={GoogleSigninButton.Color.Dark}
                onPress={signIn}
                disabled={loggedIn}
              />
            </View>

          </View>
        </ScrollView>
      </SafeAreaView>
  );
};
export default LoginScreen;
