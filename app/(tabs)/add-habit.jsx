import { Picker } from '@react-native-picker/picker';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function AddHabitScreen() {
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [DaysPerWeek, setDaysPerWeek] = useState('');
  const [category, setCategory] = useState('');

  const router = useRouter();

  const AddHabit = () => {
    const Habit = {
      name: name,
      description: desc,
      daysPerWeek: Number(DaysPerWeek),
      category: category,
      timesCompleted: 0,
    };

    router.push({
      pathname: '/',
      params: {
        Habit: JSON.stringify(Habit),
      },
    });

    setName('');
    setDesc('');
    setDaysPerWeek('');
    setCategory(' ');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add A Habit</Text>

      <Text>Habit Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />

      <Text>Habit Description</Text>
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={desc}
        onChangeText={setDesc}
      />

      <Text>Days Per Week</Text>
      <Picker
        selectedValue={DaysPerWeek}
        onValueChange={(value) => setDaysPerWeek(value)}
      >
        <Picker.Item label="Select days" value="" />
        <Picker.Item label="1" value="1" />
        <Picker.Item label="2" value="2" />
        <Picker.Item label="3" value="3" />
        <Picker.Item label="4" value="4" />
        <Picker.Item label="5" value="5" />
        <Picker.Item label="6" value="6" />
        <Picker.Item label="7" value="7" />
      </Picker>

      <Text>Category</Text>
      <View style={styles.pickerBox}>
        <Picker
          selectedValue={category}
          onValueChange={(itemValue) => setCategory(itemValue)}
        >
          <Picker.Item label="Select category" value="" />
          <Picker.Item label="Health" value="Health" />
          <Picker.Item label="Study" value="Study" />
          <Picker.Item label="Work" value="Work" />
          <Picker.Item label="Personal" value="Personal" />
          <Picker.Item label="Other" value="Other" />
        </Picker>
      </View>

      <TouchableOpacity style={styles.button} onPress={AddHabit}>
        <Text>Add</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
  },
  button: {
    borderWidth: 1,
    padding: 10,
    alignItems: 'center',
  },
});