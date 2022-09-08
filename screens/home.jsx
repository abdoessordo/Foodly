import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import GoogleMap from '../components/google_map';
import HeaderTabs from '../components/HeaderTabs';

export default function Home() {
  const WindoWwidth = Dimensions.get('window').width;
  const [headerWidth, setHeaderWidth] = React.useState(null);

  return (
    <View style={styles.container}>
      {/* <View
        onLayout={event => {
          var {x, y, width, height} = event.nativeEvent.layout;
          setHeaderWidth(width);
        }}
        style={{
          zIndex: 100,
          backgroundColor: 'black',
          paddingVertical: 6,
          paddingHorizontal: 16,
          borderRadius: 30,
          position: 'absolute',
          left: WindoWwidth / 2 - headerWidth / 2,
          top: 30,
        }}>
        <HeaderTabs />
      </View> */}
      <GoogleMap />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
