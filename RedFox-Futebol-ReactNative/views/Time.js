import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TimeList from './TimeList';

const Stack = createNativeStackNavigator();

export default function Time() {
  return (
    <Stack.Navigator initialRouteName="TimeList">
      <Stack.Screen
        name="TimeList"
        component={TimeList}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}