import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import CarCard from '../../components/CarCard';
// import data from '../../assets/data';

const Index = ({navigation, route}: any) => {
  const [carData, setCardata] = useState<any>();

  useEffect(() => {
    fetch('https://rent-car-api.onrender.com/api/car')
      .then(res => res.json())
      .then(data => setCardata(data));
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
      <FlatList
        renderItem={renderItem}
        keyExtractor={carData && carData.id}
        data={carData}
        key={carData && carData.id}
      />
    </>
  );
};

export default Index;

const styles = StyleSheet.create({});
