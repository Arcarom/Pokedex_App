import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';

export const Input = styled.TextInput`
  width: 100%;
  border-radius: 10px;
  background-color: royalblue;
`;

export const StyleImage = StyleSheet.create({
  Image: {
    justifyContent: 'flex-end',
    margin: 10,
    backgroundColor: 'rgb(20,4,31)',
    padding: 10,
    height: 130,
    borderRadius: 20,
  },
});

export const ViewSafe = StyleSheet.create({
  View: {
    flex: 1,

    backgroundColor: '#748FC9',
  },
});

export const button = StyleSheet.create({
  buttonTouch: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'royalblue',
    marginHorizontal: 100,
    marginBottom: 10,
    borderRadius: 20,
  },
  Text: {
    color: '#fff',
  },
});
