import React, { useEffect } from "react";
import { View, Image, ScrollView, TouchableOpacity } from "react-native";
import { yelpAPIroute } from "../../utils/API_URL";
import RestaurantItems from "./RestaurantItems";
import axios from "axios";

const YELP_API_KEY =
  "nmuAHsLtl0p9aOrTRnO38jl351UAQ4JxntCoIr0I26rY5hqE-YVX8jDJTMYetLNJYIchZJhZf2Bbzs8V8SjPHWk4-wxP-QMeQeZeim2i01P0Iv3p4229sITLJH4SY3Yx";

const RESTAURANTS = [
  {
    image:
      "https://media.istockphoto.com/photos/restaurant-plates-picture-id104704117?k=20&m=104704117&s=612x612&w=0&h=kpYSHTcSnkQZbhHmUr25jIIvns7f3x2oBMNvX1lLTwU=",
    name: "Restaurant 1",
    address: "Address 1",
    category: ["Category 1", "Category 2"],
    rating: 4.5,
    reviews: 100,
    price: "$",
    distance: "1.2km",
    liked: false,
    duration: "30 - 45 min",
    person: 4,
  },

  {
    image:
      "https://media.istockphoto.com/photos/restaurant-plates-picture-id104704117?k=20&m=104704117&s=612x612&w=0&h=kpYSHTcSnkQZbhHmUr25jIIvns7f3x2oBMNvX1lLTwU=",
    name: "Restaurant 1",
    address: "Address 1",
    category: ["Category 1", "Category 2"],
    rating: 4.5,
    reviews: 100,
    price: "$",
    distance: "1.2km",
    liked: false,
    duration: "30 - 45 min",
    person: 4,
  },

  {
    image:
      "https://media.istockphoto.com/photos/restaurant-plates-picture-id104704117?k=20&m=104704117&s=612x612&w=0&h=kpYSHTcSnkQZbhHmUr25jIIvns7f3x2oBMNvX1lLTwU=",
    name: "Restaurant 1",
    address: "Address 1",
    category: ["Category 1", "Category 2"],
    rating: 4.5,
    reviews: 100,
    price: "$",
    distance: "1.2km",
    liked: false,
    duration: "30 - 45 min",
    person: 4,
  },

  {
    image:
      "https://media.istockphoto.com/photos/restaurant-plates-picture-id104704117?k=20&m=104704117&s=612x612&w=0&h=kpYSHTcSnkQZbhHmUr25jIIvns7f3x2oBMNvX1lLTwU=",
    name: "Restaurant 1",
    address: "Address 1",
    category: ["Category 1", "Category 2"],
    rating: 4.5,
    reviews: 100,
    price: "$",
    distance: "1.2km",
    liked: false,
    duration: "30 - 45 min",
    person: 4,
  },
];

export default function RestaurantList() {
  const [restaurants, setRestaurants] = React.useState([]);

  useEffect(() => {
    const getRestaurants = async (city) => {
      const config = {
        headers: {
          Authorization: `Bearer ${YELP_API_KEY}`,
        },
        url: `${yelpAPIroute}${city}`,
        method: "get",
      };
      const { data } = await axios(config);
      console.log(data.businesses);
      setRestaurants(data.businesses);
    };
    getRestaurants("san francisco");
  }, []);

  return (
    <View>
      {RESTAURANTS.map((restaurant, index) => (
        <RestaurantItems key={index} restaurant={restaurant} />
      ))}
    </View>
  );
}
