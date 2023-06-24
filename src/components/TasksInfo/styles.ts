import { StyleSheet } from "react-native";
import { globalStyles } from "../../styles/globalStyles";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  info: {
    fontSize: globalStyles.fontSizes.medium,
    fontFamily: globalStyles.fonts.bold,
    lineHeight: globalStyles.lineHeights.medium,
  },
  taskWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  count: {
    backgroundColor: globalStyles.colors.gray400,
    borderRadius: 999,
    width: 25,
    height: 19,
    justifyContent: "center",
    alignItems: "center",
  },
  countText: {
    fontSize: globalStyles.fontSizes.small,
    fontFamily: globalStyles.fonts.bold,
    lineHeight: globalStyles.lineHeights.small,
    color: globalStyles.colors.gray200,
  },
});
