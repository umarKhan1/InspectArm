import { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { useAuthStore } from '@/store/authStore';

export const useStep2 = (onNext: () => void) => {
  const { onboardingData, updateOnboardingData } = useAuthStore();
  const [tempImage, setTempImage] = useState<string | null>(onboardingData.photoUri || null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isCropperVisible, setIsCropperVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openPicker = () => setIsModalVisible(true);
  const closePicker = () => setIsModalVisible(false);

  const handlePickImage = async (useCamera: boolean) => {
    console.log('handlePickImage called with:', useCamera ? 'Camera' : 'Gallery');
    closePicker();
    
    // Small delay to ensure the bottom modal is fully closed before opening native UI
    await new Promise(resolve => setTimeout(resolve, 300));

    let result;
    try {
      if (useCamera) {
        console.log('Requesting camera permissions...');
        const { status } = await ImagePicker.requestCameraPermissionsAsync();
        console.log('Camera permission status:', status);
        if (status !== 'granted') {
          alert('Camera permission is required');
          return;
        }
        console.log('Launching camera...');
        result = await ImagePicker.launchCameraAsync({
          mediaTypes: ['images'],
          allowsEditing: true,
          aspect: [1, 1],
          quality: 1,
        });
      } else {
        console.log('Requesting media library permissions...');
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        console.log('Media library permission status:', status);
        if (status !== 'granted') {
          alert('Gallery permission is required');
          return;
        }
        console.log('Launching image library...');
        result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ['images'],
          allowsEditing: true,
          aspect: [1, 1],
          quality: 1,
        });
      }
      console.log('Picker result:', result);
    } catch (error) {
      console.error('Error picking image:', error);
    }

    if (result && !result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setIsCropperVisible(true);
    }
  };

  const onCropConfirm = (croppedUri: string) => {
    setTempImage(croppedUri);
    updateOnboardingData({ photoUri: croppedUri });
    setIsCropperVisible(false);
  };

  const onCropCancel = () => {
    setIsCropperVisible(false);
    setSelectedImage(null);
  };

  return {
    tempImage,
    isModalVisible,
    isCropperVisible,
    selectedImage,
    openPicker,
    closePicker,
    handlePickImage,
    onCropConfirm,
    onCropCancel,
    onNext,
  };
};
