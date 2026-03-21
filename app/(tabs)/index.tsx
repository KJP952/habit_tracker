import { useLocalSearchParams, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

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
          newHabits.push({...habit, completed: !habit.completed,});
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
        <View key={habit.id} style={styles.card}>
          <Text style={styles.cardTitle}>{habit.name}</Text>

          <Text style={styles.cardText}>Desc: {habit.description}</Text>
          <Text style={styles.cardText}>Target Days a Week: {habit.daysPerWeek}</Text>
          <Text style={styles.cardText}>Category: {habit.category}</Text>

          <TouchableOpacity style={styles.cardButton}
            onPress={function () {
              toggleComplete(habit.id);
            }}
          >
            <Text style={styles.buttonText}>
              {habit.completed && 'Done!'}
              {!habit.completed && 'Click to Complete'}
            </Text>
          </TouchableOpacity>
        </View>
      );
    });
  }

  return (
     <ScrollView style={styles.container}>
      <Text style={styles.title}>Habit Tracker</Text>
      <View style={styles.progressBox}>
          <Text style={styles.section1}>Today's Progress</Text>
          <Text style={styles.progress}>
            {completedCount} / {habits.length} Habits Completed </Text>
    </View>

      <TouchableOpacity style={styles.button}
      onPress={function () {
        router.push({
          pathname: '/habit-progress',
          params: {
            habits: JSON.stringify(habits),
          },
        });
      }}
    >
    <Text style={styles.topButtonText}>View All Habits</Text>
    </TouchableOpacity>

    <Text style={styles.section}>Your Habits</Text>

    <View style={styles.grid}>
      {habitList}
    </View>
  </ScrollView>
);
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#f9eeee',
    paddingTop: 80,
    paddingHorizontal: 60,
  },
  title: {
    fontSize: 45,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1C0A08',
    marginBottom: 20,
  },
  progressBox: {
    backgroundColor: '#f9eeee',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    borderWidth: 2,
    borderColor: '#C74638',
  },
  section1: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    color: '#1C0A08',
    marginBottom: 6,
  },
  progress: {
    fontSize: 16,
    textAlign: 'center',
    color: '#1C0A08',
  },
  button: {
    backgroundColor: '#C74638',
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 20,
  },
  topButtonText: {
    color: 'white',
    fontSize: 15,
    fontWeight: '600',
  },
  section: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1C0A08',
    marginBottom: 12,
  },
  desc: {
    fontSize: 14,
    textAlign: 'center',
    color: '#1C0A08',
    marginTop: 20,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    backgroundColor: '#F9EDEB',
    borderRadius: 16,
    padding: 14,
    marginBottom: 14,
    borderWidth: 1.5,
    borderColor: '#DD9088',
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#1C0A08',
  },
  cardText: {
    fontSize: 13,
    color: '#1C0A08',
    marginBottom: 4,
  },
  cardButton: {
    marginTop: 10,
    backgroundColor: '#772A22',
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 13,
    textAlign: 'center',
  },
});
