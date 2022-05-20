/*

import React, {useEffect, useState, Component} from 'react';
import {Image, Text, ImageBackground, Alert, Button} from 'react-native';
import {Input, StyleImage} from './styles';
import Carregar from '../../components/Loading';

import api from '../../services/Api';

const PokeHome = () => {
  const [Procurar, setProcurar] = useState('');
  const [Pokemons, setPokemons] = useState([]);

  const [carregando, setCarregando] = useState(false);

  async function PokeList() {
    if (!Procurar) {
      return Alert.alert('Digite um Pokemon');
    }

    setCarregando(true);
    try {
      const {data} = await api.get(
        `pokemon/${Procurar.toLowerCase().replace('', '')}`,
        console.log(Procurar),
        console.log(data),
      );
      setCarregando(false);
      if (data.Procurar) {
        setPokemons(data);
      } else {
        return Alert.alert('Nenhum Resultado Encontrado');
      }
    } catch (error) {
      console.log(error);
      setCarregando(false);
    }
  }
  return (
    <>
      {carregando && <Carregar />}
      <ImageBackground
        source={require('../../assets/BackgroundPokeball.png')}
        style={StyleImage.Image}>
        <Input
          placeholder="Qual Pokemon você está procurando ?"
          placeholderTextColor="#fff"
          autoCapitalize="words"
          value={Procurar}
          onChangeText={value => setProcurar(value)}
          returnKeyType="search"
          onSubmitEditing={() => PokeList()}
        />
      </ImageBackground>
      <Button title="Procurar" onPress={() => PokeList()} />
      <Text>{Pokemons}</Text>
    </>
  );
};

export default PokeHome;

/*
 const ListarPokemon = async () => {
    const req = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    const json = await req.json();
    console.log({json});
    return json;
  };


    async function PokeList() {
    if (!Procurar) {
      return Alert.alert('Digite o nome de um Pokemon');
    }

    setCarregando(true);
    try {
      const {forms} = await api.get(
        `pokemon/${lower}`,
        console.log(lower),
        console.log(forms),
      );
      setCarregando(false);
      if (data.Procurar) {
        setPokemons(data);
      } else {
        return Alert.alert('Nenhum Resultado Encontrado');
      }
    } catch (error) {
      console.log(error);
      setCarregando(false);
    }
  }
*/
