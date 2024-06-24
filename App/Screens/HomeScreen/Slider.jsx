import { View, Text, ScrollView,StyleSheet, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../Utils/GlobalApi'
import Heading from '../../Components/Heading';

export default function Slider() {

    const [slider,setSlider]=useState([]); 
    useEffect(()=>{
         getSliders();
    },[])    
    const getSliders=()=>{
          GlobalApi.getSlider().then(resp=>{
            console.log("resp",resp.sliders);
            setSlider(resp?.sliders)
          })
    }
  return (
    <View>
      <Heading text={'Offers For You'}/>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}   style={styles.scrollView}>
        <View style={styles.sliderContainer}>
      {slider.map((item, i) => (
        <View key={item.id} style={styles.sliderItem}>
          <Image
            source={{ uri: item?.image.url }}
            style={styles.sliderImage}
          />
        </View>
      ))}
    </View>
    </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
     heading:{
         fontSize:20,
         fontFamily:'Outfit-Medium',
     },
     scrollView: {
      marginHorizontal: 10, // Add margin for better appearance
    },
     sliderContainer: {
      flexDirection: 'row', // Display items horizontally
      alignItems: 'center', // Align items vertically
    },
    sliderItem: {
      marginRight: 10, // Add some spacing between images
    },
     sliderImage:{
      width:270,
      height:150,
      borderRadius:20,
      objectFit:'contain'
     }
    })
// import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
// import React, { useEffect, useState } from 'react';
// import GlobalApi from '../../Utils/GlobalApi';

// export default function Slider() {
//   const { Slider, setSlider } = useState([]);

//   useEffect(() => {
//     getSliders();
//   }, []);

//   const getSliders = () => {
//     GlobalApi.getSlider().then(resp => {
//       console.log("resp", resp.sliders);
//       setSlider(resp?.sliders);
//     });
//   };

//   return (
//     <View>
//       <Text style={styles.heading}>Offers For You</Text>
//       <FlatList
//         data={slide} 
//         renderItem={({ item, index }) => (
//           <View>
//             <Image
//               source={{ uri: item?.image?.url }}
//               style={styles.sliderImage}
//             />
//           </View>
//         )}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   heading: {
//     fontSize: 20,
//     fontFamily: 'Outfit-Medium',
//   },

//   sliderImage: {
//     width: 270,
//     height: 150,
//     borderRadius: 20,
//     resizeMode: 'contain', // Use 'contain' for objectFit
//   },
// });

// this how to use image as uri on a page
// Image source={{uri:"https://media.graphassets.com/jJuBZxRC6hW1yjMXgjAA"}}