import React from 'react';
import { View, Text } from 'react-native';
import { LayoutDashboard } from 'lucide-react-native';
import { colors } from '../../../constants/colors';
import { dashboardStyles as styles } from '../../../styles/dashboard/dashboardStyles';

export default function DashboardScreen() {
  return (
    <View style={styles.container}>
      <LayoutDashboard size={80} color={colors.primary} strokeWidth={1.5} />
      <Text style={styles.title}>Dashboard</Text>
      <Text style={styles.subtitle}>will come soon</Text>
    </View>
  );
}
