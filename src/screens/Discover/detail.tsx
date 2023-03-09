import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {Fragment} from 'react';

const Detail = () => {
  return (
    <View style={{flex: 2}}>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 20,
          }}>
          <Text>AYGO</Text>
          <TouchableOpacity>
            <Text>Favs</Text>
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
        <Text>Specifications</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View
            style={{
              borderWidth: 1,
              borderRadius: 20,
              borderColor: 'red',
              padding: 10,
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
            }}>
            <Text style={{marginBottom: 5}}>Icon</Text>
            <Text>Max Power</Text>
            <Text>320 hp</Text>
          </View>
        </View>
        <Text>Car Features</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View>
            <Text>2 Passengers</Text>
            <Text>Show tires</Text>
            <Text>Bluetooth</Text>
          </View>
          <View>
            <Text>2 Passengers</Text>
            <Text>Show tires</Text>
            <Text>Bluetooth</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          backgroundColor: 'green',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View>
          <Text>Price</Text>
          <Text>$250 / Day</Text>
        </View>
        <View>
          <TouchableOpacity>
            <Text>Book Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({});
