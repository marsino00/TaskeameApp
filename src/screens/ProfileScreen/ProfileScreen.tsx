import React from 'react';
import { Text, View, Image, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../../store/slices/userSlice';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { useNavigation } from '@react-navigation/native';

 const ProfileScreen = () => {
  const user = useSelector(selectUser);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      dispatch(logout());
      navigation.navigate('Login');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {user && user.user ? (
        <View style={{ gap: 10 }}>
          <Image source={{ uri: user.user.photo }} style={{ width: 100, height: 100, borderRadius: 50 }} />
          <Text>Nombre: {user.user.name}</Text>
          <Text>Email: {user.user.email}</Text>
        </View>
      ) : (<View />)}
      <View style={{ marginTop: 20 }}>
        <Button onPress={signOut} title="Cerrar sesión" color="red" />
      </View>
    </SafeAreaView>
  );
};
export default ProfileScreen;
