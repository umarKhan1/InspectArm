import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Modal, Pressable, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '@/constants/colors';
import { scale, verticalScale, wp } from '@/utils/responsive';
import Stepper from '@/components/auth/onboarding/Stepper';
import Step1 from '@/components/auth/onboarding/step1/Step1';
import Step2 from '@/components/auth/onboarding/step2/Step2';
import Step3 from '@/components/auth/onboarding/step3/Step3';
import Step4Success from '@/components/auth/onboarding/step4/Step4Success';
import { useAuthStore } from '@/store/authStore';

export default function OnboardingScreen() {
  const router = useRouter();
  const { email, logout } = useAuthStore();
  const [currentStep, setCurrentStep] = useState(1);
  const [modalVisible, setModalVisible] = useState(false);
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

  const handleLogout = () => {
    setModalVisible(false);
    logout();
    router.replace('/auth/login');
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
      {/* Top Bar with Logo and Avatar */}
      <View style={styles.topBar}>
        <Image
          source={require('../../../assets/images/splash-icon.png')}
          style={styles.logo}
          contentFit="contain"
        />
        <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.avatarButton}>
          <Ionicons name="person-circle" size={scale(40)} color={colors.primary} />
        </TouchableOpacity>
      </View>

      {/* Header - Back Button Removed */}
      {!isSuccessStep && (
        <View style={styles.header}>
          <Text style={styles.stepText}>Step {currentStep} of {totalSteps}</Text>
        </View>
      )}

      {!isSuccessStep && (
        <Stepper currentStep={currentStep} totalSteps={totalSteps} />
      )}

      <View style={[styles.content, isSuccessStep && { marginTop: verticalScale(20) }]}>
        {renderStep()}
      </View>

      {/* Dropdown Logout Menu */}
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <Pressable style={styles.dropdownOverlay} onPress={() => setModalVisible(false)}>
          <View style={styles.dropdownMenu}>
            <Text style={styles.dropdownEmail}>{email || 'User'}</Text>
            <View style={styles.dropdownDivider} />
            <TouchableOpacity style={styles.dropdownLogoutButton} onPress={handleLogout}>
              <Ionicons name="log-out-outline" size={scale(20)} color={colors.red} />
              <Text style={styles.dropdownLogoutText}>Logout</Text>
            </TouchableOpacity>
          </View>
        </Pressable>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp(4),
    height: verticalScale(60),
    paddingTop: verticalScale(10),
  },
  avatarButton: {
    padding: scale(4),
  },
  logo: {
    width: scale(140),
    height: verticalScale(40),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: wp(4),
    height: verticalScale(40),
  },
  stepText: {
    fontSize: scale(16),
    fontWeight: '600',
    color: colors.text,
  },
  content: {
    flex: 1,
  },
  dropdownOverlay: {
    flex: 1,
  },
  dropdownMenu: {
    position: 'absolute',
    top: verticalScale(60) + (Platform.OS === 'ios' ? 40 : 20),
    right: wp(4),
    backgroundColor: colors.white,
    paddingVertical: verticalScale(12),
    paddingHorizontal: scale(16),
    borderRadius: scale(8),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
    minWidth: scale(180),
  },
  dropdownEmail: {
    fontSize: scale(14),
    color: colors.textLight,
    fontWeight: '500',
    marginBottom: verticalScale(8),
  },
  dropdownDivider: {
    height: 1,
    backgroundColor: colors.border,
    marginBottom: verticalScale(8),
  },
  dropdownLogoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: verticalScale(4),
  },
  dropdownLogoutText: {
    color: colors.red,
    fontSize: scale(14),
    fontWeight: '600',
    marginLeft: scale(8),
  },
});
