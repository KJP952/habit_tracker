import { StyleSheet, Text, View } from 'react-native';

export default function AddHabitScreen() {
    

  return (
    <View style={styles.container}>
          <Text style={styles.title}>Add Habit</Text>
          <Text>Add a Habit</Text>
        </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});