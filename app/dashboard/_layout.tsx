import { Stack } from 'expo-router';

export default function DashboardLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="inspections/index" />
      <Stack.Screen name="inspections/details" />
      <Stack.Screen name="inspections/generate" />
      <Stack.Screen name="calendar" />
    </Stack>
  );
}
