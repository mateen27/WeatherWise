// landing page of the Application

import { View, Text, ImageBackground , Image, TextInput, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import { deviceWidth , deviceHeight } from './Dimensions'
import { Feather } from '@expo/vector-icons';
import Cards from './Cards';

const Home = (props) => {
    const [cityName , setCityName] = useState('');

    const cities = [
        {
            id : 1 , 
            name : 'New Delhi' , 
            image : require('../images/delhi.webp')
        } , 
        {
            id : 2 , 
            name : 'Agra' , 
            image : require('../images/agra.webp')
        } , 
        {
            id : 3 , 
            name : 'Lucknow' , 
            image : require('../images/lucknow.webp')
        } , 
        {
            id : 4 , 
            name : 'Hyderabad' , 
            image : require('../images/hyderabad.webp')
        } , 
    ]

  return (
    <View>
      <ImageBackground source={require('../images/bgImage.jpg')}
      style = {{ height : deviceHeight , width : deviceWidth, marginTop: '10%'}}
      imageStyle= {{ opacity : 0.6 , backgroundColor : '#333'}}
      />
      <View style = {{position : 'absolute' , paddingVertical : 35 , paddingHorizontal : 20 }}>
        {/* Taking up one more view */}
        {/* this one is for the header of the application */}
        <View style = {{ flexDirection : 'row' , justifyContent : "space-between" , alignItems : 'center' , width : deviceWidth - 40, marginTop: 15}}>
            <Feather name="menu" size={30} color="white" />
            <Image source= {require('../images/user.jpg')} 
            style = {{height : 40 , width : 40 , borderRadius : 50}}
            />
        </View>

        {/* for the headings of the application */}
        <View style = {{paddingHorizontal : 15 , marginTop : 50}}>
            <Text style = {{fontSize : 30 , color : '#fff'}}>Hello Mateen.</Text>
            <Text style = {{fontSize : 16 , color : '#fff' , fontWeight : 'bold'}}>Search the city by the name</Text>
        </View>

        {/* for text input field */}
        <View style = {{ flexDirection : 'row' , justifyContent : 'space-between' , alignItems : 'center' , borderWidth : 1 , borderColor : 'white' , borderRadius : 50 , paddingHorizontal : 20 , marginTop :10}}>
            <TextInput placeholder='Search City!' placeholderTextColor={'white'} value={cityName} onChangeText={(val)=>setCityName(val)} style = {{paddingVertical : 10 ,  color : 'white'}}/>
            <TouchableOpacity onPress={()=> props.navigation.navigate('Details' , {
                name : cityName
            })}>
                <Feather name="search" size={24} color="white" />
            </TouchableOpacity>
        </View>

        {/* My City's */}
        <Text style = {{paddingHorizontal : 15 , marginTop : 220 , marginBottom : 5 , color : 'white' , fontSize : 25}}>My Location</Text>
        <FlatList data={cities} horizontal renderItem={({item})=>(
            <Cards id={item.id} name={item.name} image={item.image} navigation={props.navigation}/>
        )}/>
      </View>
    </View>
  )
}

export default Home