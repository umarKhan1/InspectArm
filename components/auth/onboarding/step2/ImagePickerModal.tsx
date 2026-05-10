import React from 'react';
import { View, Text, StyleSheet, Modal, Pressable, TouchableWithoutFeedback } from 'react-native';
import Animated, { SlideInUp } from 'react-native-reanimated';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '@/constants/colors';
import { scale, verticalScale, wp } from '@/utils/responsive';
import { ImageModalStyle as styles } from '@/styles/auth/onboarding';
interface ImagePickerModalProps {
  isVisible: boolean;
  onClose: () => void;
  onSelect: (useCamera: boolean) => void;
}

export default function ImagePickerModal({ isVisible, onClose, onSelect }: ImagePickerModalProps) {
  return (
    <Modal visible={isVisible} transparent animationType="fade">
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.overlay}>
          <Animated.View entering={SlideInUp} style={styles.sheet}>
            <View style={styles.handle} />
            <Text style={styles.title}>Upload Photo</Text>
            <Text style={styles.subtitle}>Choose a source for your company logo</Text>

            <View style={styles.options}>
              <Pressable style={styles.option} onPress={() => onSelect(true)}>
                <View style={[styles.iconContainer, { backgroundColor: 'rgba(38, 118, 179, 0.1)' }]}>
                  <Ionicons name="camera" size={scale(24)} color={colors.primary} />
                </View>
                <Text style={styles.optionText}>Take from Camera</Text>
              </Pressable>

              <Pressable style={styles.option} onPress={() => onSelect(false)}>
                <View style={[styles.iconContainer, { backgroundColor: 'rgba(245, 138, 31, 0.1)' }]}>
                  <Ionicons name="images" size={scale(24)} color={colors.orange} />
                </View>
                <Text style={styles.optionText}>Choose from Gallery</Text>
              </Pressable>
            </View>

            <Pressable style={styles.cancelButton} onPress={onClose}>
              <Text style={styles.cancelText}>Cancel</Text>
            </Pressable>
          </Animated.View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

