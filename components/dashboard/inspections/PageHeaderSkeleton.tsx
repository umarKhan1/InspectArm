import React, { useEffect, useRef } from 'react';
import { View, Animated, StyleSheet } from 'react-native';
import { inspectionsStyles } from '../../../styles/dashboard/inspectionsStyles';

export default function PageHeaderSkeleton() {
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
    <View>
      {/* Header Section Skeleton */}
      <View style={inspectionsStyles.headerSection}>
        <Animated.View style={[styles.skeletonBlock, { width: 150, height: 14, marginBottom: 8, opacity }]} />
        <Animated.View style={[styles.skeletonBlock, { width: 200, height: 36, marginBottom: 12, opacity }]} />
        <Animated.View style={[styles.skeletonBlock, { width: '80%', height: 16, marginBottom: 6, opacity }]} />
        <Animated.View style={[styles.skeletonBlock, { width: '60%', height: 16, marginBottom: 24, opacity }]} />
        <Animated.View style={[styles.skeletonBlock, { width: 140, height: 44, borderRadius: 8, opacity }]} />
      </View>

      {/* Stats Section Skeleton (2x2 Grid) */}
      <View style={inspectionsStyles.statsContainer}>
        {[1, 2, 3, 4].map((item) => (
          <View key={`stat-skel-${item}`} style={inspectionsStyles.statCardWrapper}>
            <View style={inspectionsStyles.statCard}>
              <View style={inspectionsStyles.statCardHeader}>
                <Animated.View style={[styles.skeletonBlock, { width: 60, height: 16, opacity }]} />
                <Animated.View style={[styles.skeletonBlock, { width: 32, height: 32, borderRadius: 8, opacity }]} />
              </View>
              <Animated.View style={[styles.skeletonBlock, { width: 80, height: 32, marginBottom: 8, opacity }]} />
              <Animated.View style={[styles.skeletonBlock, { width: 100, height: 14, opacity }]} />
            </View>
          </View>
        ))}
      </View>

      {/* Queue Header Skeleton */}
      <View style={inspectionsStyles.queueHeaderContainer}>
        <Animated.View style={[styles.skeletonBlock, { width: 220, height: 24, marginBottom: 8, opacity }]} />
        <Animated.View style={[styles.skeletonBlock, { width: '90%', height: 16, marginBottom: 16, opacity }]} />
        
        <View style={inspectionsStyles.queueActions}>
          <Animated.View style={[styles.skeletonBlock, { width: 80, height: 36, borderRadius: 8, opacity }]} />
          <Animated.View style={[styles.skeletonBlock, { width: 120, height: 36, borderRadius: 8, opacity }]} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  skeletonBlock: {
    backgroundColor: '#e5e7eb',
    borderRadius: 6,
  },
});
