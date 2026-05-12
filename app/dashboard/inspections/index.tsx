import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { Plus, ClipboardList, Calendar, CheckCircle, FileEdit, SlidersHorizontal, ChevronDown } from 'lucide-react-native';
import { inspectionsStyles } from '../../../styles/dashboard/inspectionsStyles';
import { colors } from '../../../constants/colors';
import { mockStats, mockInspections, Inspection } from '../../../utils/mockInspections';
import StatCard from '../../../components/dashboard/inspections/StatCard';
import InspectionItem from '../../../components/dashboard/inspections/InspectionItem';
import InspectionSkeleton from '../../../components/dashboard/inspections/InspectionSkeleton';
import PageHeaderSkeleton from '../../../components/dashboard/inspections/PageHeaderSkeleton';

export default function InspectionsScreen() {
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState<Inspection[]>([]);
  const [loadingMore, setLoadingMore] = useState(false);

  // Simulate initial load
  useEffect(() => {
    setTimeout(() => {
      setData(mockInspections);
      setLoading(false);
    }, 1500); // 1.5 second shimmer effect
  }, []);

  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setData(mockInspections);
      setRefreshing(false);
    }, 1000);
  };

  const loadMore = () => {
    if (loadingMore || loading) return;
    setLoadingMore(true);
    // Simulate pagination API call
    setTimeout(() => {
      // Append duplicate data for demonstration
      const moreData = mockInspections.map(item => ({
        ...item,
        id: item.id + '-' + Math.random().toString(36).substring(7), // Unique ID
      }));
      setData([...data, ...moreData]);
      setLoadingMore(false);
    }, 1000);
  };

  const renderHeader = () => {
    if (loading) {
      return <PageHeaderSkeleton />;
    }

    return (
      <View>
        {/* Header Section */}
        <View style={inspectionsStyles.headerSection}>
          <Text style={inspectionsStyles.subHeader}>Inspection Management</Text>
          <Text style={inspectionsStyles.title}>Inspections</Text>
          <Text style={inspectionsStyles.description}>
            Manage booking status, schedule, inspector assignment, property, client, services, payment, calendar movement, and linked reports.
          </Text>
          <TouchableOpacity style={inspectionsStyles.newInspectionBtn} activeOpacity={0.8}>
            <Plus size={18} color={colors.white} strokeWidth={3} />
            <Text style={inspectionsStyles.newInspectionBtnText}>New Inspection</Text>
          </TouchableOpacity>
        </View>

        {/* Stats Section - 2x2 Grid for Mobile */}
        <View style={inspectionsStyles.statsContainer}>
          <View style={inspectionsStyles.statCardWrapper}>
            <StatCard title="Total" value={mockStats.total} subtitle="All records" Icon={ClipboardList} />
          </View>
          <View style={inspectionsStyles.statCardWrapper}>
            <StatCard title="This Week" value={mockStats.thisWeek} subtitle="Scheduled" Icon={Calendar} />
          </View>
          <View style={inspectionsStyles.statCardWrapper}>
            <StatCard title="Completed" value={mockStats.completed} subtitle="Reports linked" Icon={CheckCircle} />
          </View>
          <View style={inspectionsStyles.statCardWrapper}>
            <StatCard title="Open Drafts" value={mockStats.openDrafts} subtitle="Need confirm" Icon={FileEdit} />
          </View>
        </View>

        {/* Queue Header */}
        <View style={inspectionsStyles.queueHeaderContainer}>
          <Text style={inspectionsStyles.queueTitle}>Active Inspection Queue</Text>
          <Text style={inspectionsStyles.queueSubtitle}>
            Operational list with status, date, inspector, property, client, services, and payment context.
          </Text>
          <View style={inspectionsStyles.queueActions}>
            <TouchableOpacity style={inspectionsStyles.filterBtn} activeOpacity={0.7}>
              <SlidersHorizontal size={16} color={colors.text} />
              <Text style={inspectionsStyles.filterBtnText}>Filter</Text>
            </TouchableOpacity>
            <TouchableOpacity style={inspectionsStyles.filterBtn} activeOpacity={0.7}>
              <Text style={[inspectionsStyles.filterBtnText, { marginLeft: 0, marginRight: 8 }]}>
                <Text style={{ fontWeight: '800' }}>10</Text> Page Entries
              </Text>
              <ChevronDown size={16} color={colors.textLight} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  const renderFooter = () => {
    if (!loadingMore) return <View style={{ height: 40 }} />;
    return (
      <View style={{ paddingVertical: 20, alignItems: 'center' }}>
        <ActivityIndicator size="small" color={colors.primary} />
      </View>
    );
  };

  return (
    <View style={inspectionsStyles.container}>
      <FlatList
        data={loading ? [1, 2, 3] : data} // Use array of 3 numbers for skeletons
        keyExtractor={(item, index) => loading ? `skeleton-${index}` : (item as Inspection).id}
        contentContainerStyle={inspectionsStyles.contentContainer}
        ListHeaderComponent={renderHeader}
        ListFooterComponent={renderFooter}
        renderItem={({ item }) => {
          if (loading) {
            return (
              <View style={{ marginBottom: 16 }}>
                <InspectionSkeleton />
              </View>
            );
          }
          return (
            <View style={{ marginBottom: 16 }}>
              <InspectionItem inspection={item as Inspection} />
            </View>
          );
        }}
        onRefresh={handleRefresh}
        refreshing={refreshing}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
