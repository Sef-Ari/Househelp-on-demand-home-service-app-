import { View, Text } from 'react-native'
import React from 'react'
import Header from './header';
import Slider from './Slider';
import Categories from './Categories';
import BusinessList from './Business List';

const HomeScreen = () => {
   return (
    <View>
      {/* Header */}
       <Header/>
      <View style={{padding:20}}>
            {/* Slider */}
             <Slider/>
             {/* Categories */}
             <Categories/>
             {/* BusinessList */}
             <BusinessList/>
      </View>
    </View>
  );
};
export default HomeScreen;