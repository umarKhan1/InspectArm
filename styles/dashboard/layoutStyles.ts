import { StyleSheet, Platform, StatusBar } from 'react-native';
import { colors } from '../../constants/colors';
import { DRAWER_WIDTH } from '../../hooks/dashboard/useDrawer';

export const layoutStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.appBg,
  },
  headerSafeArea: {
    backgroundColor: colors.white,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    zIndex: 10,
  },
  header: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  headerButton: {
    padding: 8,
    marginLeft: -8,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.primary,
  },
  headerRight: {
    width: 40,
  },
  content: {
    flex: 1,
  },
  // Drawer panel styles — no zIndex needed, render order handles stacking
  drawer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    width: DRAWER_WIDTH,
    backgroundColor: colors.white,
    elevation: 16,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
  },
  // SafeAreaView with primary color so the notch/status bar area is filled
  drawerSafeAreaTop: {
    backgroundColor: colors.black,
  },
  // The visible header section below the safe area
  drawerHeader: {
    backgroundColor: colors.black,
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 20,
    flexDirection: 'column',
    alignItems: 'flex-start',
    borderBottomRightRadius: 20,
  },
  // The white body area below the header
  drawerBody: {
    flex: 1,
    backgroundColor: colors.white,
  },
  logoImage: {
    width: '70%',
    height: 80,
    resizeMode: 'cover',
    marginBottom: 10,
    alignItems: "center",
    justifyContent: 'center',
  },
  userInfo: {
    justifyContent: 'center',
  },
  userName: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.white,
    marginBottom: 4,
  },
  userEmail: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  drawerContent: {
    flex: 1,
    paddingTop: 16,
  },
  drawerSection: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.textLight,
    paddingHorizontal: 24,
    marginBottom: 12,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 14,
    paddingHorizontal: 24,
  },
  drawerItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  drawerItemText: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.text,
    marginLeft: 16,
  },
  drawerFooter: {
    paddingBottom: 24,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    paddingTop: 8,
  },
});
