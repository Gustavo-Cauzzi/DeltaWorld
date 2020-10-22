import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const AvatarView = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  padding: 0 10px;
  justify-content: center;
`;

export const ChooseAvatarContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  max-width: 175px;
`;

export const AvatarInputContainer = styled.View`
  height: 60px;
  margin-right: 10px;
`;

export const AvatarButtonContainer = styled.View`
  height: 100%;
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  flex: 1;
  max-width: 100px;
`;

export const AvatarButton = styled(RectButton)`
  background-color: #D25A5A;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  padding: 2px 20px;
`;

export const AvatarButtonText = styled.Text`
  color: #fff;
  font-family: 'Archivo_400Regular';
`;

export const AvatarPreview = styled.Image`
  height: 60px;
  width: 60px;
  border-radius: 30px;
  margin-right: 10px;
`;

export const AvatarPreviewInexistent = styled.View`
  height: 60px;
  width: 60px;
  border-radius: 30px;
  background-color: #AAA;
  justify-content: center;
  align-items: center;
`;

export const InputText = styled.Text`
  color: #222;
  font-family: "Archivo_400Regular";
  font-size: 20px;
`;

export const FormContainer = styled.View`
  padding: 20px 10px;
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;
  flex-direction: column;
  flex: 1;
  border-radius: 5px;
`;

export const Container = styled.View`
  background-color: #F5F5F5;
  flex: 1;
`;

export const Input = styled.TextInput`
  font-family:"Archivo_400Regular";
  margin: 5px 10px;
  padding: 10px 20px;
  background-color: #f0f0f0;
  border-radius: 10px;
  border-color: #e5e5e5;
  border-width: 1px;
  font-size: 15px;
`;

export const SubmitButtonContainer = styled.View`
  flex-direction: row;
  height: 40px;
  align-items: center;
  justify-content:center;
  margin-top: 20px;
`;

export const SubmitButton = styled(RectButton)`
  background-color: #D25A5A;
  flex:1;
  max-width: 300px;
  border-radius: 5px;
  height: 40px;
  align-items: center;
  justify-content: center;
`;

export const SubmitButtonText = styled.Text`
  color: #f5f5f5;
  font-family:"Archivo_700Bold";
  font-size: 20px;
`;