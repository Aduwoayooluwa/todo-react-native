import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Navigation from './src/Layout/Navigation';
import AddTodo from './src/components/AddTodo';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DisplayTodo from './src/components/DisplayTodo';

const Stack = createStackNavigator()

export default function App() {
  return (
  //   <NavigationContainer>
  //     <Stack.Navigator initialRouteName="Display">
  //       <Stack.Screen name="Todo List" component={DisplayTodo} />
  //       <Stack.Screen name="AddTodo" component={AddTodo} />
  //     </Stack.Navigator>
  // </NavigationContainer>
  <ScrollView nestedScrollEnabled={true} >
        <View>
       <DisplayTodo />
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
