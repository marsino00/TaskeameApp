import React, { useState } from 'react';
import { Text, TextInput, View, FlatList, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const mockTasks = [
  {
    task_id: 1,
    titulo: 'Tarea 1',
    descripcion: 'Descripción de la tarea 1',
    compensacion: '$50',
    estado: 'pendiente',
    fecha_publicacion: '2024-06-22',
    fecha_limite: '2024-06-30',
    ubicacion: 'Ciudad X',
    solicitante_id: 1,
    realizador_id: null,
  },
  {
    task_id: 2,
    titulo: 'Tarea 2',
    descripcion: 'Descripción de la tarea 2',
    compensacion: '$100',
    estado: 'en progreso',
    fecha_publicacion: '2024-06-20',
    fecha_limite: '2024-07-05',
    ubicacion: 'Ciudad Y',
    solicitante_id: 2,
    realizador_id: 3,
  },
  {
    task_id: 3,
    titulo: 'Tarea 3',
    descripcion: 'Descripción de la tarea 2',
    compensacion: '$100',
    estado: 'en progreso',
    fecha_publicacion: '2024-06-20',
    fecha_limite: '2024-07-05',
    ubicacion: 'Ciudad Y',
    solicitante_id: 2,
    realizador_id: 3,
  },
  {
    task_id: 4,
    titulo: 'Tarea 4',
    descripcion: 'Descripción de la tarea 2',
    compensacion: '$100',
    estado: 'en progreso',
    fecha_publicacion: '2024-06-20',
    fecha_limite: '2024-07-05',
    ubicacion: 'Ciudad Y',
    solicitante_id: 2,
    realizador_id: 3,
  },
  {
    task_id: 5,
    titulo: 'Tarea 5',
    descripcion: 'Descripción de la tarea 2',
    compensacion: '$100',
    estado: 'en progreso',
    fecha_publicacion: '2024-06-20',
    fecha_limite: '2024-07-05',
    ubicacion: 'Ciudad Y',
    solicitante_id: 2,
    realizador_id: 3,
  },
  // Agrega más tareas según sea necesario
];

const HomeScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredTasks, setFilteredTasks] = useState(mockTasks);

  const handleSearch = (text:string) => {
    const filtered = mockTasks.filter(task =>
      task.titulo.toLowerCase().includes(text.toLowerCase()) ||
      task.descripcion.toLowerCase().includes(text.toLowerCase()) ||
      task.estado.toLowerCase().includes(text.toLowerCase()) ||
      task.compensacion.toLowerCase().includes(text.toLowerCase()) ||
      task.fecha_publicacion.includes(text) ||
      task.fecha_limite.includes(text) ||
      task.ubicacion.toLowerCase().includes(text)
    );
    setFilteredTasks(filtered);
    setSearchTerm(text);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Buscar tareas..."
          value={searchTerm}
          onChangeText={handleSearch}
        />
        <FlatList
          data={filteredTasks}
          keyExtractor={(item) => item?.task_id?.toString() ?? Math.random().toString()}
          renderItem={({ item }) => (
            <View style={styles.taskItem}>
              <Text style={styles.taskTitle}>{item.titulo}</Text>
              <Text>{item.descripcion}</Text>
              <Text>Estado: {item.estado}</Text>
              <Text>Compensación: {item.compensacion}</Text>
              <Text>Fecha de publicación: {item.fecha_publicacion}</Text>
              <Text>Fecha límite: {item.fecha_limite}</Text>
              <Text>Ubicación: {item.ubicacion}</Text>
            </View>
          )}
          ListEmptyComponent={<Text>No hay tareas encontradas</Text>}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  taskItem: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    borderRadius: 8,
  },
  taskTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default HomeScreen;
