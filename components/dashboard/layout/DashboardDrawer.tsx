import React from 'react';
import { View, Text, Pressable, Animated, SafeAreaView, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { LayoutDashboard, FileText, User, LogOut, ChevronRight } from 'lucide-react-native';
import { colors } from '../../../constants/colors';
import { layoutStyles as styles } from '../../../styles/dashboard/layoutStyles';

interface DashboardDrawerProps {
  drawerOpen: boolean;
  closeDrawer: () => void;
  slideAnim: any;
  fadeAnim: any;
  handleNavigation: (path: string) => void;
  handleLogout: () => void;
}

const DrawerItem = ({ icon: Icon, label, onPress, isLogout = false }: any) => (
  <Pressable
    style={({ pressed }) => [
      styles.drawerItem,
      pressed && { backgroundColor: 'rgba(0,0,0,0.05)' }
    ]}
    onPress={onPress}
  >
    <View style={styles.drawerItemLeft}>
      <Icon size={22} color={isLogout ? colors.red : colors.textLight} />
      <Text style={[styles.drawerItemText, isLogout && { color: colors.red }]}>{label}</Text>
    </View>
    {!isLogout && <ChevronRight size={18} color={colors.textLight} />}
  </Pressable>
);

export function DashboardDrawer({ 
  drawerOpen, 
  closeDrawer, 
  slideAnim, 
  fadeAnim, 
  handleNavigation, 
  handleLogout 
}: DashboardDrawerProps) {
  return (
    <View
      style={[StyleSheet.absoluteFill, { zIndex: 999 }]}
      pointerEvents={drawerOpen ? 'auto' : 'none'}
    >
      {/* Dark backdrop — tapping it closes the drawer */}
      <TouchableOpacity
        activeOpacity={1}
        style={StyleSheet.absoluteFill}
        onPress={closeDrawer}
        disabled={!drawerOpen}
      >
        <Animated.View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            opacity: fadeAnim,
          }}
        />
      </TouchableOpacity>

      {/* Drawer panel — rendered after overlay so it sits on top */}
      <Animated.View
        style={[
          styles.drawer,
          { transform: [{ translateX: slideAnim }] },
        ]}
      >
        <SafeAreaView style={styles.drawerSafeAreaTop}>
          <View style={styles.drawerHeader}>
            <Image
              source={require('../../../assets/images/splash-icon.png')}
              style={styles.logoImage}
              resizeMode="contain"
            />
            <View style={styles.userInfo}>
              <Text style={styles.userName}>Dummy User</Text>
              <Text style={styles.userEmail}>user@inspectarm.com</Text>
            </View>
          </View>
        </SafeAreaView>

        <View style={styles.drawerBody}>
          <View style={styles.drawerContent}>
            <View style={styles.drawerSection}>
              <Text style={styles.sectionTitle}>Main Menu</Text>
              <DrawerItem icon={LayoutDashboard} label="Dashboard" onPress={() => handleNavigation('/dashboard')} />
              <DrawerItem icon={FileText} label="Inspection" onPress={() => handleNavigation('/dashboard/inspections')} />
              <DrawerItem icon={User} label="Profile" onPress={() => handleNavigation('/dashboard/profile')} />
            </View>
          </View>

          <View style={styles.drawerFooter}>
            <DrawerItem icon={LogOut} label="Logout" onPress={handleLogout} isLogout />
          </View>
        </View>
      </Animated.View>
    </View>
  );
}
