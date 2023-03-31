import {StyleSheet, Text, View, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import CarCard from '../../components/CarCard';

const Index = ({navigation}: any) => {
  const dispatch = useDispatch();
  const favorites: any = useSelector<any>(state => state.favorite.favorites);
  // console.log(favorites);
  // let names: any = [];

  // favorites.map((elem: any) => {
  //   if (!names.includes(elem.name)) {
  //     names.push(elem.name);
  //   }
  // });

  // console.log(names);

  const renderitem = ({item}: any) => {
    return (
      <>
        <CarCard navigateTo={navigation} item={item} name={item.name} />
      </>
    );
  };

  return (
    <>
      <FlatList
        renderItem={renderitem}
        data={favorites}
        keyExtractor={(item, index) => index.toString()}
      />
    </>
  );
};

export default Index;

const styles = StyleSheet.create({});
