import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './PublishScreen.styles';
import CustomInput from '../../components/molecules/CustomInput/CustomInput';
import DateInput from '../../components/molecules/DateInput/DateInput';

const PublishScreen = () => {
  const [date, setDate] = useState(new Date());

  return (
    <SafeAreaView style={styles.container}>
      <CustomInput title={'Titulo'} placeholder="Dale un título a la tarea" />
      <CustomInput
        title={'Descripción'}
        placeholder="Dale una descripción a la tarea"
      />
      <CustomInput
        keyboardType="numeric"
        title={'Precio'}
        placeholder="Cuánto quieres recibir por la tarea?"
      />
      <DateInput title={'Fecha límite'} value={date} onChange={setDate} />
      {/* Crear i afegir component per buscar ubicació a partir de google */}
    </SafeAreaView>
  );
};

export default PublishScreen;
