import React from 'react';
import { Stack } from 'expo-router';

import { useDrawer } from '../../hooks/dashboard/useDrawer';
import { View, StyleSheet } from 'react-native';
import { CustomHeader } from '@/components/dashboard/layout/CustomHeader';
import { DashboardDrawer } from '@/components/dashboard/layout/DashboardDrawer';

export default function DashboardLayout() {
  const drawerProps = useDrawer();

  return (
    <View style={styles.container}>
      <Stack
        screenOptions={{
          header: () => <CustomHeader onMenuPress={drawerProps.toggleDrawer} />,
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="inspections/index" />
        <Stack.Screen name="inspections/details" />
        <Stack.Screen name="inspections/generate" />
        <Stack.Screen name="calendar" />
        <Stack.Screen name="profile" />
      </Stack>

      <DashboardDrawer {...drawerProps} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
