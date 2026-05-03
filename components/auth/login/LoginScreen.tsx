import React from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, Platform, ScrollView, Pressable } from 'react-native';
import { Image } from 'expo-image';
import { Controller } from 'react-hook-form';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { colors } from '@/constants/colors';
import { scale, verticalScale, wp } from '@/utils/responsive';
import { Button, Input } from '@/shared/ui';
import { useLogin } from '@/hooks/auth/useLogin';

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

      </ScrollView>

      {/* Footer Text */}
      <Animated.View entering={FadeInDown.duration(600).delay(500)} style={styles.footerContainer}>
        <Text style={styles.footerText}>
          Don't have an account?{' '}
        </Text>
        <Pressable onPress={() => router.push('/auth/signup')}>
          <Text style={styles.signUpText}>Sign Up</Text>
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
    paddingTop: verticalScale(80),
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
  forgotPasswordContainer: {
    alignSelf: 'flex-end',
    marginTop: verticalScale(4),
  },
  forgotPasswordText: {
    color: colors.primary,
    fontSize: scale(13),
    fontWeight: '500',
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
