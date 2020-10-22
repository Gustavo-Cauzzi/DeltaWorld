import React, { ReactNode, useCallback } from 'react';
import { View, Image, Text } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';
import backIcon from '../../assets/Images/icons/back.png';
import styles from './styles';
import { useAuth } from '../../hooks/auth';

import { Avatar } from './styled';

interface PageHeaderProps{
  title: string;
  headerRight?: ReactNode;
}

const PageHeader : React.FC<PageHeaderProps> = ({title, headerRight, children}) => {
  const { navigate } = useNavigation();
  const { user } = useAuth();

  const handleGoBack = useCallback(() => {
    navigate('Landing');
  }, []);

  return (
  <View style={styles.container}> 
    <View style={styles.topBar}>
      <BorderlessButton onPress={handleGoBack}>
        <Image source={backIcon} ></Image>
      </BorderlessButton>
      {user 
        ?
        <Avatar source={{uri: user.avatar_url}} />

        :
        <View style={styles.topRightBar}>
          <MaterialCommunityIcons name="delta" size={30} color="#FFF"/>
        </View>
      }
    </View>

    <View style={styles.headerRight}>
      <Text style={styles.title}>
        {title}
      </Text>
      {headerRight}
    </View>

    {children}
  </View>
  );
}

export default PageHeader;