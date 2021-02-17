import { View, Text, Image, Alert } from 'react-native';
import React, { useCallback } from 'react';
import {useNavigation} from '@react-navigation/native';
import { RectButton, TouchableOpacity } from 'react-native-gesture-handler';

import { useAuth } from '../../hooks/auth';

import logoMascoteImg from '../../assets/Images/logo-com-mascote.png';

import styles from './styles'
import { LoginContainer, LoginButton, LoginButtonText, HelloContainer, HelloText, Avatar, LogoContainer, LogoImage } from './styled';

export default function Landing(){
  const {navigate} = useNavigation();
  const { user , signOut } = useAuth();
  
  // const user = {
  //   avatar_url: "https://avatars2.githubusercontent.com/u/66269430?s=460&u=8e27141ffbafda67ee7a03ea4034356f7f4f4c45&v=4",
  //   email: 'gustavocauzzi@gmail.com',
  //   id: '1',
  //   name: 'Gustavo',
  //   isAdmin: true,
  // };

  function handleAmusementList(){
    navigate("AmusementList");
  }
  
  function handleManagement(){
    navigate("ManagementTabs");
  }

  
  const handleNavigateToLogin = useCallback(() => {
    if(user){
      signOut();
      navigate("Landing");
    }else{
      navigate("Login")
    }
  }, [user]);
  
  const handleLogout = useCallback(() => {
    Alert.alert('Confirmar Log Out', 'Você deseja mesmo efetuar o LogOut de sua conta?', 
      [{
        text: "Cancel",
        onPress: () => {return},
        style: "cancel"
      },
      { 
        text: "OK",
        onPress: () => {handleNavigateToLogin()}
      }],
      {cancelable: false}
    )
  }, [handleNavigateToLogin]);
  
  return(
    <View style={styles.container}>
      {user 
        ?
        <TouchableOpacity onPress={handleLogout}>
          <Avatar source={{uri: user.avatar_url}} />
        </TouchableOpacity>

        :
        <LoginContainer>
          <LoginButton onPress={handleNavigateToLogin}>
              <LoginButtonText>
                Log In
              </LoginButtonText>
          </LoginButton>
        </LoginContainer>
      }
      
      {user &&
        <HelloContainer>
          <HelloText>
            Bem-vindo {user.name}
          </HelloText>
        </HelloContainer>
      }

      <LogoContainer>
        <LogoImage source={logoMascoteImg}></LogoImage>
      </LogoContainer>
      
      <View style={styles.footer}>
        <View style={styles.footerContent}>        
          <Text style={styles.textWelcome}>
            Seja bem-vindo!{'\n'}
            <Text style={styles.textWelcomeBold}>
              O que deseja fazer?
            </Text>
          </Text>

          <View style={styles.inputBlock}>
            <RectButton 
              style={[styles.button,styles.buttonPrimary]}
              onPress={handleAmusementList}
            >
              <Text style={[styles.textButton,styles.textButtonPrimary]}>
                Atrações
              </Text>
            </RectButton>
          </View>

          <View style={styles.inputBlock}>
            {
              user && user.isAdmin && 
              <RectButton 
                style={[styles.button,styles.buttonSecondary]}
                onPress={handleManagement}
              >
                <Text style={[styles.textButton,styles.textButtonSecondary]}>
                  Gerenciar
                </Text>
              </RectButton>
            }
          </View>
        </View>
      </View>
    </View>
  );
}