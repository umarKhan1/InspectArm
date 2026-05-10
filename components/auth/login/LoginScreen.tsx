import React from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, Platform, ScrollView, Pressable } from 'react-native';
import { Image } from 'expo-image';
import { Controller } from 'react-hook-form';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { colors } from '@/constants/colors';
import { scale, verticalScale, wp } from '@/utils/responsive';
import { Button, Input } from '@/shared/ui';
import { useLogin } from '@/components/auth/login/useLogin';
import { loginStyles as styles } from '@/styles/auth/auth-style';

export default function LoginScreen() {
  const { control, errors, isSubmitting, onSubmit, router } = useLogin();

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
          <Text style={styles.title}>Sign in to your{'\n'}Account</Text>
          <Text style={styles.subtitle}>Enter your email and password to log in</Text>
        </Animated.View>

        {/* Form Fields */}
        <Animated.View entering={FadeInDown.duration(600).delay(300)} style={styles.formContainer}>
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                label="Email"
                placeholder="Loisbecket@gmail.com"
                keyboardType="email-address"
                autoCapitalize="none"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                error={errors.email?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                label="Password"
                placeholder="*******"
                isPassword
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                error={errors.password?.message}
              />
            )}
          />

          <Pressable style={styles.forgotPasswordContainer} onPress={() => router.push('/auth/forgot-password')}>
            <Text style={styles.forgotPasswordText}>Forgot Password ?</Text>
          </Pressable>
        </Animated.View>

        {/* Button */}
        <Animated.View entering={FadeInDown.duration(600).delay(400)} style={styles.buttonContainer}>
          <Button
            title="Log In"
            onPress={onSubmit}
            isLoading={isSubmitting}
          />
        </Animated.View>

        {/* Footer Text - Moved inside ScrollView */}
        <Animated.View entering={FadeInDown.duration(600).delay(500)} style={styles.footerContainer}>
          <Text style={styles.footerText}>
            Don't have an account?{' '}
          </Text>
          <Pressable onPress={() => router.push('/auth/signup')}>
            <Text style={styles.signUpText}>Sign Up</Text>
          </Pressable>
        </Animated.View>

      </ScrollView>
    </KeyboardAvoidingView>
  );
}

