import { StyleSheet } from "react-native";
import { globalStyles } from "../../styles/globalStyles";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 12,
    backgroundColor: globalStyles.colors.gray500,
    borderRadius: 8,
    alignItems: "center",
  },
  doneButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: globalStyles.colors.gray500,
    borderRadius: 8,
  },
  task: {
    flex: 1,
    fontFamily: globalStyles.fonts.regular,
    lineHeight: globalStyles.lineHeights.medium,
    fontSize: globalStyles.fontSizes.medium,
  },
  taskDone: {
    color: globalStyles.colors.gray300,
    textDecorationLine: "line-through",
  },
  taskOpen: {
    color: globalStyles.colors.gray100,
  },
});
