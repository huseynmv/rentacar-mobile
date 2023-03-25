import {StyleSheet, Text, View, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import CarCard from '../../components/CarCard';

const Index = ({navigation}: any) => {
  const dispatch = useDispatch();
  const favorites: any = useSelector<any>(state => state.favorite.favorites);
  console.log(favorites);

  const [carData, setcarData] = useState<any>();
  useEffect(() => {
    fetch(`https://rent-car-api.onrender.com/api/car/${favorites[0].id}`)
      .then(res => res.json())
      .then(data => {
        setcarData(data);
        console.log(carData);
      });
  }, []);

  const renderitem = ({item}: any) => {
    return (
      <>
        <CarCard navigateTo={navigation} item={item} />
      </>
    );
  };

  return (
    <>
      <FlatList renderItem={renderitem} data={carData} />
    </>
  );
};

export default Index;

const styles = StyleSheet.create({});
