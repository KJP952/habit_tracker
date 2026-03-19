import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Habit Tracker</Text>

      <Text style={styles.section}>Today's Progress:</Text>
      <Text style={styles.progress}>
        0 / 0 Habits Completed
      </Text>

      <Text style={styles.section}>Your Habits:</Text>

      <Text style={styles.desc}>
        No habits added yet. Start by adding a new habit!
      </Text>
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
    marginBottom: 20,
    textAlign: 'center',
  },
  progress: {
    fontSize: 16,
    marginBottom: 20,
  },
  section: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
  desc: {
    fontSize: 12,
  },
});
