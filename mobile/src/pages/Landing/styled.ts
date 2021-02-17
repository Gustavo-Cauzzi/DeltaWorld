import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const LoginContainer = styled.View`
  position: absolute;
  display: flex;
  width: 100px;
  height: 30px;
  right: 20px;
  top: 50px;
`;

export const LoginButton = styled(RectButton)`
  flex: 1;
  background-color: #943030;
  border-radius: 100px;
  justify-content: center;
  align-items: center;
`;

export const LoginButtonText = styled.Text`
  color: #E5E5E5;
  font-family: "Poppins_400Regular";
`;

export const HelloContainer  = styled.View`
  position: absolute;
  top: 50px;
  left: 20px;
`;

export const HelloText = styled.Text`
  font-family: "Archivo_700Bold";
  color: #FFF;
  font-size: 20px;
`;

export const Avatar = styled.Image`
  height: 50px;
  width: 50px;
  left: 230px;
  border-radius: 25px;
`;

export const LogoImage = styled.Image`
  position: relative;
  height: 75%;
  width: 95%;
  margin-left: -40px;
`;

export const LogoContainer = styled.View`
  /* background-color: rgba(0, 255, 255, 0.1); */
  position: relative;
  height: 350px;
  top: 75px;
  margin-left: -40px;
  margin-right: -40px;
  justify-content: center;
  align-items: center;
`;