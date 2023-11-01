import { View, Text, StyleSheet, ScrollView, ActivityIndicator, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import CategoryTextSlide from '../Components/Home/CategoryTextSlide'
import Colors from '../Shared/Colors'
import { Ionicons } from '@expo/vector-icons'
import TopHeadLineSlide from '../Components/Home/TopHeadLineSlide'
import HeadLineList from '../Components/Home/HeadLineList'
import GlobalApi from '../Services/GlobalApi'

const Home = () => {

    const [newsList, setNewsList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // getTopHeadline();
        getNewsByCategory('latest');
    }, [])

    const getNewsByCategory = async (category) => {
        setLoading(true);
        const result = (await GlobalApi.getByCategory(category)).data;
        setNewsList(result.articles);
        setLoading(false);
    }
    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Text style={styles.name}>EngWin News</Text>
                <Ionicons name="notifications-outline" size={24} color="black" />
            </View>
            <CategoryTextSlide selectCategory={(category) => getNewsByCategory(category)} />
            {loading ? <ActivityIndicator style={{marginTop:Dimensions.get('screen').height*0.35}} size={'large'} color={Colors.primary} /> :
                <View>
                    <TopHeadLineSlide newsList={newsList} />
                    <HeadLineList newsList={newsList} />
                </View>
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.primary
    },
});

export default Home