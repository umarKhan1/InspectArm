import React from 'react';
import { View, Text } from 'react-native';
import { inspectionsStyles } from '../../../styles/dashboard/inspectionsStyles';
import { colors } from '../../../constants/colors';
import { LucideIcon } from 'lucide-react-native';

interface StatCardProps {
  title: string;
  value: string | number;
  subtitle: string;
  Icon: LucideIcon;
}

export default function StatCard({ title, value, subtitle, Icon }: StatCardProps) {
  return (
    <View style={inspectionsStyles.statCard}>
      <View style={inspectionsStyles.statCardHeader}>
        <Text style={inspectionsStyles.statCardTitle}>{title}</Text>
        <View style={inspectionsStyles.statCardIconContainer}>
          <Icon size={18} color={colors.primary} />
        </View>
      </View>
      <Text style={inspectionsStyles.statCardValue}>{value}</Text>
      <Text style={inspectionsStyles.statCardSubtitle}>{subtitle}</Text>
    </View>
  );
}
