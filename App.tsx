import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Navigation from './src/Layout/Navigation';
import AddTodo from './src/components/AddTodo';

export default function App() {
  return (
          <ScrollView>
            <View style={styles.container}>
              <Navigation />
            <AddTodo />
            <StatusBar style="auto" />
            </View>
        </ScrollView> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
});
