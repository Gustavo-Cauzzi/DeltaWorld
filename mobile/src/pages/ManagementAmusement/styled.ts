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


