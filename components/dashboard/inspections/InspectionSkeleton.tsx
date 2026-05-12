import React, { useEffect, useRef } from 'react';
import { View, Animated, StyleSheet } from 'react-native';
import { inspectionsStyles } from '../../../styles/dashboard/inspectionsStyles';

export default function InspectionSkeleton() {
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animatedValue, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(animatedValue, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [animatedValue]);

  const opacity = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0.3, 0.7],
  });

  return (
    <View style={inspectionsStyles.inspectionCard}>
      {/* Top Bar Skeleton */}
      <View style={[inspectionsStyles.cardHeader, { marginBottom: 20 }]}>
        <Animated.View style={[styles.skeletonBlock, { width: 100, height: 24, opacity }]} />
        <Animated.View style={[styles.skeletonBlock, { width: 80, height: 24, borderRadius: 12, opacity }]} />
      </View>

      {/* Main Content: Client Name Skeleton */}
      <Animated.View style={[styles.skeletonBlock, { width: '60%', height: 24, marginBottom: 24, opacity }]} />

      {/* Details List Skeleton */}
      <View style={inspectionsStyles.detailsList}>
        <View style={inspectionsStyles.detailRow}>
          <Animated.View style={[styles.skeletonIcon, { opacity }]} />
          <Animated.View style={[styles.skeletonBlock, { width: '80%', height: 16, opacity }]} />
        </View>
        <View style={inspectionsStyles.detailRow}>
          <Animated.View style={[styles.skeletonIcon, { opacity }]} />
          <Animated.View style={[styles.skeletonBlock, { width: '50%', height: 16, opacity }]} />
        </View>
        <View style={inspectionsStyles.detailRow}>
          <Animated.View style={[styles.skeletonIcon, { opacity }]} />
          <Animated.View style={[styles.skeletonBlock, { width: '40%', height: 16, opacity }]} />
        </View>
      </View>

      {/* Footer Skeleton */}
      <View style={[inspectionsStyles.cardFooter, { marginTop: 10 }]}>
        <View>
          <Animated.View style={[styles.skeletonBlock, { width: 60, height: 20, marginBottom: 8, opacity }]} />
          <Animated.View style={[styles.skeletonBlock, { width: 90, height: 14, opacity }]} />
        </View>
        <Animated.View style={[styles.skeletonIcon, { width: 40, height: 40, borderRadius: 20, opacity }]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  skeletonBlock: {
    backgroundColor: '#e5e7eb',
    borderRadius: 6,
  },
  skeletonIcon: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#e5e7eb',
    marginRight: 10,
  },
});
