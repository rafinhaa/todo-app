import { StyleSheet } from "react-native";
import { globalStyles } from "../../styles/globalStyles";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderTopWidth: 1,
    borderTopColor: globalStyles.colors.gray400,
    alignItems: "center",
  },
  title: {
    fontFamily: globalStyles.fonts.bold,
    lineHeight: globalStyles.lineHeights.medium,
    fontSize: globalStyles.fontSizes.medium,
    color: globalStyles.colors.gray400,
  },
  subtitle: {
    fontFamily: globalStyles.fonts.regular,
    lineHeight: globalStyles.lineHeights.medium,
    fontSize: globalStyles.fontSizes.medium,
    color: globalStyles.colors.gray400,
  },
});
