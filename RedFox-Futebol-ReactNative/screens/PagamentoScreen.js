import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
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
        <Text style={styles.label}>Nome no Cartão:</Text>
        <TextInput
          style={styles.input}
          value={nome}
          onChangeText={(text) => setNome(text)}
          placeholder="Nome no Cartão"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Número do Cartão:</Text>
        <TextInput
          style={styles.input}
          value={numeroCartao}
          onChangeText={(text) => setNumeroCartao(text)}
          placeholder="Número do Cartão"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Data de Expiração:</Text>
        <TextInput
          style={styles.input}
          value={dataExpiracao}
          onChangeText={(text) => setDataExpiracao(text)}
          placeholder="MM/AA"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Código de Segurança:</Text>
        <TextInput
          style={styles.input}
          value={codigoSeguranca}
          onChangeText={(text) => setCodigoSeguranca(text)}
          placeholder="Código de Segurança"
        />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={handleRealizarPagamento}
      >
        <Text style={styles.buttonText}>Confirmar Pagamento</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  inputContainer: {
    marginBottom: 16,
    width: '100%',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ConfirmacaoPagamento;
