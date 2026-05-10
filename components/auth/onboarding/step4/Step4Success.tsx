import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Animated, { FadeInDown, ZoomIn } from 'react-native-reanimated';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { colors } from '@/constants/colors';
import { scale, verticalScale, wp } from '@/utils/responsive';
import { Button } from '@/shared/ui';
import { useAuthStore } from '@/store/authStore';
import { StepFourStyles as styles } from '@/styles/auth/onboarding';

export default function Step4Success() {
  const router = useRouter();
  const { resetOnboardingData } = useAuthStore();

  const handleGoToDashboard = () => {
    // Clear onboarding data as it's now completed
    resetOnboardingData();

    // Navigate to the main app dashboard
    router.replace('/dashboard');
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Animated.View
          entering={ZoomIn.duration(600).delay(200)}
          style={styles.iconCircle}
        >
          <Ionicons name="checkmark-circle" size={scale(80)} color={colors.primary} />
        </Animated.View>

        <Animated.View entering={FadeInDown.duration(600).delay(400)} style={styles.textContainer}>
          <Text style={styles.title}>Account Successfully{'\n'}Setup!</Text>
          <Text style={styles.subtitle}>
            Your company profile is now ready.{'\n'}You can start managing your inspections and team.
          </Text>
        </Animated.View>
      </View>

      <Animated.View entering={FadeInDown.duration(600).delay(600)} style={styles.footer}>
        <Button
          title="Go to Dashboard"
          onPress={handleGoToDashboard}
        />
      </Animated.View>
    </View>
  );
}

