import { colors } from "@/constants/colors";
import { StyleSheet } from "react-native";

export const splashStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 250,
    height: 250,
  },
});
