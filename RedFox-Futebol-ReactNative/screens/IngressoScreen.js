import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const IngressoScreen = () => {
  const navigation = useNavigation();
  const windowWidth = Dimensions.get('window').width;

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
    const total =
      selectedPrices.padrao + selectedPrices.vip + selectedPrices.premium;
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
    if (ticketQuantity[type] > 0) {
      setTicketQuantity({
        ...ticketQuantity,
        [type]: ticketQuantity[type] - 1,
      });
    }
  };

  const textSize = windowWidth * 0.04;
  const containerWidth = windowWidth * 0.8;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={[styles.title, { fontSize: textSize }]}>Compra de Ingresso</Text>
      <View style={[styles.ticketContainer, { width: containerWidth }]}>
        <Text style={[styles.ticketTitle, { fontSize: textSize }]}>Escolha o tipo de ingresso:</Text>

        {/* Ingresso Padrão */}
        <View style={styles.ticketOptionContainer}>
          <TouchableOpacity
            style={styles.ticketOption}
            onPress={() => handleSelectTicket(50, 'padrao')}
          >
            <Text style={[styles.optionText, { fontSize: textSize }]}>Ingresso Padrão</Text>
            <Text style={[styles.optionPrice, { fontSize: textSize }]}>R$ 50</Text>
          </TouchableOpacity>
          <View style={styles.quantityContainer}>
            <TouchableOpacity
              style={styles.quantityButton}
              onPress={() => decrementQuantity('padrao')}
            >
              <Text style={styles.quantityButtonText}>-</Text>
            </TouchableOpacity>
            <Text style={[styles.quantityText, { fontSize: textSize }]}>{ticketQuantity.padrao}</Text>
            <TouchableOpacity
              style={styles.quantityButton}
              onPress={() => incrementQuantity('padrao')}
            >
              <Text style={styles.quantityButtonText}>+</Text>
            </TouchableOpacity>
          </View>
          <Text style={[styles.total, { fontSize: textSize }]}>Total: R$ {selectedPrices.padrao}</Text>
        </View>

        {/* Ingresso VIP */}
        <View style={styles.ticketOptionContainer}>
          <TouchableOpacity
            style={styles.ticketOption}
            onPress={() => handleSelectTicket(100, 'vip')}
          >
            <Text style={[styles.optionText, { fontSize: textSize }]}>Ingresso VIP</Text>
            <Text style={[styles.optionPrice, { fontSize: textSize }]}>R$ 100</Text>
          </TouchableOpacity>
          <View style={styles.quantityContainer}>
            <TouchableOpacity
              style={styles.quantityButton}
              onPress={() => decrementQuantity('vip')}
            >
              <Text style={styles.quantityButtonText}>-</Text>
            </TouchableOpacity>
            <Text style={[styles.quantityText, { fontSize: textSize }]}>{ticketQuantity.vip}</Text>
            <TouchableOpacity
              style={styles.quantityButton}
              onPress={() => incrementQuantity('vip')}
            >
              <Text style={styles.quantityButtonText}>+</Text>
            </TouchableOpacity>
          </View>
          <Text style={[styles.total, { fontSize: textSize }]}>Total: R$ {selectedPrices.vip}</Text>
        </View>

        {/* Ingresso Premium */}
        <View style={styles.ticketOptionContainer}>
          <TouchableOpacity
            style={styles.ticketOption}
            onPress={() => handleSelectTicket(150, 'premium')}
          >
            <Text style={[styles.optionText, { fontSize: textSize }]}>Ingresso Premium</Text>
            <Text style={[styles.optionPrice, { fontSize: textSize }]}>R$ 150</Text>
          </TouchableOpacity>
          <View style={styles.quantityContainer}>
            <TouchableOpacity
              style={styles.quantityButton}
              onPress={() => decrementQuantity('premium')}
            >
              <Text style={styles.quantityButtonText}>-</Text>
            </TouchableOpacity>
            <Text style={[styles.quantityText, { fontSize: textSize }]}>{ticketQuantity.premium}</Text>
            <TouchableOpacity
              style={styles.quantityButton}
              onPress={() => incrementQuantity('premium')}
            >
              <Text style={styles.quantityButtonText}>+</Text>
            </TouchableOpacity>
          </View>
          <Text style={[styles.total, { fontSize: textSize }]}>Total: R$ {selectedPrices.premium}</Text>
        </View>

        {/* Total Geral */}
        <Text style={[styles.totalGeral, { fontSize: textSize }]}>Total Geral: R$ {selectedPrices.total}</Text>
      </View>
    </ScrollView>
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
  fontWeight: 'bold',
  color: '#333',
  marginBottom: 20,
},
ticketContainer: {
  borderWidth: 2,
  borderColor: '#ccc',
  borderRadius: 10,
  padding: 20,
},
ticketTitle: {
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
  color: '#333',
},
optionPrice: {
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
  fontWeight: 'bold',
  color: '#fff',
},
quantityText: {
  fontWeight: 'bold',
  marginHorizontal: 10,
},
total: {
  fontWeight: 'bold',
  marginTop: 5,
  color: '#333',
},
totalGeral: {
  fontWeight: 'bold',
  marginTop: 20,
  color: '#333',
},
});

export default IngressoScreen;




