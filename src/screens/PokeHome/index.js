import React, {useEffect, useState, Component} from 'react';
import {
  Image,
  Text,
  ImageBackground,
  Alert,
  Button,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {button, Input, StyleImage, ViewSafe} from './styles';
import Carregar from '../../components/Loading';

import api from '../../services/Api';
import CardPokemon from '../../components/cardPokemon';

const PokeHome = () => {
  const [procurar, setProcurar] = useState('');

  async function PokeList() {
    if (!procurar) {
      return Alert.alert('Digite um nome válido!');
    }
  }
  return (
    <SafeAreaView style={ViewSafe.View}>
      <ImageBackground
        source={require('../../assets/BackgroundPokeball.png')}
        style={StyleImage.Image}>
        <Input
          placeholder="Qual Pokemon você está procurando ?"
          placeholderTextColor="#fff"
          autoCapitalize="words"
          value={procurar}
          onChangeText={value => setProcurar(value)}
          onSubmitEditing={() => PokeList()}
        />
      </ImageBackground>
      <TouchableOpacity style={button.buttonTouch} onPress={() => PokeList()}>
        <Text style={button.Text}>Pesquisar</Text>
      </TouchableOpacity>
      <CardPokemon procurar={procurar} />
    </SafeAreaView>
  );
};

export default PokeHome;
