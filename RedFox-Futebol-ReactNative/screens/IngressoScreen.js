import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const IngressoScreen = () => {
  
  const navigation = useNavigation();

  // Estados separados para rastrear a quantidade de cada tipo de ingresso
  const [selectedPrices, setSelectedPrices] = useState({
    padrao: 0,
    vip: 0,
    premium: 0,
  });

  const [ticketQuantity, setTicketQuantity] = useState({
    padrao: 0,
    vip: 0,
    premium: 0,
  });

  useEffect(() => {
    // Calcula o total somando os preços de todos os tipos de ingresso
    const total = selectedPrices.padrao + selectedPrices.vip + selectedPrices.premium;
    setSelectedPrices({ ...selectedPrices, total });
  }, [selectedPrices]);

  const handleSelectTicket = (price, type) => {
    const newSelectedPrices = { ...selectedPrices };
    newSelectedPrices[type] = price * ticketQuantity[type];
    setSelectedPrices(newSelectedPrices);
  };

  const incrementQuantity = (type) => {
    setTicketQuantity({
      ...ticketQuantity,
      [type]: ticketQuantity[type] + 1,
    });
  };

  const decrementQuantity = (type) => {
    if (ticketQuantity[type] > 1) {
      setTicketQuantity({
        ...ticketQuantity,
        [type]: ticketQuantity[type] - 1,
      });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Compra de Ingresso</Text>
      <View style={styles.ticketContainer}>
        <Text style={styles.ticketTitle}>Escolha o tipo de ingresso:</Text>
        {/* Ingresso Padrão */}
        <View style={styles.ticketOptionContainer}>
          <TouchableOpacity
            style={styles.ticketOption}
            onPress={() => handleSelectTicket(50, 'padrao')}
          >
            <Text style={styles.optionText}>Ingresso Padrão</Text>
            <Text style={styles.optionPrice}>R$ 50</Text>
          </TouchableOpacity>
          <View style={styles.quantityContainer}>
            <TouchableOpacity
              style={styles.quantityButton}
              onPress={() => decrementQuantity('padrao')}
            >
              <Text style={styles.quantityButtonText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantityText}>{ticketQuantity.padrao}</Text>
            <TouchableOpacity
              style={styles.quantityButton}
              onPress={() => incrementQuantity('padrao')}
            >
              <Text style={styles.quantityButtonText}>+</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.total}>Total: R$ {selectedPrices.padrao}</Text>
        </View>
        {/* Ingresso VIP */}
        <View style={styles.ticketOptionContainer}>
          <TouchableOpacity
            style={styles.ticketOption}
            onPress={() => handleSelectTicket(100, 'vip')}
          >
            <Text style={styles.optionText}>Ingresso VIP</Text>
            <Text style={styles.optionPrice}>R$ 100</Text>
          </TouchableOpacity>
          <View style={styles.quantityContainer}>
            <TouchableOpacity
              style={styles.quantityButton}
              onPress={() => decrementQuantity('vip')}
            >
              <Text style={styles.quantityButtonText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantityText}>{ticketQuantity.vip}</Text>
            <TouchableOpacity
              style={styles.quantityButton}
              onPress={() => incrementQuantity('vip')}
            >
              <Text style={styles.quantityButtonText}>+</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.total}>Total: R$ {selectedPrices.vip}</Text>
        </View>
        {/* Ingresso Premium */}
        <View style={styles.ticketOptionContainer}>
          <TouchableOpacity
            style={styles.ticketOption}
            onPress={() => handleSelectTicket(150, 'premium')}
          >
            <Text style={styles.optionText}>Ingresso Premium</Text>
            <Text style={styles.optionPrice}>R$ 150</Text>
          </TouchableOpacity>
          <View style={styles.quantityContainer}>
            <TouchableOpacity
              style={styles.quantityButton}
              onPress={() => decrementQuantity('premium')}
            >
              <Text style={styles.quantityButtonText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantityText}>{ticketQuantity.premium}</Text>
            <TouchableOpacity
              style={styles.quantityButton}
              onPress={() => incrementQuantity('premium')}
            >
              <Text style={styles.quantityButtonText}>+</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.total}>Total: R$ {selectedPrices.premium}</Text>
        </View>
        {/* Total Geral */}
        <Text style={styles.totalGeral}>Total Geral: R$ {selectedPrices.total}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    alignItems: 'center',
    paddingTop: 40,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  ticketContainer: {
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 20,
    width: '80%',
  },
  ticketTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  ticketOptionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  ticketOption: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    marginRight: 10,
  },
  optionText: {
    fontSize: 18,
    color: '#333',
  },
  optionPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#800000',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    backgroundColor: '#007BFF',
    borderRadius: 15,
    padding: 10,
  },
  quantityButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  quantityText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  total: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 5,
    color: '#333',
  },
  totalGeral: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#333',
  },
});

export default IngressoScreen;