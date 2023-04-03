import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import React, {Fragment, useEffect, useState, useLayoutEffect} from 'react';
import {faBookmark, faBookBookmark} from '@fortawesome/free-solid-svg-icons';
// import {Icon} from 'react-native-vector-icons/Icon';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useDispatch, useSelector} from 'react-redux';
import {addFavorite, removeFavorite} from '../../features/favoriteSlice';
import {DotIndicator, MaterialIndicator} from 'react-native-indicators';
import {
  getFocusedRouteNameFromRoute,
  useNavigation,
} from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Detail = ({route, navigation}: any) => {
  const [loading, setloading] = useState<any>(true);
  const [carData, setcarData] = useState<any>();
  const [bookLoading, setbookLoading] = useState<boolean>(false);
  const [color, setcolor] = useState('black');
  let carId = route.params;
  // console.log(id);

  // let email = route.params.email.email;

  const favorites: any = useSelector<any>(state => state.favorite.favorites);
  console.log(favorites);

  const isFavorite: any = favorites.some(
    (favorite: {id: any}) => favorite.id == favorites.id,
  );

  const handlePress = () => {
    if (isFavorite) {
      dispatch(removeFavorite({id: carId}));
    } else {
      dispatch(addFavorite({id: carId, name: carData.name, img: carData.img}));
    }
  };

  useEffect(() => {
    fetch(`https://rent-car-api.onrender.com/api/car/${carId.id}/`)
      .then(res => res.json())
      .then(data => {
        setcarData(data);
        setloading(false);
      });
  }, []);

  const makeOrder = async () => {
    setbookLoading(true);
    await axios
      .post('https://rent-car-api.onrender.com/api/order/create', {
        user: await AsyncStorage.getItem('userEmail'),
        model: carData.model,
        name: carData.name,
      })
      .then(data => {
        setbookLoading(false);
      });
  };
  const dispatch = useDispatch();

  return (
    <>
      {loading ? (
        <View style={{flex: 1}}>
          <DotIndicator size={24} color="#2CB67D" />
        </View>
      ) : (
        <View style={{flex: 2}}>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: 20,
              }}>
              <Text style={{fontSize: 20, fontWeight: '500'}}>
                {carData.model}
              </Text>

              <TouchableOpacity onPress={handlePress}>
                <FontAwesomeIcon
                  icon={faBookmark}
                  style={{color: color}}
                  size={20}
                />
              </TouchableOpacity>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Image
                style={{
                  width: 300,
                  height: 150,
                }}
                source={{
                  uri: carData.img,
                }}
              />
            </View>
          </View>
          <View style={{flex: 1}}>
            <Text style={{padding: 20, fontSize: 16, fontWeight: '500'}}>
              Specifications
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: 20,
              }}>
              <View
                style={{
                  borderWidth: 1,
                  borderRadius: 20,
                  borderColor: '#94A1B2',
                  padding: 10,
                  marginRight: 5,
                }}>
                <Text style={{marginBottom: 5}}>Icon</Text>
                <Text>Max Power</Text>
                <Text>{carData.maxPower}</Text>
              </View>
              <View
                style={{
                  borderWidth: 1,
                  borderRadius: 20,
                  borderColor: '#94A1B2',
                  padding: 10,
                  marginRight: 5,
                }}>
                <Text style={{marginBottom: 5}}>Icon</Text>
                <Text>Max distan</Text>
                <Text>{carData.fuel}</Text>
              </View>
              <View
                style={{
                  borderWidth: 1,
                  borderRadius: 20,
                  borderColor: '#94A1B2',
                  padding: 10,
                  marginRight: 5,
                }}>
                <Text style={{marginBottom: 5}}>Icon</Text>
                <Text>0-60 mph/h</Text>
                <Text>{carData.sec}</Text>
              </View>
              <View
                style={{
                  borderWidth: 1,
                  borderRadius: 20,
                  borderColor: '#94A1B2',
                  padding: 10,
                  marginRight: 5,
                }}>
                <Text style={{marginBottom: 5}}>Icon</Text>
                <Text>Max speed</Text>
                <Text>{carData.maxSpeed}</Text>
              </View>
            </View>
            <Text style={{padding: 20, fontSize: 16, fontWeight: '500'}}>
              Car Features
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View>
                <Text
                  style={{
                    paddingHorizontal: 20,
                    paddingVertical: 5,
                    fontSize: 16,
                    fontWeight: '400',
                  }}>
                  {carData.passengerCount} Passengers
                </Text>
                <Text
                  style={{
                    paddingHorizontal: 20,
                    paddingVertical: 5,
                    fontSize: 16,
                    fontWeight: '400',
                  }}>
                  Show tires
                </Text>
                <Text
                  style={{
                    paddingHorizontal: 20,
                    paddingVertical: 5,
                    fontSize: 16,
                    fontWeight: '400',
                  }}>
                  Bluetooth
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    paddingHorizontal: 20,
                    paddingVertical: 5,
                    fontSize: 16,
                    fontWeight: '400',
                  }}>
                  {carData.doorCount} Door count
                </Text>
                <Text
                  style={{
                    paddingHorizontal: 20,
                    paddingVertical: 5,
                    fontSize: 16,
                    fontWeight: '400',
                  }}>
                  Show tires
                </Text>
                <Text
                  style={{
                    paddingHorizontal: 20,
                    paddingVertical: 5,
                    fontSize: 16,
                    fontWeight: '400',
                  }}>
                  Bluetooth
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              backgroundColor: '#16161A',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View style={{padding: 20}}>
              <Text style={{fontSize: 16, fontWeight: '500', color: '#94A1B2'}}>
                Price
              </Text>
              <Text style={{fontSize: 16, fontWeight: '500', color: '#ffffff'}}>
                {carData.price} / Day
              </Text>
            </View>
            <View style={{marginRight: 20}}>
              {bookLoading ? (
                <TouchableOpacity
                  style={{
                    backgroundColor: '#2CB67D',
                    borderRadius: 20,
                    opacity: 0.7,
                  }}>
                  <MaterialIndicator style={{backgroundColor: 'white'}} />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => {
                    makeOrder();
                    navigation.navigate('Confirm');
                  }}
                  style={{backgroundColor: '#2CB67D', borderRadius: 20}}>
                  <Text
                    style={{
                      padding: 20,
                      fontSize: 16,
                      fontWeight: '500',
                      color: '#ffffff',
                    }}>
                    Book Now
                  </Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>
      )}
    </>
  );
};

export default Detail;

const styles = StyleSheet.create({});
