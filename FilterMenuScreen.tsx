import React, { useState } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { MenuItem } from './types';

const FilterMenuScreen: React.FC = () => {
  const [courseFilter, setCourseFilter] = useState<string>('All');
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]); // Menu items would come from the global state

  const filteredMenu = courseFilter === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.course === courseFilter);

  return (
    <View>
      <Text>Filter by Course</Text>
      <Button title="All" onPress={() => setCourseFilter('All')} />
      <Button title="Starters" onPress={() => setCourseFilter('Starter')} />
      <Button title="Mains" onPress={() => setCourseFilter('Main')} />
      <Button title="Desserts" onPress={() => setCourseFilter('Dessert')} />

      <FlatList
        data={filteredMenu}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name} - ${item.price}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default FilterMenuScreen;
