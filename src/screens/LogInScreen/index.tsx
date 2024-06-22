import React, {useEffect} from 'react';
import {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
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
import {Header} from 'react-native/Libraries/NewAppScreen';
import { useNavigation } from '@react-navigation/native';

export const LoginScreen = () => {
  const [state, setState] = useState('');
  // const [userInfo, setuserInfo] = useState('');
  const [loggedIn, setloggedIn] = useState(false);
  const navigation = useNavigation();
  // GoogleSignin.configure();
  useEffect(() => {
    GoogleSignin.configure();
  }, []);
  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const { user } = await GoogleSignin.signIn();
      console.log('User:', user);
      navigation.navigate('TabNavigator');
      setloggedIn(true);
    } catch (error) {
      console.log(error);

      // if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      //   // user cancelled the login flow
      //   console.log('Cancelled');
      // } else if (error.code === statusCodes.IN_PROGRESS) {
      //   console.log('Signin in progress');
      //   // operation (f.e. sign in) is in progress already
      // } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      //   console.log('PLAY_SERVICES_NOT_AVAILABLE');
      //   // play services not available or outdated
      // } else {
      //   // some other error happened
      // }
    }
  };
  const signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      setloggedIn(false);
      // setuserInfo([]);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View>
            <View>
              <GoogleSigninButton
                style={{width: 192, height: 48}}
                size={GoogleSigninButton.Size.Wide}
                color={GoogleSigninButton.Color.Dark}
                onPress={signIn}
                disabled={loggedIn}
              />
            </View>
            <View>
              {!loggedIn && <Text>You are currently logged out</Text>}
              {loggedIn && (
                <Button onPress={signOut} title="LogOut" color="red" />
              )}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
