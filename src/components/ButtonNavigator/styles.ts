import styled from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';

import FeatherIcon from 'react-native-vector-icons/Feather';

export const Container = styled(RectButton)`
  background: #054A29;
  border-radius: 10px;
  margin-right: 15px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 22px;
  font-weight: bold;
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 16px;
`;
