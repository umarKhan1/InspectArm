import { Dimensions, PixelRatio } from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

// Based on standard iPhone 11/12/13 Pro dimensions
const baseWidth = 390;
const baseHeight = 844;

export const wp = (widthPercent: number) => {
  return PixelRatio.roundToNearestPixel((SCREEN_WIDTH * widthPercent) / 100);
};

export const hp = (heightPercent: number) => {
  return PixelRatio.roundToNearestPixel((SCREEN_HEIGHT * heightPercent) / 100);
};

// Scale relative to screen width
export const scale = (size: number) => (SCREEN_WIDTH / baseWidth) * size;

// Vertical scale relative to screen height
export const verticalScale = (size: number) => (SCREEN_HEIGHT / baseHeight) * size;

// Moderate scale (less drastic scaling)
export const moderateScale = (size: number, factor = 0.5) => size + (scale(size) - size) * factor;

export const SCREEN = {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
};
