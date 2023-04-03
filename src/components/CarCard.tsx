import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faCheck,
  faGear,
  faPersonShelter,
  faDoorOpen,
  faSun,
} from '@fortawesome/free-solid-svg-icons';
import {useDispatch, useSelector} from 'react-redux';
import {addFavorite, removeFavorite} from '../features/favoriteSlice';

interface CardProps {
  navigateTo: any;
  item: any;
  name: any;
}

const CarCard = ({navigateTo, item, name}: CardProps) => {
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => navigateTo.navigate('DiscoverDetail', {id: item._id})}>
          <View style={styles.imgContainer}>
            <Image
              style={styles.img}
              source={{
                uri: item.img,
              }}
            />
          </View>
          <Text
            style={{
              fontSize: 22,
              fontWeight: '600',
              paddingLeft: 20,
              fontFamily: 'inter',
              marginVertical: 10,
            }}>
            {name}
          </Text>
          {/* <Text>{id}</Text> */}
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: 20,
              alignItems: 'center',
              marginBottom: 10,
            }}>
            <View
              style={{
                flexDirection: 'row',
                // paddingHorizontal: 10,
                // justifyContent: 'center',
                alignItems: 'center',
              }}>
              <FontAwesomeIcon icon={faGear} size={20} color="gray" />
              <Text
                style={{fontSize: 16, fontWeight: '400', paddingHorizontal: 5}}>
                {item.type}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                // justifyContent: 'center',
                paddingHorizontal: 10,

                alignItems: 'center',
              }}>
              <FontAwesomeIcon icon={faPersonShelter} size={20} color="gray" />
              <Text
                style={{fontSize: 16, fontWeight: '400', paddingHorizontal: 5}}>
                {item.passengerCount}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                // justifyContent: 'center',
                paddingHorizontal: 10,

                alignItems: 'center',
              }}>
              <FontAwesomeIcon icon={faDoorOpen} size={20} color="gray" />
              <Text
                style={{fontSize: 16, fontWeight: '400', paddingHorizontal: 5}}>
                {item.doorCount}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                // justifyContent: 'center',
                paddingHorizontal: 10,

                alignItems: 'center',
              }}>
              <FontAwesomeIcon icon={faSun} size={20} color="gray" />
              <Text
                style={{fontSize: 16, fontWeight: '400', paddingHorizontal: 5}}>
                A/C
              </Text>
            </View>
          </View>
          <View
            style={{
              paddingLeft: 20,
              backgroundColor: '#EAECF0',
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
              paddingVertical: 10,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <FontAwesomeIcon icon={faCheck} size={20} color="#2CB67D" />
              <Text
                style={{fontSize: 14, fontWeight: '400', paddingHorizontal: 5}}>
                Instant confirmation
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingTop: 5,
              }}>
              <FontAwesomeIcon icon={faCheck} size={20} color="#2CB67D" />
              <Text
                style={{fontSize: 14, fontWeight: '400', paddingHorizontal: 5}}>
                Free cancellation
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default CarCard;

const styles = StyleSheet.create({
  container: {
    // paddingVertical: 20,
    marginHorizontal: 20,
    marginVertical: 10,
    // marginTop: 10,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#E2E2E2',
    // backgroundColor: 'red',
  },
  img: {
    width: 300,
    height: 150,
  },
  imgContainer: {
    borderRadius: 20,

    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F6F8',
  },
});
