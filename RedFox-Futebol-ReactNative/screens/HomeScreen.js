import React from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import LupaIcon from './img/pngwing.com.png';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleComprarIngresso = () => {
    navigation.navigate('Ingresso');
  };

  const handlePerfil = () => {
    navigation.navigate('Perfil');
  };

  const screenWidth = Dimensions.get('window').width;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.menu}>
        <Text style={styles.menuItem}>Home</Text>

        <View style={styles.searchBar}>
          <Image source={LupaIcon} style={styles.lupaIcon} />
          <TextInput placeholder="Search" style={styles.searchInput} />
        </View>
        <View style={styles.handlePerfil}>
          <TouchableOpacity
              style={styles.compraButton}
              onPress={handlePerfil}>
            <Image style={styles.roundedImage} source={require('./img/pngfind.com-bite-mark-png-631239.png')} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.content}>
        <Text style={styles.contentText}>Jogos da semana</Text>

        <View style={styles.imageRow}>
          <View style={styles.column}>
            <Image source={require('./img/Botafogo.png')} style={styles.image} />
            <Text style={styles.vsText}>VS</Text>
            <Image source={require('./img/Flamengo.png')} style={styles.image} />
            <TouchableOpacity
              style={styles.compraButton}
              onPress={handleComprarIngresso}
            >
              <Text style={styles.compraButtonText}>Comprar ingresso</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.column}>
            <Image source={require('./img/Botafogo.png')} style={styles.image} />
            <Text style={styles.vsText}>VS</Text>
            <Image source={require('./img/Flamengo.png')} style={styles.image} />
            <TouchableOpacity
              style={styles.compraButton}
              onPress={handleComprarIngresso}
            >
              <Text style={styles.compraButtonText}>Comprar ingresso</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.column}>
            <Image source={require('./img/Botafogo.png')} style={styles.image} />
            <Text style={styles.vsText}>VS</Text>
            <Image source={require('./img/Flamengo.png')} style={styles.image} />
            <TouchableOpacity
              style={styles.compraButton}
              onPress={handleComprarIngresso}
            >
              <Text style={styles.compraButtonText}>Comprar ingresso</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.column}>
            <Image source={require('./img/Botafogo.png')} style={styles.image} />
            <Text style={styles.vsText}>VS</Text>
            <Image source={require('./img/Flamengo.png')} style={styles.image} />
            <TouchableOpacity
              style={styles.compraButton}
              onPress={handleComprarIngresso}
            >
              <Text style={styles.compraButtonText}>Comprar ingresso</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.column}>
            <Image source={require('./img/Botafogo.png')} style={styles.image} />
            <Text style={styles.vsText}>VS</Text>
            <Image source={require('./img/Flamengo.png')} style={styles.image} />
            <TouchableOpacity
              style={styles.compraButton}
              onPress={handleComprarIngresso}
            >
              <Text style={styles.compraButtonText}>Comprar ingresso</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.column}>
            <Image source={require('./img/Botafogo.png')} style={styles.image} />
            <Text style={styles.vsText}>VS</Text>
            <Image source={require('./img/Flamengo.png')} style={styles.image} />
            <TouchableOpacity
              style={styles.compraButton}
              onPress={handleComprarIngresso}
            >
              <Text style={styles.compraButtonText}>Comprar ingresso</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.column}>
            <Image source={require('./img/Botafogo.png')} style={styles.image} />
            <Text style={styles.vsText}>VS</Text>
            <Image source={require('./img/Flamengo.png')} style={styles.image} />
            <TouchableOpacity
              style={styles.compraButton}
              onPress={handleComprarIngresso}
            >
              <Text style={styles.compraButtonText}>Comprar ingresso</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.column}>
            <Image source={require('./img/Botafogo.png')} style={styles.image} />
            <Text style={styles.vsText}>VS</Text>
            <Image source={require('./img/Flamengo.png')} style={styles.image} />
            <TouchableOpacity
              style={styles.compraButton}
              onPress={handleComprarIngresso}>
              <Text style={styles.compraButtonText}>Comprar ingresso</Text>
            </TouchableOpacity>
          </View>

        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
  },
  menu: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'gray',
    padding: 20,
  },
  menuItem: {
    padding: 20,
    color: '#fff',
    fontSize: 18,
    marginRight: 10,
  },
  searchBar: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderBottomColor: '#ccc',
    borderRadius: 5,
    flex: 1,
    alignItems: 'center',
  },
  lupaIcon: {
    width: 20,
    height: 20,
    tintColor: '#000',
  },
  searchInput: {
    borderColor: 'transparent',
    padding: 5,
    flex: 1,
  },
  content: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    alignItems: 'center',
    paddingVertical: 30,
  },
  contentText: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    color: '#000',
  },
  imageRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    padding: 10,
  },
  column: {
    alignItems: 'center',
    padding: 10,
    width: '48%',
    marginBottom: 20,
    backgroundColor: '#fff', // Add a background color for spacing
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  vsText: {
    fontSize: 18,
    color: '#000',
    marginVertical: 5,
  },
  compraButton: {
    backgroundColor: '#800000',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10,
  },
  compraButtonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  handlePerfil: {
    padding: 10
  }
});

export default HomeScreen;
