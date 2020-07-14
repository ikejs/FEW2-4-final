import React from 'react';
import { SafeAreaView, FlatList, View, Text } from 'react-native';

import bands from '../../assets/bands';
import styles from './styles';
import Band from './band';


function Bands() {  

  const renderItem = ({ item }) => (
    <Band {...item} />
  );

  return (
    <View style={styles.view}>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={bands}
          renderItem={renderItem}
          keyExtractor={band => band.ID}
        />
      </SafeAreaView>
    </View>
  );

}

export default Bands;