import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Colors from '../../Shared/Colors'
import { useNavigation } from '@react-navigation/native'

const HeadLineList = ({ newsList }) => {
    const navigation = useNavigation();

    return (
        <View>
            <FlatList
                data={newsList}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('read-news',{news:item})} style={{ marginTop: 15, display:'flex', flexDirection:'row' }}>
                        <Image source={{ uri: item.urlToImage }} style={{ width: 120, height: 120, borderRadius: 10 }} />
                        <View style={{marginRight:135, marginLeft:10}}>
                            <Text numberOfLines={4} style={{fontWeight:18, fontWeight:'bold'}}>{item.title}</Text>
                            <Text style={{color:Colors.primary, paddingTop:5}}>{item?.source?.name}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

export default HeadLineList