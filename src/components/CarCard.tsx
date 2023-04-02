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
                uri: 'https://s3-alpha-sig.figma.com/img/2aee/24b5/030568ec6280e68d5cd8c5b848c9376e?Expires=1681084800&Signature=CUsa5OwD~n0DgCA9pg3Iajmlq8zB9UyfZDA4~4EaFPyxrO1Lpj0ajCKpTi6lXUn5a2TwbxFRkg3z-N42i2EIVynfHJACLYC07M-hkCFk8IL0keT7PcyGp~azbmFSMLxcuheLGJ56uonLeBr~rFDG-wrGjQpVW0Iqgh9LDTDDqXg2T7hNXday3UV3oWVyezcxoKdO8q8EV5qTfGyYWIAakOGVjkWXXu5PQZXBOMwe6tUVrIZW7DzzCayIsFXS4CBXVKhjwTSSRvErqkkLUNBwmNz75ptZemwEkl06btiX8zF7GygZyQRombXVvVSQ6-5eyD4gtd~FPm~gpCT~Yxh-ww__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
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
                A/T
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
                5
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
                4
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
