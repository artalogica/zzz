import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: SIZES.large,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: FONT.medium, 
    color: COLORS.primary,
  },
  text2: {
    fontFamily: FONT.bold, 
    fontSize: SIZES.large,
    color: COLORS.secondary,
  },
  header: {
    fontFamily: FONT.medium, 
    fontSize: SIZES.large,
    color: COLORS.secondary,
    paddingBottom: 20,
  },
  tabsContainer: {
    width: "100%",
    marginTop: SIZES.medium,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  tab: (activeJobType, item) => ({
    paddingVertical: SIZES.small / 2,
    paddingHorizontal: SIZES.small,
    borderRadius: SIZES.medium,
    borderWidth: 1,
    borderColor: activeJobType === item ? COLORS.secondary : COLORS.gray2,
  }),
  tabText: (activeJobType, item) => ({
    fontFamily: FONT.medium,
    color: activeJobType === item ? COLORS.secondary : COLORS.gray2,
  }),
});

export default styles;