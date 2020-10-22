import React, { useState, useEffect, useCallback, useRef } from 'react';
import { View, Text } from 'react-native';
import { TextInput, ScrollView, RectButton } from 'react-native-gesture-handler';
import DropDownPicker from 'react-native-dropdown-picker';
import * as ImagePicker from 'expo-image-picker';

import styles from './styles';
import dropStyles from '../../utils/DropdownPicker/dropStyles';
import PageHeader from '../../components/PageHeader'
import api from '../../services/api';
import { AvatarButton, AvatarButtonContainer, AvatarButtonText, AvatarInputContainer, AvatarPreview, AvatarPreviewInexistent, AvatarView, ChooseAvatarContainer } from './styled';
import { useAuth } from '../../hooks/auth';
import Icon from 'react-native-vector-icons/Feather';

interface typeInterface{
  name: string,
  id: Number,
  default_avatar: string
}

interface ImagePickerData {
  uri: string;
}

export default function ManagementAmusements(){
  const [types,setTypes] = useState<typeInterface[]>([]);

  const [name, setName] = useState('');
  const [typeId, setTypesId] = useState(-1);
  const [bio, setBio] = useState('');
  const [cost, setCost] = useState(-1);
  const [avatarImg, setAvatarImg] = useState<ImagePickerData>({} as ImagePickerData);

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
  }, [avatarImg.uri]);

  async function handleSubmitAmusement(){
    const paramsSend = {
      name,
      type: typeId,
      bio,
      cost,
      avatar: avatarImg.uri,
    };
    await api.post('amusements', paramsSend)
  }

  useEffect(() => {
    api.get('types').then(res => {
      setTypes(res.data);
    })
  } , []);

  return(
    <View style={styles.container}>
      <PageHeader title="Gerencie seu parque!" />
        <ScrollView>
          <View style={styles.form}>
            <Text style={styles.label}>
              Nome:
            </Text>
            <TextInput
              placeholderTextColor="#c1bccc"
              style={styles.input}
              placeholder="Qual o nome do entretenimento?"
              onChangeText={text => {setName(text)}}
            />

            <Text style={styles.label}>
              Tipo do entretenimento:
            </Text>
            <DropDownPicker
              items={types.map((t : typeInterface) => {
                return {
                  "label":t.name,
                  "value":t.id
                }
              })}
              style={dropStyles.dropDownPicker}
              labelStyle={dropStyles.dropDownPickerLabel}
              itemStyle={dropStyles.dropDownPickerItems}
              dropDownStyle={dropStyles.dropDownPickerBox}
              containerStyle={dropStyles.dropDownPickerContainer}
              placeholder="Selecione um tipo"
              placeholderStyle={dropStyles.dropDownPickerPlaceholder}
              onChangeItem={item => {setTypesId(item.value)}}
            />

            <Text style={styles.label}>
              Biografia:
            </Text>
            <TextInput
              placeholderTextColor="#c1bccc"
              multiline={true}
              onChangeText={text => {setBio(text)}}
              style={styles.input}
              placeholder="Digite uma biografia"
            />

            <Text style={styles.label}>
              Custo VIP:
            </Text>
            <TextInput
              placeholderTextColor="#c1bccc"
              onChangeText={text => {setCost(parseInt(text))}}
              style={styles.input}
              keyboardType="number-pad"
              placeholder="Custo do ingresso VIP"
            />

            <AvatarView>
              <ChooseAvatarContainer>
                <AvatarInputContainer>
                  <Text style={styles.label}>
                    Avatar:
                  </Text>
                  
                  <AvatarButtonContainer>
                    <AvatarButton onPress={handleImagePicker}>
                      <AvatarButtonText>{avatarImg.uri ? 'Padrão' : 'Escolher'}</AvatarButtonText>
                    </AvatarButton>
                  </AvatarButtonContainer>
                </AvatarInputContainer>

                {
                  avatarImg.uri 
                  ?
                  <AvatarPreview source={{ uri: avatarImg.uri }}/>
                  :
                    typeId != -1
                    ? 
                    <AvatarPreview source={{ uri: types.find(t => t.id == typeId)?.default_avatar }}/>
                    :
                    <AvatarPreviewInexistent>
                      <Icon name="camera" size={20} color="#E5E5E5"/>
                    </AvatarPreviewInexistent>
                }
              </ChooseAvatarContainer>
            </AvatarView>
            <View style={styles.buttonContainer}>
              <RectButton
                onPress={handleSubmitAmusement}
                style={styles.submitButton}
              >
                <Text style={styles.buttonText}>
                  Submit
                </Text>
              </RectButton>
            </View>
          </View>
        </ScrollView>
    </View>
  );
}

//yarn add react-native-dropdown-picker