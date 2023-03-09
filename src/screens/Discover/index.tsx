import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CarCard from '../../components/CarCard';
import data from '../../assets/data';
const Index = () => {
  const renderItem = ({item}: any) => {
    return (
      <>
        <CarCard name={item.name} id={item.id} />
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
