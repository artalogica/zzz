import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  contentContainer: {
    padding: 20,
  },
  userName: {
    fontFamily: FONT.regular,
    fontSize: SIZES.large,
    color: COLORS.secondary,
  },
  log: {
    paddingTop: 20,
    fontFamily: FONT.medium,
    fontSize: SIZES.medium,
    textAlign: 'center',
    color: COLORS.secondary,
  },
  box: {
    width: 300,
    height: 300,
    marginLeft: 30,
    borderTopRightRadius: 20,
    borderTopLeftRadius:20,
    borderBottomRightRadius:20,
    borderBottomLeftRadius:20,
    borderColor: COLORS.lightWhite,
    borderWidth: 3,
    paddingBottom:30,
  },
  separator: {
    marginVertical: 20,
    borderColor: COLORS.secondary,
    borderWidth: 1,
    alignItems: 'center',
    marginLeft: 35,
    height: 1,
    width: '80%',
  },
  welcomeMessage: {
    paddingTop: 10,
    textAlign: 'center',
    fontFamily: FONT.medium,
    fontSize: SIZES.large,
    color: COLORS.primary,
    marginTop: 2,
  },
  searchContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: SIZES.large,
    height: 50,
  },
  searchWrapper: {
    flex: 1,
    backgroundColor: COLORS.white,
    marginRight: SIZES.small,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.medium,
    height: "100%",
  },
  searchInput: {
    fontFamily: FONT.regular,
    width: "100%",
    height: "100%",
    paddingHorizontal: SIZES.medium,
  },
  searchBtn: {
    width: 50,
    height: "100%",
    backgroundColor: COLORS.tertiary,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  searchBtnImage: {
    width: "50%",
    height: "50%",
    tintColor: COLORS.white,
  },
  tabsContainer: {
    width: "100%",
    marginTop: SIZES.medium,
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
