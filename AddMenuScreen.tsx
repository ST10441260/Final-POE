import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { NavigationProps } from './types'; 
import { MenuItem } from './types';

interface AddMenuScreenProps extends NavigationProps {
  route: { params: { setMenuItems: React.Dispatch<React.SetStateAction<MenuItem[]>> } };
}

const AddMenuScreen: React.FC<AddMenuScreenProps> = ({ route }) => {
  const { setMenuItems } = route.params;
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  
  // Ensure that course can only be 'Starter', 'Main', or 'Dessert'
  const [course, setCourse] = useState<'Starter' | 'Main' | 'Dessert'>('Starter');

  const addMenuItem = () => {
    if (!name || !price || !course) {
      alert('Please fill out all fields');
      return;
    }

    const newItem: MenuItem = {
      id: Math.random(), 
      name,
      price: parseFloat(price),
      course
    };

    setMenuItems(prevItems => [...prevItems, newItem]);
    setName('');
    setPrice('');
    setCourse('Starter'); 
  };

  return (
    <View>
      <Text>Add New Menu Item</Text>
      
      <TextInput 
        placeholder="Name" 
        value={name} 
        onChangeText={setName} 
      />
      
      <TextInput 
        placeholder="Price" 
        value={price} 
        onChangeText={setPrice} 
        keyboardType="numeric"
      />
      
      {/* For course, make sure to cast the value properly */}
      <TextInput 
        placeholder="Course (Starter, Main, Dessert)" 
        value={course} 
        onChangeText={(text) => setCourse(text as 'Starter' | 'Main' | 'Dessert')} // Casting the input string
      />
      
      <Button title="Add Item" onPress={addMenuItem} />
    </View>
  );
};

export default AddMenuScreen;
