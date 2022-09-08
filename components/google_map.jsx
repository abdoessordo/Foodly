import React, {useEffect, useState} from 'react';
import {StyleSheet, View, PermissionsAndroid} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

export default function GoogleMap(props) {
  const [region, setRegion] = useState({
    set: false,
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  });

  const MARKERS = [
    {
      coordinate: {
        latitude: region.latitude,
        longitude: region.longitude,
      },
      title: 'Marker 1',
      description: 'Description 1',
    },
    {
      coordinate: {
        latitude: region.latitude * 1.0002,
        longitude: region.longitude * 0.9998,
      },
      title: 'Marker 2',
      description: 'Description 2',
    },
    {
      coordinate: {
        latitude: region.latitude * 1.0003,
        longitude: region.longitude * 0.9997,
      },
      title: 'Marker 3',
      description: 'Description 3',
    },
    {
      coordinate: {
        latitude: region.latitude * 1.0004,
        longitude: region.longitude * 0.9996,
      },
      title: 'Marker 4',
      description: 'Description 4',
    },
  ];

  useEffect(() => {
    const requestLocationPermission = async () => {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Permission',
            message: 'This App needs access to your location',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          Geolocation.getCurrentPosition(
            position => {
              setRegion(prev => ({
                ...prev,
                set: true,
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
              }));
            },
            error => console.log(error),
            {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
          );
        } else {
          console.log('Location permission denied');
        }
      } catch (err) {
        console.log('err', err);
        console.warn(err);
      }
    };
    requestLocationPermission();
  }, []);

  return (
    <>
      {region.set && (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: region.latitude,
            longitude: region.longitude,
            latitudeDelta: region.latitudeDelta,
            longitudeDelta: region.longitudeDelta,
          }}>
          {MARKERS.map((marker, index) => (
            <Marker
              key={index}
              coordinate={marker.coordinate}
              title={marker.title}
              description={marker.description}
              image={require('./bicycle.png')}
            />
          ))}
        </MapView>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
