import { View, Text, Image, FlatList, StyleSheet, Pressable, TouchableOpacity, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import Loader from '../common/Loader'
import Headers from '../components/Headers'
import product from '../data/products'
import { useNavigation } from '@react-navigation/native'

const Home = () => {
    const navigation = useNavigation();

    const renderItem = ({ item }) => ( 
        <SafeAreaView style={{ flex: 1 }}>
        <TouchableOpacity onPress={()=> 
            {navigation.navigate('ProductsList', {data:item})}}>
            <View style={styles.product}>
            <Image style={styles.productImage} source={{ uri: item.image }} />
             </View> 
             <View style={styles.productName}>
             <Text>40% 0ff check now</Text>     
            </View>           
        </TouchableOpacity >  
        </SafeAreaView>   
       );

return (
    <>
        <Headers title={'Shoe Cart'} onLeftIconPress={()=>navigation.navigate('ProductManagement')}/>
        <View style={styles.container}>
            <FlatList
                data={product}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                numColumns={2}
            />
        </View>
    </>
) 
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 0,
    },
    product: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        width: "100%",
        aspectRatio: 1
    },
    productImage: {
        width: "100%",
        aspectRatio: 1,
        marginRight: 10,
        resizeMode: 'contain',
    },
    productName: {
        fontSize: 18,
        color: '#333',
        flexDirection: 'row',
        alignSelf:"center"
    },
    
})