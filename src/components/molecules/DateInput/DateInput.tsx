import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, Pressable} from 'react-native';
import DatePicker from 'react-native-date-picker';

interface DateInputProps {
  title: string;
  value: Date;
  onChange: (date: Date) => void;
}

const DateInput: React.FC<DateInputProps> = ({title, value, onChange}) => {
  const [pickerOpen, setPickerOpen] = useState(false);
  const formatDateTime = (date: Date) => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${day}/${month}/${year} ${hours}:${minutes}`;
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Pressable onPress={() => setPickerOpen(true)}>
        <TextInput
          style={styles.input}
          value={formatDateTime(value)}
          editable={false}
          pointerEvents="none"
        />
      </Pressable>
      <DatePicker
        modal
        date={value}
        open={pickerOpen}
        mode="datetime"
        onConfirm={date => {
          setPickerOpen(false);
          onChange(date);
        }}
        onCancel={() => {
          setPickerOpen(false);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  title: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    color: '#333',
  },
});

export default DateInput;
