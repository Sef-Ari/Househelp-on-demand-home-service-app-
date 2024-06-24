import { View, Text, Image, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import Colors from '../../Utils/Colors'
import { useUser } from '@clerk/clerk-expo'
import { FontAwesome } from '@expo/vector-icons';
export default function Header() {
    const {user,isLoading}=useUser();
  return user&&(
     <View style={styles.container}>
         {/* profile section */}
        <View style={styles.profileMainContainer}>
        <View style={styles.profilecontainer}>
            <Image source={{ uri: user?.imageUrl }} 
             style={styles.userImage} />    
             <View>
                  <Text style={{color:Colors.WHITE,fontFamily:'Outfit'}}>Welcome,</Text>
                  <Text style={{color:Colors.WHITE,
                  fontSize:20,fontFamily:'Outfit-Medium'}}>{user?.fullName}</Text>
             </View>
        </View>
        <FontAwesome name="bookmark-o" size={24}
         color="white" />
        </View>
        {/* Search Bar Section */}
        <View style={styles.searchBarContainer}>
            <TextInput placeholder='Search'
            style={styles.textInput}/>
            <FontAwesome name="search"
            style={styles.Searchbtn}
             size={24} color={Colors.PRIMARY} />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
         padding:20,
         paddingTop:40,
        backgroundColor:Colors.PRIMARY,
         borderBottomLeftRadius:25,
         borderBottomRightRadius:25
    },
    profileMainContainer:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',    
        justifyContent: 'space-between',
    },
    profilecontainer:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        gap:10
    },
    textInput:{
        padding:7,
        paddingHorizontal:16,
        backgroundColor:Colors.WHITE,
        borderRadius:8,
        width:'85%',
        fontSize:16,
        fontFamily:'Outfit'
    },
    searchBarContainer:{
        marginTop:15,
        display:'flex',
        flexDirection:'row',
        gap:10,
        marginBottom:10
    },
    Searchbtn:{
         backgroundColor:Colors.WHITE,
         padding:10,
         borderRadius:8
    },
    userImage:{
        width:45,
        height:45,
        borderRadius:99
    },
})