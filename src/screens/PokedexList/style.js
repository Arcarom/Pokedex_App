import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';

export const StyleImage = StyleSheet.create({
  Image: {
    margin: 10,
    backgroundColor: 'rgb(20,4,31)',
    padding: 10,
    height: 130,
    borderRadius: 20,
  },
});

export const ListStyle = StyleSheet.create({
  styleList: {
    backgroundColor: 'rgb(100,100,200)',
    borderRadius: 20,
    padding: 10,
    margin: 10,
    flexDirection: 'row', //direção dos itens na lista
    alignItems: 'center', //coloca os itens no "centro"  de maneira horizontal
    justifyContent: 'space-between', //separa palavra da foto
  },
  ImagePoke: {
    height: 100,
    width: 100,
  },
  TextName: {
    fontSize: 30,
    fontWeight: '800',
  },
});

export const ViewSafe = StyleSheet.create({
  View: {
    flex: 1,

    backgroundColor: '#8BBE8A',
  },
});
