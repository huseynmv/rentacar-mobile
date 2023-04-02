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
import {useDispatch} from 'react-redux';
import {addFavorite} from '../../features/favoriteSlice';
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
  let id = route.params;
  // let email = route.params.email.email;

  useEffect(() => {
    fetch(`https://rent-car-api.onrender.com/api/car/${id.id}/`)
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
                {carData.name}
              </Text>
              <TouchableOpacity
                onPress={() => {
                  dispatch(addFavorite({id: id, name: carData.name}));
                  setcolor('#2CB67D');
                }}>
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
                  uri: 'https://s3-alpha-sig.figma.com/img/2aee/24b5/030568ec6280e68d5cd8c5b848c9376e?Expires=1681084800&Signature=CUsa5OwD~n0DgCA9pg3Iajmlq8zB9UyfZDA4~4EaFPyxrO1Lpj0ajCKpTi6lXUn5a2TwbxFRkg3z-N42i2EIVynfHJACLYC07M-hkCFk8IL0keT7PcyGp~azbmFSMLxcuheLGJ56uonLeBr~rFDG-wrGjQpVW0Iqgh9LDTDDqXg2T7hNXday3UV3oWVyezcxoKdO8q8EV5qTfGyYWIAakOGVjkWXXu5PQZXBOMwe6tUVrIZW7DzzCayIsFXS4CBXVKhjwTSSRvErqkkLUNBwmNz75ptZemwEkl06btiX8zF7GygZyQRombXVvVSQ6-5eyD4gtd~FPm~gpCT~Yxh-ww__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
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
                <Text>Max Power</Text>
                <Text>320 hp</Text>
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
                <Text>Max Power</Text>
                <Text>320 hp</Text>
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
                <Text>Max Power</Text>
                <Text>320 hp</Text>
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
                  2 Passengers
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
