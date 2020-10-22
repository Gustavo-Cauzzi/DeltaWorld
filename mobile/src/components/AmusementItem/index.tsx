import React, { useState } from 'react';
import {View, Image, Text, Linking} from 'react-native';

import styles from './styles';

export interface iAmusement{
  id: number,
  name: string,
  default_avatar: string,
  type_name: string,
  avatar: string,
  type_id: number,
  bio: string,
  cost: number
};


interface AmusementItemProps{
  amusement : iAmusement
};

const AmusementItem: React.FC<AmusementItemProps> = (amusement) => {
  const a = amusement.amusement;

  return(
    <View style={styles.container}>
      <View style={styles.profile}>
        {a.avatar != "" 
              ? console.log(a.avatar)
              : console.log(a.default_avatar)
            }
        <Image
            style={styles.avatar}
            source={{
            uri: 
              a.avatar
              ? a.avatar
              : a.default_avatar
          }}
        />
          <View style={styles.profileInfo}>
            <Text style={styles.name}> 
              {a.name}
            </Text>

            <Text style={styles.subject}>
              {a.type_name}  
            </Text>
          </View>
      </View>   

      <Text style={styles.bio}>
          {a.bio}
      </Text>  

      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço VIP: {" "}
          <Text style={styles.price}>R$ {a.cost}</Text>
        </Text>
      </View>
    </View>
  );
}

export default AmusementItem;