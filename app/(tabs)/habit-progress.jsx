import { StyleSheet, Text, View } from 'react-native';

export default function HabitProgressScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Progress</Text>

      <Text style={styles.label}>Habits Completed This Week</Text>
      <Text style={styles.value}>0</Text>

      <Text style={styles.label}>Current Streak</Text>
      <Text style={styles.value}>0 days</Text>

      <Text style={styles.label}>Completion Rate</Text>
      <Text style={styles.value}>0%</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    marginTop: 15,
  },
  value: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 5,
  },
});