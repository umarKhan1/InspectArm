import React from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, Platform, ScrollView, Pressable } from 'react-native';
import { Image } from 'expo-image';
import { Controller } from 'react-hook-form';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { colors } from '@/constants/colors';
import { scale, verticalScale, wp } from '@/utils/responsive';
import { Button, Input } from '@/shared/ui';
import { useForgotPassword } from '@/hooks/auth/useForgotPassword';

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: wp(6),
    paddingTop: verticalScale(60),
    paddingBottom: verticalScale(30),
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: verticalScale(30),
  },
  logo: {
    width: scale(50),
    height: scale(50),
  },
  title: {
    fontSize: scale(32),
    fontWeight: '700',
    color: colors.text,
    marginBottom: verticalScale(8),
    lineHeight: scale(40),
  },
  subtitle: {
    fontSize: scale(14),
    color: colors.textLight,
    marginBottom: verticalScale(30),
  },
  formContainer: {
    marginBottom: verticalScale(20),
  },
  buttonContainer: {
    marginTop: verticalScale(10),
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: Platform.OS === 'ios' ? verticalScale(40) : verticalScale(20),
  },
  footerText: {
    fontSize: scale(14),
    color: colors.textLight,
  },
  signUpText: {
    fontSize: scale(14),
    color: colors.primary,
    fontWeight: '600',
  },
});
