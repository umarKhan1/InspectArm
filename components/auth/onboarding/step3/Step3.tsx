import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Controller } from 'react-hook-form';
import Animated, { FadeInRight, FadeOutLeft } from 'react-native-reanimated';
import { colors } from '@/constants/colors';
import { scale, verticalScale, wp } from '@/utils/responsive';
import { Button, Input } from '@/shared/ui';
import { useStep3 } from './useStep3';
import { StepThreeStyles as styles } from '@/styles/auth/onboarding';
interface Step3Props {
  onNext: () => void;
}

export default function Step3({ onNext }: Step3Props) {
  const { control, handleSubmit, errors, isValid } = useStep3(onNext);

  return (
    <Animated.View
      entering={FadeInRight.duration(400)}
      exiting={FadeOutLeft.duration(400)}
      style={styles.container}
    >
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.title}>Company Location</Text>
          <Text style={styles.subtitle}>Add the primary operating address for this company.</Text>
        </View>

        <View style={styles.form}>
          <View style={styles.row}>
            <Controller
              control={control}
              name="state"
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  label="State / Province"
                  required
                  placeholder="Select State"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  error={errors.state?.message}
                  containerStyle={styles.halfInput}
                />
              )}
            />
            <Controller
              control={control}
              name="city"
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  label="City"
                  required
                  placeholder="New York City"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  error={errors.city?.message}
                  containerStyle={styles.halfInput}
                />
              )}
            />
          </View>

          <View style={styles.row}>
            <Controller
              control={control}
              name="zipCode"
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  label="ZIP / Postal Code"
                  required
                  placeholder="10001"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  error={errors.zipCode?.message}
                  containerStyle={styles.halfInput}
                  keyboardType="numeric"
                />
              )}
            />
            <Controller
              control={control}
              name="addressLine1"
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  label="Address Line 1"
                  required
                  placeholder="123 Main Street"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  error={errors.addressLine1?.message}
                  containerStyle={styles.halfInput}
                />
              )}
            />
          </View>

          <Controller
            control={control}
            name="addressLine2"
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                label="Address Line 2"
                placeholder="Suite 210"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                error={errors.addressLine2?.message}
              />
            )}
          />
        </View>

        <View style={styles.footer}>
          <Button
            title="Next Step"
            onPress={handleSubmit}
          />
        </View>
      </ScrollView>
    </Animated.View>
  );
}

