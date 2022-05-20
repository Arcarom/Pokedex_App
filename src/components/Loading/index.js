import React from 'react';
import {Container} from './styles';
import LottieView from 'lottie-react-native';

const Carregar = () => {
  return (
    <Container>
      <LottieView
        source={require('../../assets/pokeballLoading.json')}
        autoPlay
        loop
      />
    </Container>
  );
};

export default Carregar;
