import React from 'react';
import { View, Text } from 'react-native';
import { inspectionsStyles } from '../../../styles/dashboard/inspectionsStyles';
import { InspectionStatus } from '../../../utils/mockInspections';

interface StatusBadgeProps {
  status: InspectionStatus;
}

export default function StatusBadge({ status }: StatusBadgeProps) {
  let bgColor = '#e0f2fe';
  let textColor = '#0284c7';

  switch (status) {
    case 'Scheduled':
      bgColor = '#e0f2fe';
      textColor = '#0284c7'; // Light Blue
      break;
    case 'In Progress':
      bgColor = '#ffedd5';
      textColor = '#c2410c'; // Light Orange
      break;
    case 'Completed':
      bgColor = '#dcfce7';
      textColor = '#15803d'; // Light Green
      break;
    case 'Draft':
      bgColor = '#f3f4f6';
      textColor = '#4b5563'; // Gray
      break;
  }

  return (
    <View style={[inspectionsStyles.badge, { backgroundColor: bgColor }]}>
      <Text style={[inspectionsStyles.badgeText, { color: textColor }]}>
        {status}
      </Text>
    </View>
  );
}
