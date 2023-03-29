import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import CarCard from '../../components/CarCard';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const Index = ({navigation}: any) => {
  const [searchText, setsearchText] = useState<string>('');
  const [data, setdata] = useState<any>();
  const [isLoading, setisLoading] = useState<boolean>(true);

  const getData = () => {
    fetch(`https://rent-car-api.onrender.com/api/car/getobj/${searchText}`)
      .then(res => res.json())
      .then(datas => {
        setdata(datas);
        setisLoading(false);
      });
  };

  const renderitem = ({item}: any) => {
    return (
      <>
        <CarCard item={item} navigateTo={navigation} />
      </>
    );
  };

  return (
    <>
      {isLoading ? (
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <TextInput
            onChangeText={setsearchText}
            style={{
              height: 50,
              width: '90%',
              borderRadius: 30,
              margin: 12,
              borderWidth: 1,
              padding: 10,
            }}
          />
          <View>
            <TouchableOpacity onPress={() => getData()}>
              <FontAwesomeIcon icon={faSearch} size={24} />
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View>
          <FlatList data={data} renderItem={renderitem} />
        </View>
      )}
    </>
  );
};

export default Index;

const styles = StyleSheet.create({});
