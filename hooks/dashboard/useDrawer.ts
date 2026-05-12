import { useState, useRef, useEffect, useCallback } from 'react';
import { Animated, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');
export const DRAWER_WIDTH = width * 0.75;

export const useDrawer = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const slideAnim = useRef(new Animated.Value(-DRAWER_WIDTH)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const router = useRouter();

  useEffect(() => {
    Animated.parallel([
      Animated.timing(slideAnim, {
        toValue: drawerOpen ? 0 : -DRAWER_WIDTH,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: drawerOpen ? 1 : 0,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();
  }, [drawerOpen, fadeAnim, slideAnim]);

  const toggleDrawer = useCallback(() => setDrawerOpen((prev) => !prev), []);
  const closeDrawer = useCallback(() => setDrawerOpen(false), []);

  const handleNavigation = useCallback((path: string) => {
    setDrawerOpen(false);
    setTimeout(() => {
      router.replace(path as any);
    }, 320);
  }, [router]);

  const handleLogout = useCallback(() => {
    setDrawerOpen(false);
    setTimeout(() => {
      router.replace('/auth/login' as any);
    }, 320);
  }, [router]);

  return { drawerOpen, toggleDrawer, closeDrawer, slideAnim, fadeAnim, handleNavigation, handleLogout };
};
