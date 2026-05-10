import React from 'react';
import { View, StyleSheet } from 'react-native';
import { colors } from '@/constants/colors';
import { scale, wp } from '@/utils/responsive';

interface StepperProps {
  currentStep: number;
  totalSteps: number;
}

export default function Stepper({ currentStep, totalSteps }: StepperProps) {
  return (
    <View style={styles.container}>
      {Array.from({ length: totalSteps }).map((_, index) => (
        <View
          key={index}
          style={[
            styles.step,
            { width: wp(90) / totalSteps - scale(10) },
            index + 1 <= currentStep ? styles.activeStep : styles.inactiveStep
          ]}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp(5),
    marginVertical: scale(20),
  },
  step: {
    height: scale(6),
    borderRadius: scale(3),
  },
  activeStep: {
    backgroundColor: colors.primary,
  },
  inactiveStep: {
    backgroundColor: colors.border,
  },
});
