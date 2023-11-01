import { View, Text, FlatList, TouchableOpacity, Image, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../Services/GlobalApi'
import Colors from '../../Shared/Colors';
import { useNavigation } from '@react-navigation/native';

const TopHeadLineSlide = ({newsList}) => {

    const navigation = useNavigation();

  return (
    <View style={{marginTop:20}}>
      <FlatList 
      data={newsList}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({item}) => (
        <TouchableOpacity onPress={()=>navigation.navigate('read-news',{news:item})}
        style={{width:Dimensions.get('screen').width*0.80}}
        >
            <Image source={{uri:item.urlToImage}} style={{height:Dimensions.get('screen').width*0.77, borderRadius:10, marginRight:15}} />
            <Text numberOfLines={3} style={{marginTop:10, fontSize:20, fontWeight:'bold'}}>{item.title}</Text>
            <Text style={{marginTop:7, color:Colors.primary}}>{item?.source?.name}</Text>
        </TouchableOpacity>
  )}
      />
    </View>
  )
}

export default TopHeadLineSlide