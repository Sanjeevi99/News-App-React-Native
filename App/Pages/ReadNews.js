import { View, Text, Image, Linking, Share } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import Colors from '../Shared/Colors'
import { Ionicons } from '@expo/vector-icons'
import { Feather } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler'

const ReadNews = () => {
    const news = useRoute().params.news;
    const navigation = useNavigation();

    useEffect(() => {
        // console.log(news);
    }, [])

    const ShareNews = () => {
        Share.share({
            message:news.title+"\nRead More"+news.description
        });

    }

    return (
        <View style={{ backgroundColor: 'white', flex: 1 }}>
            <View style={{ marginTop: 10, marginBottom: 10, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={ShareNews}>
                    <Feather name="share-2" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <Image source={{ uri: news.urlToImage }} style={{ height: 300, width: '100%', borderRadius: 15 }} />
            <Text style={{ marginTop: 10, fontSize: 22, fontWeight: 'bold' }}>{news.title}</Text>
            <Text style={{ marginTop: 10, color: Colors.primary, fontSize: 16 }}>{news.source.name}</Text>
            <Text style={{ marginTop: 10, fontSize: 16, color: Colors.gray, lineHeight: 25 }}>{news.description}</Text>
            <Text onPress={() => Linking.openURL(news.url)} style={{ marginTop: 10, color: Colors.primary, fontSize: 16, fontWeight: 'bold' }}>Read More</Text>
        </View>
    )
}

export default ReadNews