import {StyleSheet, Text, View, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import CarCard from '../../components/CarCard';

const Index = ({navigation}: any) => {
  const dispatch = useDispatch();
  const favorites: any = useSelector<any>(state => state.favorite.favorites);

  const renderitem = ({item}: any) => {
    return (
      <>
        <CarCard navigateTo={navigation} item={item} name={item.name} />
      </>
    );
  };

  return (
    <>
      <View style={{position: 'relative', flex: 1}}>
        <Text style={{flex: 1}}>Favorites appear here</Text>
      </View>

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
