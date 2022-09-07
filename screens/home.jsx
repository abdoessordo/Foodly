import { SafeAreaView, ScrollView, View } from "react-native";
import Categories from "../components/Categories";
import HeaderTabs from "../components/HeaderTabs";
import RestaurantList from "../components/restaurants/RestaurantList";
import SafeViewAndroid from "../components/SafeViewAndroid ";
import SearchBar from "../components/Searchbar";

export default function Home() {
  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <Categories />
      <ScrollView showsVerticalScrollIndicator={false}>
        <RestaurantList />
      </ScrollView>
    </SafeAreaView>
  );
}
