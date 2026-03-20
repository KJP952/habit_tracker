import { useLocalSearchParams, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  const [habits, setHabits] = useState([]);
  const { Habit } = useLocalSearchParams();
  const router = useRouter();
  let habitList;

  function getCompletedCount() {
    let count = 0;

    for (let i = 0; i < habits.length; i++) {
      if (habits[i].completed) {
        count = count + 1;
      }
    }

    return count;
  }

  const completedCount = getCompletedCount();

  useEffect(function () {
    if (Habit) {
      try {
        const parsedHabit = JSON.parse(Habit);

        setHabits(function (prev) {
          let alreadyExists = false;

          for (let i = 0; i < prev.length; i++) {
            if (prev[i].id === parsedHabit.id) {
              alreadyExists = true;
            }
          }

          if (alreadyExists) {
            return prev;
          } else {
            return prev.concat(parsedHabit);
          }
        });
      } catch (error) {
        console.log('Failed to parse new habit:', error);
      }
    }
  }, [Habit]);

  function toggleComplete(id) {
    setHabits(function (prev) {
      let newHabits = [];

      for (let i = 0; i < prev.length; i++) {
        let habit = prev[i];

        if (habit.id === id) {
          newHabits.push({
            ...habit,
            completed: !habit.completed,
          });
        } else {
          newHabits.push(habit);
        }
      }

      return newHabits;
    });
  }

  if (habits.length === 0) {
    habitList = (
      <Text style={styles.desc}>No habits added yet.</Text>
    );
  } else {
    habitList = habits.map(function (habit) {
      return (
        <View key={habit.id} style={styles.row}>
          <Text style={styles.cell}>Name: {habit.name}</Text>
          <Text style={styles.cell}>Desc: {habit.description}</Text>
          <Text style={styles.cell}>Days: {habit.daysPerWeek}</Text>
          <Text style={styles.cell}>Category: {habit.category}</Text>

          <TouchableOpacity
            style={styles.button}
            onPress={function () {
              toggleComplete(habit.id);
            }}
          >
            <Text>
              {habit.completed && 'Done!'}
              {!habit.completed && 'Click to Complete'}
            </Text>
          </TouchableOpacity>
        </View>
      );
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Habit Tracker</Text>
      <Text style={styles.section}>Today's Progress:</Text>
      <Text style={styles.progress}>
        {completedCount} / {habits.length} Habits Completed
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={function () {
          router.push({
            pathname: '/habit-progress',
            params: {
              habits: JSON.stringify(habits),
            },
          });
        }}
      >
        <Text>View Categories</Text>
      </TouchableOpacity>

      <Text style={styles.section}>Your Habits:</Text>

      {habitList}
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
  row: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 8,
  },
  cell: {
    fontSize: 14,
  },
  button: {
    borderWidth: 1,
    alignItems: 'center',
  },
});
