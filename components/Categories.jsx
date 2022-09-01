import React from "react";
import { View, Image, Text, ScrollView, TouchableOpacity } from "react-native";

const items = [
  {
    image: require("../assets/images/shopping-bag.png"),
    label: "Pick-up",
  },
  {
    image: require("../assets/images/soft-drink.png"),
    label: "Soft Drinks",
  },
  {
    image: require("../assets/images/bread.png"),
    label: "Bakery Items",
  },
  {
    image: require("../assets/images/fast-food.png"),
    label: "Fast Foods",
  },
  {
    image: require("../assets/images/deals.png"),
    label: "Deals",
  },
  {
    image: require("../assets/images/coffee.png"),
    label: "Coffee & Tea",
  },
  {
    image: require("../assets/images/desserts.png"),
    label: "Desserts",
  },
];

export default function Categories() {
  return (
    <View
      style={{
        marginTop: 10,
        paddingVertical: 10,
        backgroundColor: "white",
        paddingLeft: 20,
      }}
    >
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((item, index) => (
          <CategoryChoice
            key={index}
            image={item.image}
            label={item.label}
            index={index}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const CategoryChoice = (props) => (
  <TouchableOpacity
    style={{
      alignItems: "center",
      marginRight: 30,
    }}
  >
    <Image
      source={props.image}
      style={{
        width: 50,
        height: 40,
        resizeMode: "contain",
      }}
    />
    <Text style={{ fontSize: 13, fontWeight: "900" }}>{props.label}</Text>
  </TouchableOpacity>
);
