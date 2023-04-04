import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import CarCard from '../../components/CarCard';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {DotIndicator} from 'react-native-indicators';
// import data from '../../assets/data';

const Index = ({navigation, route}: any) => {
  const [carData, setCardata] = useState<any>();
  const [loading, setloading] = useState(true);

  useEffect(() => {
    fetch('https://rent-car-api.onrender.com/api/car')
      .then(res => res.json())
      .then(data => {
        setCardata(data);
        console.log('got data');

        setloading(false);
      });
  }, []);

  const renderItem = ({item}: any) => {
    return (
      <>
        <CarCard navigateTo={navigation} item={item} name={item.name} />
      </>
    );
  };

  return (
    <>
      {loading ? (
        <DotIndicator color="#2CB67D" />
      ) : (
        <FlatList
          style={{marginTop: 15}}
          renderItem={renderItem}
          keyExtractor={carData && carData.id}
          data={carData}
          key={carData && carData.id}
          inverted={false}
        />
      )}
    </>
  );
};

export default Index;

const styles = StyleSheet.create({});
