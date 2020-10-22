import React, { useCallback, useState } from 'react';
import * as ImagePicker from 'expo-image-picker';

import PageHeader from '../../components/PageHeader';
import Icon from 'react-native-vector-icons/Feather';
import { 
  AvatarView, 
  ChooseAvatarContainer, 
  AvatarInputContainer, 
  AvatarButtonContainer, 
  AvatarButton, 
  AvatarButtonText, 
  AvatarPreview, 
  AvatarPreviewInexistent,
  FormContainer,
  Container,
  InputText,
  Input,
  SubmitButtonContainer,
  SubmitButton,
  SubmitButtonText
} from './styled';
import api from '../../services/api';

interface ImagePickerData {
  uri: string;
}

export default function ManagementTypes(){
  const [name, setName] = useState('');
  const [avatarImg, setAvatarImg] = useState<ImagePickerData>({} as ImagePickerData);

  const handleSubmitAmusement = useCallback(async () => {
    await api.post('/types',{
      name,
      default_avatar: avatarImg.uri,
    })
  }, []);

  const handleImagePicker = useCallback(async () => {
    if(avatarImg.uri){
      setAvatarImg({} as ImagePickerData);
      return;
    }
    
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();

    if(pickerResult.cancelled){
      return;
    }

    setAvatarImg(pickerResult as ImagePickerData);
  }, []);

  return(
    <Container>
      <PageHeader
        title="Gerencie os tipos de atrações"
      />
      <FormContainer>
        <InputText>
          Nome:
        </InputText>
        <Input
          placeholderTextColor="#c1bccc"
          placeholder="Qual o nome do entretenimento?"
          onChangeText={text => {setName(text)}}
        />

        <AvatarView>
          <ChooseAvatarContainer>
            <AvatarInputContainer>
              <InputText>
                Avatar:
              </InputText>
              
              <AvatarButtonContainer>
                <AvatarButton onPress={handleImagePicker}>
                  <AvatarButtonText>Escolher</AvatarButtonText>
                </AvatarButton>
              </AvatarButtonContainer>
            </AvatarInputContainer>

            {
              avatarImg.uri 
              ?
              <AvatarPreview source={{ uri: avatarImg.uri }}/>
              :
              <AvatarPreviewInexistent>
                <Icon name="camera" size={20} color="#E5E5E5"/>
              </AvatarPreviewInexistent>
            }
          </ChooseAvatarContainer>
        </AvatarView>

        <SubmitButtonContainer>
          <SubmitButton
            onPress={handleSubmitAmusement}
          >
            <SubmitButtonText>
              Submit
            </SubmitButtonText>
          </SubmitButton>
        </SubmitButtonContainer>
      </FormContainer>
    </Container>
  )
}