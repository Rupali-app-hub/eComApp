import {
  StyleSheet,
  View,
  Image,
  FlatList,
  useWindowDimensions,
  Text,
  ScrollView,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import products from '../data/products';
import { useSelector, useDispatch } from 'react-redux';
import Headers from '../components/Headers';
import { useNavigation, useRoute } from '@react-navigation/native';
import CustomButton from '../common/CustomButton';
import { addToCart, decrementQuantity, incrementQuantity, removeFromCart } from '../redux/slices/cartSlice';

const ProductsList = ({}) => {
  const { width } = useWindowDimensions();
  const navigation = useNavigation();
  const route = useRoute();
  const item = route.params.data  
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  
  const addItemToCart = (item) => {
    dispatch(addToCart(item));
  };
  const removeItemFromCart = (item) => {
    dispatch(removeFromCart(item));
  };
  const totalItemsInCart = cart.reduce((total, item) => total + item.quantity, 0);
  const navigateToCartDetails = () => {
    navigation.navigate('CartDetailsScreen');
  };

  return (
    <View>
      <ScrollView>
      <Headers leftIcon={require('../images/back.png')} rightIcon={require('../images/cart.png')} title= {'Product details'} onLeftIconPress={()=> navigation.goBack()} 
       onRightIconPress={navigateToCartDetails}
      value={totalItemsInCart} />
        {/* Image Carousel */}
        <FlatList
          data={item.images || [] }
          renderItem={({ item }) => (
            <Image source={{ uri: item || ''}} style={{ width, aspectRatio: 1 }} />
          )}
          horizontal
          showsHorizontalScrollIndicator={true}
          pagingEnabled
        />
        <View style={{ padding: 20 }}>
          {/* Title */}
          <Text style={styles.title}>{item.name}</Text>

          {/* Price */}
          <Text style={styles.price}>${item.price}</Text>

          {/* Description */}
          <Text style={styles.description}>{item.description}</Text>
        </View>
      </ScrollView>

      {/* Add to cart button */}
      {cart.some((value) => value.id == item.id) ? (<Pressable onPress={()=>removeItemFromCart(item)} style={styles.button}>
        <Text style={styles.buttonText}>Remove from cart</Text>
      </Pressable>):( <Pressable onPress={()=>addItemToCart(item)} style={styles.button}>
        <Text style={styles.buttonText}>Add to cart</Text>
      </Pressable>)}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 34,
    fontWeight: '600',
    marginVertical: 10,
  },
  price: {
    fontWeight: '500',
    fontSize: 16,
    letterSpacing: 1.5,
    color:'#32a852',
    fontWeight:"bold"
  },
  description: {
    marginVertical: 10,
    fontSize: 18,
    lineHeight: 30,
    fontWeight: '300',
  },

  button: {
    position: 'absolute',
    backgroundColor: 'black',
    bottom: 30,
    width: '50%',
    alignSelf: 'center',
    padding: 20,
    borderRadius: 100,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 16,
  },
});

export default ProductsList;