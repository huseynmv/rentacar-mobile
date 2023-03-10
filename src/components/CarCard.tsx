import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface CardProps {
  id: string;
  name: string;
}

const CarCard = ({id, name}: CardProps) => {
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity>
          <View style={styles.imgContainer}>
            <Image
              style={styles.img}
              source={{
                uri: 'https://s3-alpha-sig.figma.com/img/2aee/24b5/030568ec6280e68d5cd8c5b848c9376e?Expires=1679270400&Signature=Vbjho2c5WsR0CtNbZdG-nFVWd8vQCSj45h4jaI9PIxeBH-TZVAW1KUkeu3cAfiMjPDx2EDjHGlTgTXb9V6MniJHt-Poe598rStkPJUlODYal1Lp57XNpjEM6hB1FmjSBH1VI6cTvEtJlpMpaZoNKciUnWcyqvBvXx1J78O-MoWAWpq0tT59TmrXmMKEHxyYZVp3Ge5e01d~9T-1lpfsh71fs36KMUjTHQz02LLd5EVGcO098xaBL4arPQhHIOPXiiCtk9OTMZd61s4KMmhwdU7q4lb6oGzOTzMcchsfdUpReNCPJUxGjbE~bXyePBElardJz4syUJ3IUCe8PdsjKHw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
              }}
            />
          </View>
          <Text
            style={{
              fontSize: 22,
              fontWeight: '600',
              paddingLeft: 20,
              fontFamily: 'inter',
            }}>
            {name}
          </Text>
          {/* <Text>{id}</Text> */}
          <View
            style={{
              flexDirection: 'row',
              paddingLeft: 20,
              alignItems: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                // justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icon name="home" size={24} />
              <Text style={{fontSize: 16, fontWeight: '400'}}>A/T</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                // justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icon name="home" size={24} />
              <Text style={{fontSize: 16, fontWeight: '400'}}>5</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                // justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icon name="home" size={24} />
              <Text style={{fontSize: 16, fontWeight: '400'}}>4</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                // justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icon name="home" size={24} />
              <Text style={{fontSize: 16, fontWeight: '400'}}>A/C</Text>
            </View>
          </View>
          <View
            style={{
              paddingLeft: 20,
              backgroundColor: '#EAECF0',
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon name="home" size={24} />
              <Text style={{fontSize: 14, fontWeight: '400'}}>
                Instant confirmation
              </Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon name="home" size={24} />
              <Text style={{fontSize: 14, fontWeight: '400'}}>
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
