import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.TotalAmount}>
        <Text style={styles.amountValue}>
          <Text style={{color: '#79a471'}}>$</Text>0.00
        </Text>
      </View>
      <View style={styles.today}>
        <Text style={{color: '#000', fontSize: 18, fontWeight: '700'}}>
          TODAY
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 0,
    alignSelf: 'center',
    marginTop: 20,
    height: 85,
    elevation: 100,
  },
  TotalAmount: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    backgroundColor: 'black',
    borderRadius: 30,
    borderColor: 'white',
    borderWidth: 2.5,
    shadowColor: '#000000',
    elevation: 100,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  amountValue: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  today: {
    width: '70%',
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'white',
    alignSelf: 'center',
    alignItems: 'center',
    elevation: 100,
    paddingVertical: 3,
    paddingHorizontal: 5,
    borderRadius: 5,
  },
});
