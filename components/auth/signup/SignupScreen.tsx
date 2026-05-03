import React from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, Platform, ScrollView, Pressable, TextInput } from 'react-native';
import { Image } from 'expo-image';
import { Controller } from 'react-hook-form';
import Animated, { FadeInDown } from 'react-native-reanimated';
import CountryPicker from 'react-native-country-picker-modal';
import { colors } from '@/constants/colors';
import { scale, verticalScale, wp } from '@/utils/responsive';
import { Button, Input } from '@/shared/ui';
import { useSignup } from '@/hooks/auth/useSignup';

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
                <Text style={styles.label}>Phone Number</Text>
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
                placeholder="*******"
                isPassword
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                error={errors.password?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="confirmPassword"
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                label="Confirm Password"
                placeholder="*******"
                isPassword
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                error={errors.confirmPassword?.message}
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

      </ScrollView>

      {/* Footer Text */}
      <Animated.View entering={FadeInDown.duration(600).delay(500)} style={styles.footerContainer}>
        <Text style={styles.footerText}>
          Already have an account?{' '}
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
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfInput: {
    width: '48%',
  },
  phoneWrapper: {
    marginBottom: verticalScale(16),
  },
  label: {
    fontSize: scale(14),
    color: colors.text,
    marginBottom: verticalScale(6),
    fontWeight: '500',
  },
  customPhoneContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: verticalScale(50),
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: scale(8),
    backgroundColor: colors.white,
    paddingHorizontal: scale(14),
  },
  countryPickerButton: {
    marginRight: scale(4),
  },
  callingCodeText: {
    fontSize: scale(15),
    color: colors.text,
    marginRight: scale(8),
    fontWeight: '500',
  },
  phoneTextInput: {
    flex: 1,
    fontSize: scale(15),
    color: colors.text,
    height: '100%',
  },
  errorText: {
    fontSize: scale(12),
    color: colors.red,
    marginTop: verticalScale(4),
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
