import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function AddHabitScreen() {
  const [name, setName] = useState('');
  const [desc, setDesc] = useState (' ');
  const [DaysPerWeek, setDaysPerWeek] = useState('');
  const [category, setCategory] = useState('');

 const AddHabit = () => {
  const Habit = {
    name: name,
    description: desc,
    daysPerWeek: Number(DaysPerWeek),
    category: category,
    TimesCompleted: [],
  };

  console.log(Habit);

  setName('');
  setDesc('');
  setDaysPerWeek('');
  setCategory('');
  };


  return (
    <View style={styles.container}>
    <Text style={styles.title}>Add A Habit</Text>
      
    <Text>Habit Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value = {name}
        onChangeText={setName}
      />

      <Text>Habit Description</Text>

      <TextInput
        style={styles.input}
        placeholder="Description"
        value = {desc}
        onChangeText={setDesc}
      />

      <Text>Target</Text>
      <TextInput
        style={styles.input}
        placeholder="Days per week"
        keyboardType= "numeric"
        value = {DaysPerWeek}
        onChangeText= {setDaysPerWeek}
      />

      <Text>Category</Text>
        <TextInput
        style={styles.input}
        placeholder="Category"
        value = {category}
        onChangeText= {setCategory}
      />

      
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