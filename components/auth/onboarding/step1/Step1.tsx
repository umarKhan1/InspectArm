import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Controller } from 'react-hook-form';
import Animated, { FadeInRight, FadeOutLeft } from 'react-native-reanimated';
import { Button, Input } from '@/shared/ui';
import { useStep1 } from './useStep1';
import {stepOneStyles as styles} from '@/styles/auth/onboarding';
interface Step1Props {
  onNext: () => void;
}

export default function Step1({ onNext }: Step1Props) {
  const { control, handleSubmit, errors, isValid } = useStep1(onNext);

  return (
    <Animated.View 
      entering={FadeInRight.duration(400)} 
      exiting={FadeOutLeft.duration(400)}
      style={styles.container}
    >
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.title}>Company Details</Text>
          <Text style={styles.subtitle}>Tell us more about your company to get started.</Text>
        </View>

        <View style={styles.form}>
          <Controller
            control={control}
            name="companyName"
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                label="Company Name"
                placeholder="e.g. InspectArm Solutions"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                error={errors.companyName?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="registrationNumber"
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                label="Registration Number"
                placeholder="e.g. REG123456"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                error={errors.registrationNumber?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="industry"
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                label="Industry"
                placeholder="e.g. Home Inspection"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                error={errors.industry?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="website"
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                label="Website (Optional)"
                placeholder="https://www.company.com"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                error={errors.website?.message}
                keyboardType="url"
                autoCapitalize="none"
              />
            )}
          />
        </View>

        <View style={styles.footer}>
          <Button
            title="Next Step"
            onPress={handleSubmit}
            disabled={!isValid}
          />
        </View>
      </ScrollView>
    </Animated.View>
  );
}


