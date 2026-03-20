import { useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function HabitViewer(){
  const params = useLocalSearchParams();
  const habits = params.habits;

  let parsedHabits = [];
  let content;

if (habits) {
  try {
    let habitString;

    if (Array.isArray(habits)) {
      habitString = habits[0];
    } else {
      habitString = habits;
    }

    const data = JSON.parse(habitString);

    if (Array.isArray(data)) {
      parsedHabits = data;
    } else {
      parsedHabits = [data];
    }
  } catch (e) {
    console.log('Error parsing habits');
  }
}

let groupedHabits = {};

for (let i = 0; i < parsedHabits.length; i++) {
  let habit = parsedHabits[i];
  let category = habit.category;

  if (!category) {
    category = 'Uncategorized';
  }

  if (!groupedHabits[category]) {
    groupedHabits[category] = [];
  }

  groupedHabits[category].push(habit);
}

const categoryNames = Object.keys(groupedHabits);

if (categoryNames.length === 0) {
  content = (
    <Text style={styles.empty}>No habits added yet.</Text>
  );
} else {
  content = categoryNames.map(function (category) {
    return (
      <View key={category} style={styles.categoryBox}>
        <Text style={styles.categoryTitle}>{category}</Text>

        {groupedHabits[category].map(function (habit) {
          return (
            <View key={habit.id} style={styles.habitRow}>
              <Text style={styles.text}>Name: {habit.name}</Text>
              <Text style={styles.text}>Desc: {habit.description}</Text>
              <Text style={styles.text}>Weekly Goal: {habit.daysPerWeek}</Text>
            </View>
          );
        })}
      </View>
    );
  });
}

return (
  <View style={styles.container}>
    <Text style={styles.title}>Habit Categories</Text>
    {content}
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
  empty: {
    fontSize: 14,
  },
  categoryBox: {
    marginBottom: 20,
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 8,
  },
  habitRow: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 8,
  },
  text: {
    fontSize: 14,
    marginBottom: 2,
  },
});