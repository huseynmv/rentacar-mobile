import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CarCard from '../../components/CarCard';
import data from '../../assets/data';
const Index = ({navigation}: any) => {
  const renderItem = ({item}: any) => {
    return (
      <>
        <CarCard name={item.name} id={item.id} navigateTo={navigation} />
      </>
    );
  };

  return (
    <>
      <FlatList renderItem={renderItem} data={data} />
    </>
  );
};

export default Index;

const styles = StyleSheet.create({});
