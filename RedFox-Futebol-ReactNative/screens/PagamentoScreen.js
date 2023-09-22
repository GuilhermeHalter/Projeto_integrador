import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ConfirmacaoPagamento = () => {
  const [nome, setNome] = useState('');
  const [numeroCartao, setNumeroCartao] = useState('');
  const [dataExpiracao, setDataExpiracao] = useState('');
  const [codigoSeguranca, setCodigoSeguranca] = useState('');

  const handleRealizarPagamento = () => {
    Alert.alert('Pagamento Efetuado', 'Pagamento efetuado com sucesso!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Confirmação de Pagamento</Text>
      <View style={styles.inputContainer}>
        <Text>Nome no Cartão:</Text>
        <TextInput
          style={styles.input}
          value={nome}
          onChangeText={(text) => setNome(text)}
          placeholder="Nome no Cartão"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text>Número do Cartão:</Text>
        <TextInput
          style={styles.input}
          value={numeroCartao}
          onChangeText={(text) => setNumeroCartao(text)}
          placeholder="Número do Cartão"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text>Data de Expiração:</Text>
        <TextInput
          style={styles.input}
          value={dataExpiracao}
          onChangeText={(text) => setDataExpiracao(text)}
          placeholder="MM/AA"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text>Código de Segurança:</Text>
        <TextInput
          style={styles.input}
          value={codigoSeguranca}
          onChangeText={(text) => setCodigoSeguranca(text)}
          placeholder="Código de Segurança"
        />
      </View>
      <TouchableOpacity
              onPress={handleRealizarPagamento} 
            >
              <Text>Confirmar pagamento</Text>
            </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  inputContainer: {
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 8,
  },
});

export default ConfirmacaoPagamento;
