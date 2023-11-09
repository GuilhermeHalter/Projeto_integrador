import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, FlatList } from 'react-native';



const Historico = () => {
  const historicoData = [
    { id: '1', texto: 'Item 1' },
    { id: '2', texto: 'Item 2' },
    { id: '3', texto: 'Item 3' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Histórico</Text>
      <FlatList
        data={historicoData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemText}>{item.texto}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  item: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 16,
    marginBottom: 12,
  },
  itemText: {
    fontSize: 16,
  },
});

export default Historico;
