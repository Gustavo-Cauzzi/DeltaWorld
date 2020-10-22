import React, { useCallback, useRef } from 'react';
import { Form } from '@unform/mobile';

import { 
  Container,
  Title,
  SubTitle,
  FormContainer,
  BackButtonContainer,
  BackButton,
  SubmitButton,
  SubmitButtonText,
  CreateAccountText,
  CreateAccountContainer,
} from './styles';
import { FormHandles } from '@unform/core';
import Input from '../../components/Input';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../hooks/auth';

interface IFormData{
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { goBack } = useNavigation();
  const { signIn } = useAuth();

  const handleSubimt = useCallback(({email, password}: IFormData) => {
    if(email == 'gustavocauzzi@gmail.com' && password=="123123"){
      signIn({email, password});

      goBack();
    }
  }, [signIn]);

  return (
    <Container>
      <BackButtonContainer>
        <BackButton onPress={() => {goBack()}}>
          <Icon name="arrow-right" size={25} color="#FFF"/>
        </BackButton>
      </BackButtonContainer>


      <FormContainer>
        <Title>Faça seu Login</Title>
        <SubTitle>E aproveite o máximo do nosso parque</SubTitle>

        <Form ref={formRef} onSubmit={handleSubimt}>
          <Input
            name="email"
            placeholder="E-mail"
            icon='mail'
          />

          <Input
            secureTextEntry
            name="password"
            placeholder="Senha"
            icon='lock'
          />

          <SubmitButton
            onPress={() => {
              formRef.current?.submitForm();
            }}
          >
            <SubmitButtonText>
              Logar
            </SubmitButtonText>
          </SubmitButton>
        </Form>
      </FormContainer>

      <CreateAccountContainer>
        <CreateAccountText>Crie sua conta</CreateAccountText>
      </CreateAccountContainer>
    </Container>
  );
};

export default Login;
