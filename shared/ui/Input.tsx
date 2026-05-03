import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, TextInputProps, Pressable, ViewStyle, StyleProp } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import Feather from '@expo/vector-icons/Feather';
import { colors } from '@/constants/colors';
import { scale, verticalScale } from '@/utils/responsive';

interface InputProps extends TextInputProps {
  label: string;
  error?: string;
  isPassword?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
}

export default function Input({ label, error, isPassword, containerStyle, style, ...props }: InputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  
  const borderColor = useSharedValue(colors.border);

  const animatedBorderStyle = useAnimatedStyle(() => {
    return {
      borderColor: borderColor.value,
    };
  });

  const handleFocus = (e: any) => {
    setIsFocused(true);
    borderColor.value = withTiming(colors.primary, { duration: 200 });
    props.onFocus?.(e);
  };

  const handleBlur = (e: any) => {
    setIsFocused(false);
    borderColor.value = withTiming(error ? colors.red : colors.border, { duration: 200 });
    props.onBlur?.(e);
  };

  React.useEffect(() => {
    if (error) {
      borderColor.value = withTiming(colors.red, { duration: 200 });
    } else if (!isFocused) {
      borderColor.value = withTiming(colors.border, { duration: 200 });
    }
  }, [error, isFocused, borderColor]);

  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={styles.label}>{label}</Text>
      <Animated.View style={[styles.inputContainer, animatedBorderStyle]}>
        <TextInput
          style={[styles.input, style]}
          placeholderTextColor={colors.textLight}
          onFocus={handleFocus}
          onBlur={handleBlur}
          secureTextEntry={isPassword && !showPassword}
          {...props}
        />
        {isPassword && (
          <Pressable onPress={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>
            <Feather 
              name={showPassword ? "eye-off" : "eye"} 
              size={scale(20)} 
              color={colors.textLight} 
            />
          </Pressable>
        )}
      </Animated.View>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: verticalScale(16),
  },
  label: {
    fontSize: scale(14),
    color: colors.text,
    marginBottom: verticalScale(6),
    fontWeight: '500',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: scale(8),
    backgroundColor: colors.white,
    height: verticalScale(50),
    paddingHorizontal: scale(14),
  },
  input: {
    flex: 1,
    fontSize: scale(15),
    color: colors.text,
    height: '100%',
  },
  eyeIcon: {
    padding: scale(4),
  },
  errorText: {
    fontSize: scale(12),
    color: colors.red,
    marginTop: verticalScale(4),
  },
});
