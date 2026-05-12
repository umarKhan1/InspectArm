import React from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, Platform, ScrollView, Pressable, TextInput } from 'react-native';
import { Image } from 'expo-image';
import { Controller } from 'react-hook-form';
import Animated, { FadeInDown } from 'react-native-reanimated';
import CountryPicker from 'react-native-country-picker-modal';
import { colors } from '@/constants/colors';
import { scale, verticalScale, wp } from '@/utils/responsive';
import { Button, Input } from '@/shared/ui';
import { useSignup } from '@/components/auth/signup/useSignup';
import { signupStyles as styles } from '@/styles/auth/auth-style';

export default function SignupScreen() {
  const {
    control,
    errors,
    isSubmitting,
    countryCode,
    callingCode,
    onCountrySelect,
    onSubmit,
    router
  } = useSignup();

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
          <Text style={styles.title}>Create an{'\n'}Account</Text>
          <Text style={styles.subtitle}>Fill in your details below to get started</Text>
        </Animated.View>

        {/* Form Fields */}
        <Animated.View entering={FadeInDown.duration(600).delay(300)} style={styles.formContainer}>

          <View style={styles.row}>
            <Controller
              control={control}
              name="firstName"
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  label="First Name"
                  required
                  placeholder="Ava"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  error={errors.firstName?.message}
                  containerStyle={styles.halfInput}
                />
              )}
            />
            <Controller
              control={control}
              name="lastName"
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  label="Last Name"
                  required
                  placeholder="Hughes"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  error={errors.lastName?.message}
                  containerStyle={styles.halfInput}
                />
              )}
            />
          </View>

          <Controller
            control={control}
            name="companyName"
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                label="Company Name"
                required
                placeholder="Apex Home Inspections"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                error={errors.companyName?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                label="Email"
                required
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

          <Controller
            control={control}
            name="phone"
            render={({ field: { onChange, value } }) => (
              <View style={styles.phoneWrapper}>
                <Text style={styles.label}>
                  Phone Number
                  <Text style={{ color: colors.red }}> *</Text>
                </Text>
                <View style={[styles.customPhoneContainer, errors.phone && { borderColor: colors.red }]}>
                  <CountryPicker
                    countryCode={countryCode}
                    withFilter
                    withFlag
                    withAlphaFilter
                    withCallingCode
                    withEmoji
                    onSelect={onCountrySelect}
                    containerButtonStyle={styles.countryPickerButton}
                  />
                  <Text style={styles.callingCodeText}>+{callingCode}</Text>
                  <TextInput
                    style={styles.phoneTextInput}
                    placeholder="Phone Number"
                    placeholderTextColor={colors.textLight}
                    keyboardType="phone-pad"
                    value={value}
                    onChangeText={onChange}
                  />
                </View>
                {errors.phone && <Text style={styles.errorText}>{errors.phone.message}</Text>}
              </View>
            )}
          />

          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                label="Password"
                required
                placeholder="*******"
                isPassword
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                error={errors.password?.message}
                textContentType="oneTimeCode"
                autoComplete="off"
                style={{ backgroundColor: colors.white }}
              />
            )}
          />

          <Controller
            control={control}
            name="confirmPassword"
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                label="Confirm Password"
                required
                placeholder="*******"
                isPassword
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                error={errors.confirmPassword?.message}
                textContentType="oneTimeCode"
                autoComplete="off"
                style={{ backgroundColor: colors.white }}
              />
            )}
          />

        </Animated.View>

        {/* Button */}
        <Animated.View entering={FadeInDown.duration(600).delay(400)} style={styles.buttonContainer}>
          <Button
            title="Sign Up"
            onPress={onSubmit}
            isLoading={isSubmitting}
          />
        </Animated.View>

        {/* Footer Text - Moved inside ScrollView */}
        <Animated.View entering={FadeInDown.duration(600).delay(500)} style={styles.footerContainer}>
          <Text style={styles.footerText}>
            Already have an account?{' '}
          </Text>
          <Pressable onPress={() => router.push('/auth/login')}>
            <Text style={styles.signUpText}>Login</Text>
          </Pressable>
        </Animated.View>

      </ScrollView>
    </KeyboardAvoidingView>
  );
}
