import React from 'react';
import { View, Text, StyleSheet, Pressable, Image, Modal } from 'react-native';
import Animated, { FadeInRight, FadeOutLeft } from 'react-native-reanimated';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '@/constants/colors';
import { scale, verticalScale, wp } from '@/utils/responsive';
import { Button } from '@/shared/ui';
import { useStep2 } from './useStep2';
import ImagePickerModal from './ImagePickerModal';
import ImageCropper from './ImageCropper';
import { StepTwostyles as styles } from '@/styles/auth/onboarding';
interface Step2Props {
  onNext: () => void;
}

export default function Step2({ onNext }: Step2Props) {
  const {
    tempImage,
    isModalVisible,
    isCropperVisible,
    selectedImage,
    openPicker,
    closePicker,
    handlePickImage,
    onCropConfirm,
    onCropCancel,
  } = useStep2(onNext);

  return (
    <Animated.View
      entering={FadeInRight.duration(400)}
      exiting={FadeOutLeft.duration(400)}
      style={styles.container}
    >
      <View style={styles.header}>
        <Text style={styles.title}>Company Logo</Text>
        <Text style={styles.subtitle}>Upload your company logo to personalize your profile.</Text>
      </View>

      <View style={styles.content}>
        <Pressable
          onPress={openPicker}
          style={[
            styles.uploadArea,
            tempImage ? styles.uploadAreaFilled : styles.uploadAreaEmpty
          ]}
        >
          {tempImage ? (
            <View style={styles.imageContainer}>
              <Image source={{ uri: tempImage }} style={styles.previewImage} />
              <View style={styles.editBadge}>
                <Ionicons name="camera" size={scale(16)} color={colors.white} />
              </View>
            </View>
          ) : (
            <View style={styles.placeholderContainer}>
              <View style={styles.iconCircle}>
                <Ionicons name="cloud-upload-outline" size={scale(32)} color={colors.primary} />
              </View>
              <Text style={styles.uploadText}>Click to upload logo</Text>
              <Text style={styles.uploadHint}>PNG, JPG or WEBP (max. 2MB)</Text>
            </View>
          )}
        </Pressable>
      </View>

      <View style={styles.footer}>
        <Button
          title="Next Step"
          onPress={onNext}
          disabled={!tempImage}
        />
      </View>

      {/* Bottom Modal for Picker */}
      <ImagePickerModal
        isVisible={isModalVisible}
        onClose={closePicker}
        onSelect={handlePickImage}
      />

      {/* Full Screen Cropper */}
      <Modal visible={isCropperVisible} animationType="slide">
        {selectedImage && (
          <ImageCropper
            imageUri={selectedImage}
            onConfirm={onCropConfirm}
            onCancel={onCropCancel}
          />
        )}
      </Modal>
    </Animated.View>
  );
}


