import React from 'react';
import { View, Text, FlatList, StyleSheet, Pressable, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, incrementQuantity, decrementQuantity } from '../redux/slices/cartSlice';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Headers from '../components/Headers';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../common/CustomButton';

const CardsList = () => {
    const navigation = useNavigation()
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const increaseQuantity = (item) => {
    dispatch(incrementQuantity(item));
  };

  const decreaseQuantity = (item) => {
    if (item.quantity === 1) {
      dispatch(removeFromCart(item));
    } else {
      dispatch(decrementQuantity(item));
    }
  };

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <SafeAreaView style={{flex:1}}>
     <Headers title={'My Cart'} leftIcon={require('../images/back.png')} onLeftIconPress={()=>{navigation.goBack()}}/>
    <View style={styles.container}>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text>Quantity: {item.quantity}</Text>
            <View style={styles.quantityContainer}>
              <Pressable style={styles.iconContainer} onPress={() => decreaseQuantity(item)}>
                <Image source={require('../images/minus.png')} style={{width:10, height:10}}  />
              </Pressable>
              <Pressable style={styles.iconContainer} onPress={() => increaseQuantity(item)}>
              <Image source={require('../images/add.png')} style={{width:10, height:10}} />
              </Pressable>
            </View>
            <Text style={styles.itemPrice}>Price: ${item.price * item.quantity}</Text>
          </View>
        )}
      />
      <Text style={styles.totalPrice}>Total Price: ${totalPrice}</Text>
      <CustomButton title={'Check Out'} onPress={()=>{} } bgColor={'#32a852'}/>
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  itemContainer: {
    marginBottom: 16,
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  iconContainer: {
    padding: 8,
    borderRadius: 4,
    backgroundColor: '#e0e0e0',
    marginHorizontal: 4,
  },
  itemPrice: {
    marginTop: 8,
    fontSize: 14,
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    justifyContent:"center",
    alignSelf:"center"
  },
});

export default CardsList;
