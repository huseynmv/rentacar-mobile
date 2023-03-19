import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';

const Index = () => {
  const [searchText, setsearchText] = useState<string>('');
  const [data, setdata] = useState<any>();
  const [isLoading, setisLoading] = useState<boolean>(true);

  const getData = () => {
    fetch(`https://rent-a-car-api.onrender.com/api/car/getobj/${searchText}`)
      .then(res => res.json())
      .then(datas => {
        setdata(datas);
        setisLoading(false);
      });
  };

  const renderitem = ({item}: any) => {
    return (
      <>
        <Text>{item.name}</Text>
      </>
    );
  };

  return (
    <>
      {isLoading ? (
        <View>
          <TextInput
            onChangeText={setsearchText}
            style={{
              height: 50,
              width: 300,
              margin: 12,
              borderWidth: 1,
              padding: 10,
            }}
          />
          <Button title="search" onPress={() => getData()}></Button>
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
