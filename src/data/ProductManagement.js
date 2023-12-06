import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import product from './products'
import CustomButton from '../common/CustomButton';
import Headers from '../components/Headers';
import { useNavigation } from '@react-navigation/native';

const ProductManagement = () => {
    const navigation = useNavigation()
    const [products, setProducts] = useState([
        product
    ]);

    const [newProduct, setNewProduct] = useState({
        id: '',
        name: '',
        price: 0,
        image: '',

    });
    const createProduct = () => {
        setProducts((prevProducts) => [...prevProducts, newProduct]);
        setNewProduct({ id: '', name: '', price: 0, image: '' });
    };

    const updateProduct = (updatedProduct) => {
        setProducts((prevProducts) =>
            prevProducts.map((product) =>
                product.id === updatedProduct.id ? updatedProduct : product
            )
        );
    };

    const deleteProduct = (productId) => {
        setProducts((prevProducts) =>
            prevProducts.filter((product) => product.id !== productId)
        );
    };

    return (
        <View>
            <Headers title={"Product Management"} leftIcon={require('../images/back.png')} onLeftIconPress={() => navigation.goBack()} />
            <TextInput
                placeholder="Enter Product ID"
                value={newProduct.id}
                onChangeText={(text) => setNewProduct({ ...newProduct, id: text })}
            />
            <TextInput
                placeholder="Enter Product Name"
                value={newProduct.name}
                onChangeText={(text) => setNewProduct({ ...newProduct, name: text })}
            />
            <TextInput
                placeholder="Enter Product Price"
                value={String(newProduct.price)}
                onChangeText={(text) => setNewProduct({ ...newProduct, price: parseFloat(text) || 0 })}
            />

            <CustomButton bgColor={"#0dd66b"} title={"Create Product"} onPress={createProduct} />
            <FlatList
                data={products}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View>
                        <View style={{ flex: 1, justifyContent: "center", alignSelf: "center" }}>
                            <Text>{item.name}</Text>
                            <Text>${item.price}</Text>
                        </View>
                        <CustomButton bgColor={"#c8dbcd"} title={"Update"} onPress={() => updateProduct} />
                        <CustomButton bgColor={"#d63c0d"} title={"Delete"} onPress={() => deleteProduct(item.id)} />
                    </View>
                )}
            />
        </View>
    );
};

export default ProductManagement;

const styles = StyleSheet.create({

})

