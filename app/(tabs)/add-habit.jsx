import { Picker } from '@react-native-picker/picker';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function AddHabitScreen() {
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [DaysPerWeek, setDaysPerWeek] = useState('');
  const [category, setCategory] = useState('');

  const router = useRouter();

  const AddHabit = () => {
    const Habit = {
      id: Date.now().toString(),
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
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Add A Habit</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Habit Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Name"
          placeholderTextColor="#777"
          value={name}
          onChangeText={setName}
        />

        <Text style={styles.label}>Habit Description</Text>
        <TextInput
          style={styles.input}
          placeholder="Description"
          placeholderTextColor="#777"
          value={desc}
          onChangeText={setDesc}
        />

        <Text style={styles.label}>Days Per Week</Text>
        <View style={styles.pickerBox}>
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
        </View>

        <Text style={styles.label}>Category</Text>
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
          <Text style={styles.buttonText}>Add Habit</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    Display: 'flex',
    backgroundColor: '#f9eeee',
    padding: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#1C0A08',
  },
  card: {
    backgroundColor: '#F4DAD7',
    borderRadius: 18,
    padding: 18,
    borderWidth: 1,
    borderColor: '#D26B60',
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 6,
    marginTop: 8,
    color: '#1C0A08',
  },
  input: {
    backgroundColor: '#f9eeee',
    borderWidth: 1,
    borderColor: '#9F382D',
    borderRadius: 12,
    padding: 12,
    marginBottom: 10,
    fontSize: 15,
    color: '#333',
  },
  pickerBox: {
    backgroundColor: '#f9eeee',
    borderWidth: 1,
    borderColor: '#9F382D',
    borderRadius: 12,
    marginBottom: 10,
    overflow: 'hidden',
    marginTop: 4,
  },
  button: {
    backgroundColor: '#772A22',
    padding: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 15,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});