import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { inspectionsStyles } from '../../../styles/dashboard/inspectionsStyles';
import { Inspection } from '../../../utils/mockInspections';
import { colors } from '../../../constants/colors';
import { MapPin, Calendar, User, Hammer, ChevronRight } from 'lucide-react-native';
import StatusBadge from './StatusBadge';

interface InspectionItemProps {
  inspection: Inspection;
}

export default function InspectionItem({ inspection }: InspectionItemProps) {
  return (
    <View style={inspectionsStyles.inspectionCard}>
      {/* Top Bar: Property Code & Status Badge */}
      <View style={inspectionsStyles.cardHeader}>
        <Text style={inspectionsStyles.propertyCode}>{inspection.propertyCode}</Text>
        <StatusBadge status={inspection.status} />
      </View>

      {/* Main Content: Client Name */}
      <Text style={inspectionsStyles.clientName}>{inspection.clientName}</Text>

      {/* Details List */}
      <View style={inspectionsStyles.detailsList}>
        <View style={inspectionsStyles.detailRow}>
          <MapPin size={16} color={colors.primary} />
          <Text style={inspectionsStyles.detailText} numberOfLines={1}>
            {inspection.address}
          </Text>
        </View>

        <View style={inspectionsStyles.detailRow}>
          <Calendar size={16} color={colors.textLight} />
          <Text style={inspectionsStyles.detailText}>
            {inspection.scheduleDate} <Text style={inspectionsStyles.detailTextSub}>• {inspection.scheduleTime}</Text>
          </Text>
        </View>

        <View style={inspectionsStyles.detailRow}>
          <User size={16} color={colors.primary} />
          <Text style={inspectionsStyles.detailText}>
            {inspection.inspectorName}
          </Text>
        </View>

        <View style={inspectionsStyles.detailRow}>
          <Hammer size={16} color={colors.textLight} />
          <Text style={inspectionsStyles.detailText} numberOfLines={1}>
            {inspection.serviceType}
          </Text>
        </View>
      </View>

      {/* Footer: Payment & Action */}
      <View style={inspectionsStyles.cardFooter}>
        <View>
          <Text style={inspectionsStyles.paymentAmount}>${inspection.paymentAmount}</Text>
          <Text style={inspectionsStyles.paymentStatus}>{inspection.paymentStatus}</Text>
        </View>
        <TouchableOpacity style={inspectionsStyles.actionBtn} activeOpacity={0.7}>
          <ChevronRight size={20} color={colors.textLight} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
