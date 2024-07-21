import React, { useEffect } from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { login, selectUser } from '../../store/slices/userSlice';

const LoginScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const userSelected = useSelector(selectUser);

  useEffect(() => {
    GoogleSignin.configure();
  }, []);

  useEffect(() => {
    if (userSelected.isLoggedIn) {
      navigation.navigate('TabNavigator');
    }
  }, [userSelected.isLoggedIn, navigation]);

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const { user } = await GoogleSignin.signIn();
      dispatch(login(user));
      navigation.navigate('TabNavigator');
    } catch (error) {
      console.log(error);
    }
  };

  // Si el usuario ya está logueado, no mostrar la pantalla de inicio de sesión
  if (userSelected.isLoggedIn) {
    return (
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <ActivityIndicator size="large" />
        </ScrollView>
      </SafeAreaView>
    );
  }

  // Si el usuario no está logueado, mostrar el botón de inicio de sesión
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
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;
