import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function AddHabitScreen() {
  return (
    <View style={styles.container}>
    <Text style={styles.title}>Add A Habit</Text>
      
    <Text>Habit Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
      />

       <Text>Habit Description</Text>

      <TextInput
        style={styles.input}
        placeholder="Description"
      />

      <Text>Target</Text>
      <TextInput
        style={styles.input}
        placeholder="Days per week"
      />

      <Text>Category</Text>
        <TextInput
        style={styles.input}
        placeholder="Category"
      />

      

      <TouchableOpacity style={styles.button}>
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