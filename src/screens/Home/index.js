import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import Styles from './Styles';

import AnimatedLottieView from 'lottie-react-native';
import Pokemon1 from '../../assets/Pokemon1.json';

const HomeScreen = ({navigation}) => {
  return (
    <View style={Styles.View}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('PokeHome');
        }}>
        <View style={Styles.ViewImage}>
          <Image source={require('../../assets/BackgroundPokeball.png')} />
          <AnimatedLottieView autoPlay source={Pokemon1} loop />
        </View>

        <View style={Styles.ButtonHome1}>
          <Text style={Styles.title1}>Bem Vindo a Pokedex!</Text>
          <Text style={Styles.title2}>A Pokedex React Native!</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
