import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '@/constants/colors';
import { scale, verticalScale } from '@/utils/responsive';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login Screen Component</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.appBg,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: scale(18),
    color: colors.primary,
    fontWeight: 'bold',
  },
});
