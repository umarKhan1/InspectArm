import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { User } from 'lucide-react-native';
import { colors } from '../../../constants/colors';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <User size={80} color={colors.primary} strokeWidth={1.5} />
      <Text style={styles.title}>Profile</Text>
      <Text style={styles.subtitle}>will come soon</Text>
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
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.text,
    marginTop: 24,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: colors.textLight,
    fontWeight: '500',
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
});
