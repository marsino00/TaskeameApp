import React, { useEffect } from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
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
  }, [userSelected.isLoggedIn,navigation]);

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
