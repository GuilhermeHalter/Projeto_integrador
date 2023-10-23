import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Text, List } from 'react-native-paper';


import TimeService from '../services/times';
import { useEffect, useState } from 'react';


export default function TimeAdd({ navigation }) {
  const [times, setTimes] = useState([]);

  const getTimes = async () => {
    const data = await TimeService.getAllTimes();
    setTimes(data);
  };

  useEffect(async () => {
    getTimes();
  }, []);


  return (
    <View style={styles.container}>
      <Text variant="headlineMedium">Times do Brasileirão</Text>
      <>
        {times.map((time) => (
          <List.Item key={time.id} title={time.name} />
        ))}
      </>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'top',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '70%',
  },
});