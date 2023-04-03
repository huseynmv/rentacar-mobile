import {StyleSheet, Text, View, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import CarCard from '../../components/CarCard';

const Index = ({navigation}: any) => {
  const dispatch = useDispatch();
  const favorites: any = useSelector<any>(state => state.favorite.favorites);

  const renderitem = ({item}: any) => {
    console.log(item);

    return (
      <>
        <CarCard navigateTo={navigation} item={item} name={item.name} />
      </>
    );
  };

  return (
    <>
      {favorites.length > 0 ? (
        <FlatList
          renderItem={renderitem}
          data={favorites}
          keyExtractor={(item, index) => index.toString()}
        />
      ) : (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 26, opacity: 0.7}}>
            Favorites appear here
          </Text>
        </View>
      )}
    </>
  );
};

export default Index;

const styles = StyleSheet.create({});
