import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #AC3333;
  align-items: center;
  justify-content: center;
`;

export const FormContainer = styled.View`
  padding: 0 20px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: #E5E5E5;
  font-family: "Archivo_700Bold";
  font-size: 30px;
  margin-bottom: 5px;
`;

export const SubTitle = styled.Text`
  color: #E5E5E5;
  font-family: "Poppins_600SemiBold";
  font-size: 20px;
  text-align: center;
  margin-bottom: 30px;
`;

export const BackButtonContainer = styled.View`
  position: absolute;
  right: 20px;
  top: 50px;
`;

export const BackButton = styled.TouchableOpacity``;

export const SubmitButton  = styled(RectButton)`
  background-color: #D25A5A;
  padding: 10px 0;
  border-radius: 10px;
  margin-top: 10px;
  align-items: center;
`;

export const SubmitButtonText = styled.Text`
  color: #E5E5E5;
  font-size: 20px;
  font-family: "Poppins_600SemiBold";
`;

export const CreateAccountContainer = styled.View`
  position: absolute;
  bottom: 20px;
`;

export const CreateAccountText = styled.Text`
  color: #E5E5E5;
  font-size: 20px;
  font-family: "Archivo_700Bold";
`;