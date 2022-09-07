import React from "react";
import { View, Image, Text, ScrollView, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function RestaurantItems(props) {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={{
        backgroundColor: "white",
        marginTop: 10,
        padding: 10,
      }}
    >
      <RestaurantImage
        src={props.restaurant.image}
        liked={props.restaurant.liked}
        rating={props.restaurant.rating}
      />
      <RestaurantInfo
        name={props.restaurant.name}
        duration={props.restaurant.duration}
      />
    </TouchableOpacity>
  );
}

const RestaurantImage = (props) => (
  <>
    <Image source={{ uri: props.src }} style={{ width: "100%", height: 200 }} />
    <View
      style={{
        position: "absolute",
        right: 15,
        top: 15,
        alignItems: "flex-end",
      }}
    >
      <RestaurantLiked liked={props.liked} />
      <RestaurantRating rating={props.rating} />
    </View>
  </>
);

const RestaurantLiked = (props) => (
  <TouchableOpacity>
    {props.liked ? (
      <Ionicons name="heart" size={24} color="#ed4956" />
    ) : (
      <Ionicons name="heart-outline" size={24} color="#fff" />
    )}
  </TouchableOpacity>
);

const RestaurantRating = (props) => (
  <View
    style={{
      flexDirection: "row",
      alignItems: "center",
      padding: 5,
      backgroundColor: "rgba(255, 255, 255, 0.9)",
      borderRadius: 20,
    }}
  >
    <Text style={{ marginRight: 5, fontWeight: "900" }}>{props.rating}</Text>
    <Ionicons name="star" size={24} color="#b7dd29" />
  </View>
);

const RestaurantInfo = (props) => (
  <View
    style={{
      marginTop: 10,
    }}
  >
    <View>
      <Text style={{ fontSize: 15, fontWeight: "900" }}>{props.name}</Text>
      <Text style={{ fontSize: 13, color: "gray" }}>{props.duration}</Text>
    </View>
  </View>
);
