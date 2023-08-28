import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image} from 'react-native';

const LoginScreen = () => {
  return (
    <View style={styles.loginContainer}>
       <View style={styles.profileImage}>
       <Image style={styles.roundedImage} source={require('./img/pngfind.com-bite-mark-png-631239.png')} />
      </View>
      <View style={styles.loginCard}>
        <Text style={styles.loginTitle}>Login</Text>
        <View style={styles.inputWrapper}>
          <TextInput style={styles.inputField} placeholder="username" />
        </View>
        <View style={styles.inputWrapper}>
          <TextInput style={styles.inputField} placeholder="password" secureTextEntry />
        </View>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
    backgroundColor: 'red',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100%',
    backgroundColor: 'linear-gradient(to bottom, #3498db, #2980b9)',
  },

  profileImage: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },

  roundedImage: {
    backgroundColor: '#faebd7',
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },

  loginCard: {
    backgroundColor: '#faebd7',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    padding: 30,
    width: 350,
  },
  loginTitle: {
    fontSize: 28,
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  inputLabel: {
    fontSize: 14,
    marginBottom: 5,
    color: '#666',
  },
  inputField: {
    width: '100%',
    padding: 12,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
    marginBottom: 15,
  },
  loginButton: {
    backgroundColor: '#27ae60',
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default LoginScreen;