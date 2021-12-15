import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const IndexScreen = ({navigation}) => {
  const { state, deleteBlogPost } = useContext(Context);

  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={blogPost => blogPost.title}
        renderItem={({ item }) => {
          return <TouchableOpacity onPress= {() => navigation.navigate("Show", { id:item.id })}>
           <View style= {styles.row}>
          <Text style = { styles.title }>{item.title} - {item.id}</Text>
          <TouchableOpacity onPress= {() => deleteBlogPost(item.id)}>
          <Entypo name="trash" style= {styles.icon} color="black" />
          </TouchableOpacity>
          </View>
          </TouchableOpacity>
        }}
      />
    </View>
  );
};

IndexScreen.navigationOptions = ({navigation}) => {
  return {
    headerRight : () => <TouchableOpacity  onPress = {() => navigation.navigate("Create") }>
    <AntDesign style={{marginRight:20}}  name="plussquareo" size={24} color="black" />
    </TouchableOpacity>
  };
};

const styles = StyleSheet.create({
  row:{
    flexDirection:"row",
    justifyContent: "space-between",
    paddingVertical:20,
    borderTopWidth:2,
    borderColor: "gray",
    paddingHorizontal: 12
  },
  title:{
    fontSize:18
  },
  icon:{
    fontSize:24
  }
});

export default IndexScreen;
