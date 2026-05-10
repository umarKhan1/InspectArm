import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, TouchableOpacity, Text } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '@/constants/colors';
import { scale, verticalScale, wp } from '@/utils/responsive';
import Stepper from '@/components/auth/onboarding/Stepper';
import Step1 from '@/components/auth/onboarding/step1/Step1';
import Step2 from '@/components/auth/onboarding/step2/Step2';
import Step3 from '@/components/auth/onboarding/step3/Step3';
import Step4Success from '@/components/auth/onboarding/step4/Step4Success';

export default function OnboardingScreen() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    } else {
      router.back();
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1 onNext={handleNext} />;
      case 2:
        return <Step2 onNext={handleNext} />;
      case 3:
        return <Step3 onNext={handleNext} />;
      case 4:
        return <Step4Success />;
      default:
        return <Step1 onNext={handleNext} />;
    }
  };

  const isSuccessStep = currentStep === totalSteps;

  return (
    <SafeAreaView style={styles.container}>
      {/* Header with Back Button - Hidden on Success */}
      {!isSuccessStep && (
        <View style={styles.header}>
          <TouchableOpacity onPress={handleBack} style={styles.backButton}>
            <Ionicons name="chevron-back" size={scale(24)} color={colors.text} />
          </TouchableOpacity>
          <Text style={styles.stepText}>Step {currentStep} of {totalSteps}</Text>
          <View style={{ width: scale(24) }} />
        </View>
      )}

      {!isSuccessStep && (
        <Stepper currentStep={currentStep} totalSteps={totalSteps} />
      )}

      <View style={[styles.content, isSuccessStep && { marginTop: verticalScale(20) }]}>
        {renderStep()}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp(4),
    height: verticalScale(50),
  },
  backButton: {
    padding: scale(4),
  },
  stepText: {
    fontSize: scale(16),
    fontWeight: '600',
    color: colors.text,
  },
  content: {
    flex: 1,
  },
});
