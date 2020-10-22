import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import styles from './styles';
import PageHeader from '../../components/PageHeader';
import RollerCoasterItem, { iAmusement } from '../../components/AmusementItem';
import api from '../../services/api';
import AmusementItem from '../../components/AmusementItem';

export default function RollerCoasterList(){

  const [amusements, setAmusements] = useState([]);
  useEffect(() => {
    api.get('/amusements').then(res => {
      setAmusements(res.data);
    })
  }, []);

  return(
    <View style={styles.container}>
        <PageHeader
          title="Lista de Diversões"
        />
      <ScrollView>
        {amusements.map((amusement: iAmusement) =>{
          return(
            <AmusementItem
              amusement={amusement}
              key={amusement.id}
            />
          )
        })}
      </ScrollView>
    </View>
  );
}