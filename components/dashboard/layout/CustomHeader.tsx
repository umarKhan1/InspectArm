import React from 'react';
import { View, Text, Pressable, SafeAreaView, StatusBar } from 'react-native';
import { Menu } from 'lucide-react-native';
import { colors } from '../../../constants/colors';
import { layoutStyles as styles } from '../../../styles/dashboard/layoutStyles';

interface CustomHeaderProps {
  onMenuPress: () => void;
}

export function CustomHeader({ onMenuPress }: CustomHeaderProps) {
  return (
    <SafeAreaView style={styles.headerSafeArea}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
      <View style={styles.header}>
        <Pressable onPress={onMenuPress} style={styles.headerButton}>
          <Menu color={colors.text} size={24} />
        </Pressable>
        <Text style={styles.headerTitle}>InspectArm</Text>
        <View style={styles.headerRight} />
      </View>
    </SafeAreaView>
  );
}
