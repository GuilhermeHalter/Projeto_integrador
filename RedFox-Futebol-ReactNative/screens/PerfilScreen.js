import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const PerfilScreen = () => {
  const navigation = useNavigation();

  const [user, setUser] = useState({
    username: 'Nome de Usuário',
  });

  const [purchases, setPurchases] = useState([]);

  useEffect(() => {
    // Aqui você pode buscar as informações do usuário e compras passadas da sua fonte de dados, como um banco de dados ou API
    // Por enquanto, estamos apenas usando dados de exemplo
    const mockPurchases = [
      { id: 1, itemName: 'Ingresso Premium', price: 150 },
      { id: 2, itemName: 'Ingresso VIP', price: 100 },
      { id: 3, itemName: 'Ingresso Padrão', price: 50 },
    ];

    setPurchases(mockPurchases);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={user.profileImage} style={styles.profileImage} />
      <Text style={styles.name}>{user.username}</Text>
      <Text style={styles.label}>Compras Passadas:</Text>
      {purchases.map((purchase) => (
        <View key={purchase.id} style={styles.purchaseItem}>
          <Text style={styles.itemName}>{purchase.itemName}</Text>
          <Text style={styles.price}>Preço: R$ {purchase.price}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  purchaseItem: {
    marginBottom: 10,
  },
  itemName: {
    fontSize: 16,
  },
  price: {
    fontSize: 16,
    color: 'gray',
  },
});

export default PerfilScreen;
