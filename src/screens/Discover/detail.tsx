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

const Detail = ({route, navigation}: any) => {
  const [loading, setloading] = useState<any>(true);
  const [carData, setcarData] = useState<any>();
  const [bookLoading, setbookLoading] = useState<boolean>(false);
  let id = route.params;
  let email = route.params.email.email;
  console.log(email);

  useEffect(() => {
    fetch(`https://rent-car-api.onrender.com/api/car/${id.id}/`)
      .then(res => res.json())
      .then(data => {
        setcarData(data);
        setloading(false);
        console.log(data);
      });
  }, []);

  const makeOrder = () => {
    setbookLoading(true);
    axios
      .post('https://rent-car-api.onrender.com/api/order/create', {
        user: email,
        model: carData.model,
        name: carData.name,
      })
      .then(data => {
        console.log(data);
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
              <TouchableOpacity onPress={() => dispatch(addFavorite(id))}>
                <FontAwesomeIcon icon={faBookmark} size={20} />
              </TouchableOpacity>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Image
                style={{
                  width: 300,
                  height: 150,
                }}
                source={{
                  uri: 'https://s3-alpha-sig.figma.com/img/2aee/24b5/030568ec6280e68d5cd8c5b848c9376e?Expires=1679270400&Signature=Vbjho2c5WsR0CtNbZdG-nFVWd8vQCSj45h4jaI9PIxeBH-TZVAW1KUkeu3cAfiMjPDx2EDjHGlTgTXb9V6MniJHt-Poe598rStkPJUlODYal1Lp57XNpjEM6hB1FmjSBH1VI6cTvEtJlpMpaZoNKciUnWcyqvBvXx1J78O-MoWAWpq0tT59TmrXmMKEHxyYZVp3Ge5e01d~9T-1lpfsh71fs36KMUjTHQz02LLd5EVGcO098xaBL4arPQhHIOPXiiCtk9OTMZd61s4KMmhwdU7q4lb6oGzOTzMcchsfdUpReNCPJUxGjbE~bXyePBElardJz4syUJ3IUCe8PdsjKHw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
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
                  borderColor: 'red',
                  padding: 10,
                  marginRight: 5,
                  borderStartColor: '#94A1B2',
                }}>
                <Text style={{marginBottom: 5}}>Icon</Text>
                <Text>Max Power</Text>
                <Text>{carData.maxPower}</Text>
              </View>
              <View
                style={{
                  borderWidth: 1,
                  borderRadius: 20,
                  borderColor: 'red',
                  padding: 10,
                  marginRight: 5,
                  borderLeftColor: '#94A1B2',
                }}>
                <Text style={{marginBottom: 5}}>Icon</Text>
                <Text>Max Power</Text>
                <Text>320 hp</Text>
              </View>
              <View
                style={{
                  borderWidth: 1,
                  borderRadius: 20,
                  borderColor: 'red',
                  padding: 10,
                  marginRight: 5,
                  borderStartColor: '#94A1B2',
                }}>
                <Text style={{marginBottom: 5}}>Icon</Text>
                <Text>Max Power</Text>
                <Text>320 hp</Text>
              </View>
              <View
                style={{
                  borderWidth: 1,
                  borderRadius: 20,
                  borderColor: 'red',
                  padding: 10,
                  marginRight: 5,
                  borderStartColor: '#94A1B2',
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
                  <MaterialIndicator />
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
