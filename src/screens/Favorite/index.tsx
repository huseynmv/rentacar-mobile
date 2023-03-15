import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

const Index = () => {
  const dispatch = useDispatch();
  const favorites: any = useSelector<any>(state => state.favorite.favorites);
  console.log(favorites);

  const renderitem = ({item}: any) => {
    return (
      <>
        <Text>{item.id}</Text>
      </>
    );
  };

  return (
    <>
      <FlatList renderItem={renderitem} data={favorites} />
    </>
  );
};

export default Index;

const styles = StyleSheet.create({});
