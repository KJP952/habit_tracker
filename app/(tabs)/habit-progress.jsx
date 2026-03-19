import { StyleSheet, Text, View } from 'react-native';

export default function HabitProgressScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Habit Progress</Text>
      <Text>Habit Progress</Text>
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