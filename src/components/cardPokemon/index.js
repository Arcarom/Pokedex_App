import React from 'react';
import {Text, View} from 'react-native';
import {Styles} from './style';

//passei o meu primeiro parâmetro
const CardPokemon = ({procurar}) => {
  const procura = procurar;

  return (
    <View>
      <View style={Styles.View}>
        <Text style={{color: '#121212'}}>{procura}</Text>
      </View>
    </View>
  );
};

export default CardPokemon;
