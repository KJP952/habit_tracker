import { useLocalSearchParams } from 'expo-router';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

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
  <ScrollView style={styles.container}>
    <Text style={styles.title}>Habit Categories</Text>
    {content}
  </ScrollView>
);
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#f9eeee',
    padding: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 20,
    textAlign: 'center',
    color: '#1C0A08',
  },
  categoryBox: {
    backgroundColor: '#E9B5AF',
    borderRadius: 18,
    padding: 16,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: '#772A22',
  },
  categoryTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#1C0A08',
  },
  habitRow: {
    backgroundColor: '#F4DAD7',
    borderRadius: 14,
    padding: 14,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#772A22',
  },
  habitName: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#1C0A08',
    marginBottom: 6,
  },
  text: {
    fontSize: 14,
    color: '#1C0A08',
    marginBottom: 3,
  },
});