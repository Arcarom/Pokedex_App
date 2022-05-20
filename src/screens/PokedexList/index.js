import React, {useEffect, useState} from 'react';
import {StyleImage, ListStyle, ViewSafe} from './style';
import {
  FlatList,
  SafeAreaView,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';

const PokeList = () => {
  const [listPoke, setListPoke] = useState([]);

  const listapokemon = () => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=150', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      }, // primeira requisição
    })
      .then(response => response.json())
      .then(data => {
        setListPoke(data.results);
      }); //.then - promeça
  };
  //re-cicla as variáveis, ciclo de vida
  useEffect(() => {
    listapokemon();
  }, []); //monitora dentro das [ ], caso altere, ele execulta o listapokemon()
  return (
    <SafeAreaView style={ViewSafe.View}>
      <ImageBackground
        source={require('../../assets/BackgroundPokeball.png')}
        style={StyleImage.Image}
      />
      <FlatList
        data={listPoke}
        keyExtractor={pokemon => pokemon.name}
        contentContainerStyle={{flexGrow: 1}}
        renderItem={item => PokeShow(item)}
      />
    </SafeAreaView>
  );
};

function PokeShow(item) {
  const {name, url} = item.item;
  const pokemonNumber = url
    .replace('https://pokeapi.co/api/v2/pokemon/', ' ')
    .replace('/', '');
  //corrigi com number(pokemonNumber)
  const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${Number(
    pokemonNumber,
  )}.png`;
  return (
    <TouchableOpacity style={ListStyle.styleList}>
      <Text style={ListStyle.TextName}>{name}</Text>
      <Image style={ListStyle.ImagePoke} source={{uri: imgUrl}} />
    </TouchableOpacity>
  );
}

export default PokeList;
