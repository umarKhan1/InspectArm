import React from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, Platform, Pressable, TextInput } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { colors } from '@/constants/colors';
import { scale, verticalScale, wp } from '@/utils/responsive';
import { Button } from '@/shared/ui';
import { useOtpVerification } from './useOtpVerification';
import { otpStyles as styles } from '@/styles/auth/auth-style';
export default function OtpVerification() {
  const {
    otp,
    timer,
    canResend,
    inputRefs,
    handleOtpChange,
    handleKeyPress,
    handleResend,
    handleVerify,
    formatTimer,
    router,
  } = useOtpVerification();

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={styles.content}>
        {/* Header */}
        <Animated.View entering={FadeInDown.duration(600).delay(100)}>
          <Text style={styles.title}>Verify your{'\n'}Email</Text>
          <Text style={styles.subtitle}>
            We've sent a 6-digit code to your email. Please enter it below.
          </Text>
        </Animated.View>

        {/* OTP Input Fields */}
        <Animated.View entering={FadeInDown.duration(600).delay(200)} style={styles.otpContainer}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              ref={(ref) => {
                if (inputRefs.current) {
                  inputRefs.current[index] = ref;
                }
              }}
              style={[
                styles.otpInput,
                digit !== '' && styles.otpInputActive,
                { backgroundColor: digit !== '' ? colors.white : colors.appBg }
              ]}
              maxLength={1}
              keyboardType="number-pad"
              textContentType="oneTimeCode"
              autoComplete="one-time-code"
              value={digit}
              onChangeText={(value) => handleOtpChange(value, index)}
              onKeyPress={(e) => handleKeyPress(e, index)}
              selectionColor={colors.primary}
            />
          ))}
        </Animated.View>

        {/* Timer / Resend */}
        <Animated.View entering={FadeInDown.duration(600).delay(300)} style={styles.timerContainer}>
          {canResend ? (
            <Pressable onPress={handleResend}>
              <Text style={styles.resendText}>Resend Email</Text>
            </Pressable>
          ) : (
            <Text style={styles.timerText}>Resend in {formatTimer(timer)}</Text>
          )}
        </Animated.View>

        {/* Verify Button */}
        <Animated.View entering={FadeInDown.duration(600).delay(400)} style={styles.buttonContainer}>
          <Button
            title="Verify & Continue"
            onPress={handleVerify}
            disabled={otp.some((digit) => digit === '')}
          />
        </Animated.View>

        {/* Back to Login */}
        <Animated.View entering={FadeInDown.duration(600).delay(500)} style={styles.footer}>
          <Pressable onPress={() => router.back()}>
            <Text style={styles.backText}>Back to Sign Up</Text>
          </Pressable>
        </Animated.View>
      </View>
    </KeyboardAvoidingView>
  );
}

