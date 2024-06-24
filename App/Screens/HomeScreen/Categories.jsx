import React, { useEffect, useState } from 'react';
import { View,  Image, FlatList, StyleSheet, Text } from 'react-native'; // Removed unnecessary imports
import GlobalApi from '../../Utils/GlobalApi';
import Heading from '../../Components/Heading';
import Colors from '../../Utils/Colors';

export default function Categories() {

    const [categories,setCategories]=useState([]);
    useEffect(()=>{
            getCategories();
    },[])
    // 
    //  Get Categories list
    // 
    const getCategories=() =>{
        GlobalApi.getCategorise().then(resp=>{
          console.log("resp",resp.categories)
            setCategories(resp?.categories);
        })
    }
  return (
    <View style={{marginTop:10}}>
      <Heading  text={'Categories'} isViewAll={true}/>
      <FlatList
      data={categories}
      numColumns={4}
      renderItem={({item,index})=>index<=3&&(
        <View style={styles.container}>
            <View style={styles.iconcontainer}>
              <Image source={{uri:item?.icon?.url}}
              style={{width:30,height:30}}
              />
            </View>
            <Text style={[styles.item, { fontFamily: 'outfit-medium' }]}>{item?.name}</Text>
       </View>
      )}
      />
    </View>
  )
}
const styles = StyleSheet.create({
     container:{
        flex:1,
        alignItems:'center'
     },
     iconcontainer:{
        backgroundColor:Colors.LIGHT_GRAY,
        padding:17,
        borderRadius:99
     }
})
// import React, { useEffect, useState } from 'react';
// import { View,  Image, FlatList, StyleSheet } from 'react-native'; // Removed unnecessary imports
// import GlobalApi from '../../Utils/GlobalApi';
// import Heading from '../../Components/Heading';

// export default function Categories() {
//     const [categories, setCategories] = useState([]);

//     useEffect(() => {
//         getCategories();
//     }, []);

//     const getCategories = () => {
//         GlobalApi.getCategorise().then(resp => {
//             console.log("resp", resp.categories);
//             setCategories(resp?.categories);
//         });
//     };

//     return (
//         <View style={{ marginTop: 10 }}>
//             <Heading text={'Categories'} isViewAll={true} />
//             <FlatList
//                 data={categories}
//                 numColumns={4}
//                 renderItem={({ item, index }) => (
//                     <View style={styles.iconContainer}> Corrected style reference 
//                         <Image
//                             source={{ uri: item?.icon?.url }}
//                             style={{ width: 30, height: 30 }}
//                         />
//                     </View>
//                 )}
//             />
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     iconContainer: {
//         margin: 5, // Add margin for better spacing
//     },
// });
