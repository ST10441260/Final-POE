import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity } from 'react-native';
import { NavigationProps } from './types'; // Assuming types file exists
import { MenuItem } from './types';

const HomeScreen: React.FC<NavigationProps> = ({ navigation }) => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  // Calculate average price by course
  const calculateAveragePrice = (course: string) => {
    const filteredItems = menuItems.filter(item => item.course === course);
    if (filteredItems.length === 0) return 0;
    const total = filteredItems.reduce((sum, item) => sum + item.price, 0);
    return total / filteredItems.length;
  };

  // Navigate to the Add Menu Item Screen
  const goToAddMenuScreen = () => {
    navigation.navigate('AddMenuScreen', { setMenuItems });
  };

  // Remove item from menu
  const removeMenuItem = (itemToRemove: MenuItem) => {
    setMenuItems(menuItems.filter(item => item.id !== itemToRemove.id));
  };

  return (
    <View>
      <Text>Average Price of Starters: ${calculateAveragePrice('Starter').toFixed(2)}</Text>
      <Text>Average Price of Mains: ${calculateAveragePrice('Main').toFixed(2)}</Text>
      <Text>Average Price of Desserts: ${calculateAveragePrice('Dessert').toFixed(2)}</Text>
      <Button title="Add Menu Item" onPress={goToAddMenuScreen} />
      
      <FlatList
        data={menuItems}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name} - ${item.price}</Text>
            <Button title="Remove" onPress={() => removeMenuItem(item)} />
          </View>
        )}
      />
    </View>
  );
};

export default HomeScreen;
