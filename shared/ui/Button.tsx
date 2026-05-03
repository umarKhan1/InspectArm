import React from 'react';
import { StyleSheet, Text, Pressable, PressableProps, ActivityIndicator } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';
import { colors } from '@/constants/colors';
import { scale, verticalScale } from '@/utils/responsive';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

interface ButtonProps extends PressableProps {
  title: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  isLoading?: boolean;
}

export default function Button({ title, variant = 'primary', isLoading, style, ...props }: ButtonProps) {
  const scaleValue = useSharedValue(1);
  const opacityValue = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scaleValue.value }],
      opacity: opacityValue.value,
    };
  });

  const handlePressIn = (e: any) => {
    scaleValue.value = withSpring(0.95);
    opacityValue.value = withTiming(0.8);
    props.onPressIn?.(e);
  };

  const handlePressOut = (e: any) => {
    scaleValue.value = withSpring(1);
    opacityValue.value = withTiming(1);
    props.onPressOut?.(e);
  };

  const getVariantStyles = () => {
    switch (variant) {
      case 'outline':
        return { backgroundColor: 'transparent', borderColor: colors.primary, borderWidth: 1 };
      case 'text':
        return { backgroundColor: 'transparent' };
      case 'secondary':
        return { backgroundColor: colors.appBg };
      case 'primary':
      default:
        return { backgroundColor: colors.primary };
    }
  };

  const getTextColor = () => {
    switch (variant) {
      case 'outline':
      case 'text':
        return colors.primary;
      case 'secondary':
        return colors.text;
      case 'primary':
      default:
        return colors.white;
    }
  };

  return (
    <AnimatedPressable
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      style={[styles.container, getVariantStyles(), animatedStyle, style]}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading ? (
        <ActivityIndicator color={getTextColor()} />
      ) : (
        <Text style={[styles.title, { color: getTextColor() }]}>{title}</Text>
      )}
    </AnimatedPressable>
  );
}

const styles = StyleSheet.create({
  container: {
    height: verticalScale(50),
    borderRadius: scale(8),
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  title: {
    fontSize: scale(16),
    fontWeight: '600',
  },
});
