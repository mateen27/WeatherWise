import { ImageBackground, StyleSheet, Image, View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { deviceWidth, deviceHeight } from "./Dimensions";
import { Feather } from "@expo/vector-icons";
import { API_KEY } from "./Constants";

const Details = (props) => {
  const { name } = props.route.params;

  //for storing API Data
  const [data, setData] = useState();

  //fetching the data
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API_KEY}`
    )
      //converting the response to json
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  }, []);

  const Data = ({ title, value }) => (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 22, color: "gray" }}>{title}</Text>
      <Text style={{ fontSize: 22, color: "white" }}>
        {value}
      </Text>
    </View>
  );

  return (
    <View>
      <ImageBackground
        source={require("../images/image1.jpg")}
        style={{ height: deviceHeight, width: deviceWidth, marginTop: '10%' }}
        imageStyle={{ opacity: 0.6, backgroundColor: "#333" }}
      />
      <View
        style={{
          position: "absolute",
          paddingVertical: 35,
          paddingHorizontal: 20,
        }}
      >
        {/* Taking up one more view */}
        {/* this one is for the header of the application */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: deviceWidth - 40,
            marginTop: 15
          }}
        >
          <Feather name="menu" size={30} color="white" />
          <Image
            source={require("../images/user.jpg")}
            style={{ height: 40, width: 40, borderRadius: 50 }}
          />
        </View>
        {data ? (
          <View
            style={{
              flexDirection: "column",
              justifyContent: "space-evenly",
              alignItems: "center",
              height: deviceHeight - 100,
            }}
          >
            <View>
              <Text style={{ fontSize: 40, color: "white" }}>{name}</Text>
              <Text style={{ fontSize: 16, color: "white" , textAlign : 'center' }}>
                {data["weather"][0]["main"]}
              </Text>
            </View>
            <Text style={{ color: "white", fontSize: 64 }}>
              {(data["main"]["temp"] - 273).toFixed(2)}&deg; C
            </Text>

            <View>
                <Text style={{ color: "white", fontSize: 22 , marginBottom : 16 }}>
                Weather Details
                </Text>
                <View style={{ width: deviceWidth - 60 }}>
                    <Data value={data['wind']['speed']} title='Wind'/>
                    <Data value={data['main']['pressure']} title='Pressure'/>
                    <Data value={`${data['main']['humidity']}%`} title='Humidity'/>
                    <Data value={data['visibility']} title='Visibility'/>
                </View>
            </View>
          </View>
        ) : null}
      </View>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({});
