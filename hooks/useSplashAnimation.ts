import { useEffect } from 'react';
import { useRouter } from 'expo-router';
import { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { useAuthStore } from '@/store/authStore';

export function useSplashAnimation() {
  const router = useRouter();
  const { isLoggedIn } = useAuthStore();
  const scale = useSharedValue(0.5);
  const opacity = useSharedValue(0);

  useEffect(() => {
    // Start animation
    scale.value = withTiming(1, { duration: 1000 });
    opacity.value = withTiming(1, { duration: 1000 });

    // Navigate after animation finishes
    const timer = setTimeout(() => {
      if (isLoggedIn) {
        router.replace('/dashboard');
      } else {
        router.replace('/auth/login');
      }
    }, 2500);

    // Cleanup timer if component unmounts
    return () => clearTimeout(timer);
  }, [isLoggedIn, router, scale, opacity]);

  // Create the animated style object
  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      transform: [{ scale: scale.value }],
    };
  });

  return { animatedStyle };
}
