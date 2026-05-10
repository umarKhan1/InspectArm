import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Pressable, Dimensions } from 'react-native';
import { Gesture, GestureDetector, GestureHandlerRootView } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle, useSharedValue } from 'react-native-reanimated';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '@/constants/colors';
import { scale, verticalScale, wp } from '@/utils/responsive';
import { imageCropperStyle as styles } from '@/styles/auth/onboarding';
const { width: SCREEN_WIDTH } = Dimensions.get('window');
const CROP_SIZE = SCREEN_WIDTH * 0.8;

interface ImageCropperProps {
  imageUri: string;
  onConfirm: (croppedUri: string) => void;
  onCancel: () => void;
}

const ASPECT_RATIOS = [
  { label: '1:1', value: 1 },
  { label: '4:3', value: 4 / 3 },
  { label: '16:9', value: 16 / 9 },
  { label: 'Free', value: 0 },
];

export default function ImageCropper({ imageUri, onConfirm, onCancel }: ImageCropperProps) {
  const scaleShared = useSharedValue(1);
  const savedScale = useSharedValue(1);
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const savedTranslateX = useSharedValue(0);
  const savedTranslateY = useSharedValue(0);

  const pinchGesture = Gesture.Pinch()
    .onUpdate((e) => {
      const val = savedScale.value * e.scale;
      scaleShared.value = Math.min(Math.max(val, 1), 5);
    })
    .onEnd(() => {
      savedScale.value = scaleShared.value;
    });

  const panGesture = Gesture.Pan()
    .onUpdate((e) => {
      translateX.value = savedTranslateX.value + e.translationX;
      translateY.value = savedTranslateY.value + e.translationY;
    })
    .onEnd(() => {
      savedTranslateX.value = translateX.value;
      savedTranslateY.value = translateY.value;
    });

  const composed = Gesture.Simultaneous(pinchGesture, panGesture);

  const [selectedRatio, setSelectedRatio] = React.useState(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX.value },
      { translateY: translateY.value },
      { scale: scaleShared.value },
    ],
  }));

  const frameStyle = useAnimatedStyle(() => {
    const frameHeight = selectedRatio === 0 ? CROP_SIZE : CROP_SIZE / selectedRatio;
    return {
      width: CROP_SIZE,
      height: frameHeight,
    };
  });

  const handleConfirm = () => {
    // For now, return the original URI or a high res one
    onConfirm(imageUri);
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <Pressable onPress={onCancel} style={styles.iconButton}>
            <Ionicons name="close" size={24} color={colors.white} />
          </Pressable>
          <Text style={styles.headerTitle}>Crop Logo</Text>
          <Pressable onPress={handleConfirm} style={styles.confirmButton}>
            <Text style={styles.confirmText}>Okay</Text>
          </Pressable>
        </View>

        <View style={styles.cropperContainer}>
          <GestureDetector gesture={composed}>
            <Animated.Image
              source={{ uri: imageUri }}
              style={[styles.image, animatedStyle]}
              resizeMode="contain"
            />
          </GestureDetector>

          <View style={styles.overlay} pointerEvents="none">
            <Animated.View style={[styles.cropFrame, frameStyle]} />
          </View>
        </View>

        <View style={styles.footer}>
          <View style={styles.ratioSelector}>
            {ASPECT_RATIOS.map((ratio) => (
              <Pressable
                key={ratio.label}
                onPress={() => setSelectedRatio(ratio.value)}
                style={[
                  styles.ratioButton,
                  selectedRatio === ratio.value && styles.ratioButtonActive
                ]}
              >
                <Text style={[
                  styles.ratioButtonText,
                  selectedRatio === ratio.value && styles.ratioButtonTextActive
                ]}>
                  {ratio.label}
                </Text>
              </Pressable>
            ))}
          </View>
          <Text style={styles.instruction}>Pinch to zoom (1x - 5x) and drag to position</Text>
        </View>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}


