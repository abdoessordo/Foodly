/* eslint-disable prettier/prettier */
// import React, {useEffect, useState} from 'react';
// import {StyleSheet, View, PermissionsAndroid, Dimensions, Text} from 'react-native';
// import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
// import Geolocation from '@react-native-community/geolocation';
// import MapViewDirections from 'react-native-maps-directions';
// import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
// import {GOOGLE_MAPS_API_KEY} from '../env.js';

// const {width, height} = Dimensions.get('window');
// const ASPECT_RATIO = width / height;
// const LATITUDE_DELTA = 0.02;
// export default function GoogleMap(props) {
//   const [region, setRegion] = useState({
//     set: false,
//     latitude: 0,
//     longitude: 0,
//     latitudeDelta: LATITUDE_DELTA,
//     longitudeDelta: LATITUDE_DELTA * ASPECT_RATIO,
//   });

//   const MARKERS = [
//     {
//       coordinate: {
//         latitude: region.latitude,
//         longitude: region.longitude,
//       },
//       title: 'Marker 1',
//       description: 'Description 1',
//     },
//     {
//       coordinate: {
//         latitude: region.latitude * 1.0002,
//         longitude: region.longitude * 0.9998,
//       },
//       title: 'Marker 2',
//       description: 'Description 2',
//     },
//     {
//       coordinate: {
//         latitude: region.latitude * 1.0003,
//         longitude: region.longitude * 0.9997,
//       },
//       title: 'Marker 3',
//       description: 'Description 3',
//     },
//     {
//       coordinate: {
//         latitude: region.latitude * 1.0004,
//         longitude: region.longitude * 0.9996,
//       },
//       title: 'Marker 4',
//       description: 'Description 4',
//     },
//   ];

//   useEffect(() => {
//     const requestLocationPermission = async () => {
//       try {
//         const granted = await PermissionsAndroid.request(
//           PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//           {
//             title: 'Location Permission',
//             message: 'This App needs access to your location',
//           },
//         );
//         if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//           Geolocation.getCurrentPosition(
//             position => {
//               setRegion(prev => ({
//                 ...prev,
//                 set: true,
//                 latitude: position.coords.latitude,
//                 longitude: position.coords.longitude,
//               }));
//             },
//             error => console.log(error),
//             {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
//           );
//         } else {
//           console.log('Location permission denied');
//         }
//       } catch (err) {
//         console.log('err', err);
//         console.warn(err);
//       }
//     };
//     requestLocationPermission();
//   }, []);

//   return (
//     <>
//       {region.set && (
//         <MapView
//           style={styles.map}
//           provider= {PROVIDER_GOOGLE}
//           initialRegion={{
//             latitude: region.latitude,
//             longitude: region.longitude,
//             latitudeDelta: region.latitudeDelta,
//             longitudeDelta: region.longitudeDelta,
//           }}>
//           {/* {MARKERS.map((marker, index) => (
//             <Marker
//               key={index}
//               coordinate={marker.coordinate}
//               title={marker.title}
//               description={marker.description}
//               image={require('./bicycle.png')}
//             />
//           ))} */}
//           <View style={styles.searchContainer}>
//             {/* <GooglePlacesAutocomplete
//               styles={{textInput: styles.textInput}}
//               placeholder="Search"
//               onPress={(data, details = null) => {
//                 // 'details' is provided when fetchDetails = true
//                 console.log(data, details);
//               }}
//               query={{
//                 key: {GOOGLE_MAPS_API_KEY},
//                 language: 'en',
//               }}
//             /> */}
//             <Text>asdasdlaksnda</Text>
//           </View>
//           {/* <MapViewDirections
//             origin={{latitude: region.latitude, longitude: region.longitude}}
//             destination={{latitude: 35.7782, longitude: -5.828}}
//             apikey={GOOGLE_MAPS_API_KEY}
//             mode="BICYCLING"
//             // mode="WALKING"
//             strokeColor="hotpink"
//             resetOnChange={false}
//             splitWaypoints={true}
//             region="ma"
//           /> */}
//         </MapView>
//       )}
//     </>
//   );
// }

// const styles = StyleSheet.create({
//   map: {
//     ...StyleSheet.absoluteFillObject,
//   },
//   searchContainer: {
//     position: 'absolute',
//     width: "90%",
//     backgroundColor: 'white',
//     shadowColor: '#000',
//     shadowOffset: { width: 2, height: 2 },
//     shadowOpacity: 0.5,
//     shadowRadius: 4,
//     elevation: 4,
//     padding: 8,
//   },
//   textInput: {
//   }
// });
