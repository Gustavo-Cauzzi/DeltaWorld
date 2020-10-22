import styled, { css } from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  background: #E5E5E5;
  border-radius: 10px;
  margin-bottom: 8px;
  border-width: 3px;
  border-color: #E5E5E5;

  flex-direction: row;
  align-items: center;

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      border-color: #D25A5A;
    `}
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #666360;
  font-size: 18px;
  font-family: 'Archivo_400Regular';
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 16px;
`;
