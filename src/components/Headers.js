import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const Headers = ({ leftIcon,rightIcon, title, onLeftIconPress,onRightIconPress, value }) => {
 return (
    <View style={styles.header}>
        <View style={{flexDirection:"row", alignSelf:"center", alignItems:"center", justifyContent:"center"}}>
        <TouchableOpacity onPress={onLeftIconPress}>
        <Image style={styles.logo} source={leftIcon? leftIcon: require('../images/Shoe_Cart_logo.png')} />
        </TouchableOpacity>
        <Text style={styles.cart}>{title}</Text>
        </View>
        
   
      <TouchableOpacity onPress={onRightIconPress}>
      <View style={styles.cartView}>
          <Text style={styles.cart}>{value}</Text>
          <Image style={styles.cartImage} source={rightIcon? rightIcon: null} /> 
      </View>

      </TouchableOpacity>
    </View>
 );
};

const styles = StyleSheet.create({
 header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#009688',
 },
 logo: {
    // color: '#fff',
    // fontSize: 20,
    width:30,
    height:30,
    borderRadius:30
 },
 cartView: {
    flexDirection: 'column',
    alignItems: 'center',
 },
 cartImage: {
    width: 24,
    height: 24,
 },
 cart: {
    color: '#000',
    fontSize: 16,
    marginLeft: 4,
    fontWeight:"bold"
 },
});

export default Headers;