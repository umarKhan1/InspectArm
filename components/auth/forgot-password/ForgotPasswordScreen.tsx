import React from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, Platform, ScrollView, Pressable } from 'react-native';
import { Image } from 'expo-image';
import { Controller } from 'react-hook-form';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { colors } from '@/constants/colors';
import { scale, verticalScale, wp } from '@/utils/responsive';
import { Button, Input } from '@/shared/ui';
import { useForgotPassword } from '@/components/auth/forgot-password/useForgotPassword';
import { forgetPasswordStyles as styles } from '@/styles/auth/auth-style';
export default function ForgotPasswordScreen() {
  const { control, errors, isSubmitting, onSubmit, router } = useForgotPassword();

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>

        {/* Logo */}
        <Animated.View entering={FadeInDown.duration(600).delay(100)} style={styles.logoContainer}>
          <Image
            source={require('../../../assets/images/splash-icon.png')}
            style={styles.logo}
            contentFit="contain"
          />
        </Animated.View>

        {/* Header Text */}
        <Animated.View entering={FadeInDown.duration(600).delay(200)}>
          <Text style={styles.title}>Forgot{'\n'}Password</Text>
          <Text style={styles.subtitle}>Enter your email to receive a reset link</Text>
        </Animated.View>

        {/* Form Fields */}
        <Animated.View entering={FadeInDown.duration(600).delay(300)} style={styles.formContainer}>
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                label="Email"
                placeholder="ava@apex.com"
                keyboardType="email-address"
                autoCapitalize="none"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                error={errors.email?.message}
              />
            )}
          />
        </Animated.View>

        {/* Button */}
        <Animated.View entering={FadeInDown.duration(600).delay(400)} style={styles.buttonContainer}>
          <Button
            title="Send Reset Link"
            onPress={onSubmit}
            isLoading={isSubmitting}
          />
        </Animated.View>

      </ScrollView>

      {/* Footer Text */}
      <Animated.View entering={FadeInDown.duration(600).delay(500)} style={styles.footerContainer}>
        <Text style={styles.footerText}>
          Remember your password?{' '}
        </Text>
        <Pressable onPress={() => router.push('/auth/login')}>
          <Text style={styles.signUpText}>Login</Text>
        </Pressable>
      </Animated.View>
    </KeyboardAvoidingView>
  );
}

