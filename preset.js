const colors = require("@livechat/design-system-colors");

const gray = {
  25: colors.gray25,
  50: colors.gray50,
  75: colors.gray75,
  100: colors.gray100,
  150: colors.gray150,
  200: colors.gray200,
  300: colors.gray300,
  400: colors.gray400,
  500: colors.gray500,
  600: colors.gray600,
  700: colors.gray700,
  800: colors.gray800,
  900: colors.gray900,
  950: colors.gray950,
};

const red = {
  50: colors.red50,
  100: colors.red100,
  200: colors.red200,
  300: colors.red300,
  400: colors.red400,
  500: colors.red500,
  600: colors.red600,
  700: colors.red700,
  800: colors.red800,
  900: colors.red900,
};

const blue = {
  50: colors.blue50,
  100: colors.blue100,
  200: colors.blue200,
  300: colors.blue300,
  400: colors.blue400,
  500: colors.blue500,
  600: colors.blue600,
  700: colors.blue700,
  800: colors.blue800,
  900: colors.blue900,
};

const green = {
  50: colors.green50,
  100: colors.green100,
  200: colors.green200,
  300: colors.green300,
  400: colors.green400,
  500: colors.green500,
  600: colors.green600,
  700: colors.green700,
  800: colors.green800,
  900: colors.green900,
};

const orange = {
  50: colors.orange50,
  100: colors.orange100,
  200: colors.orange200,
  300: colors.orange300,
  400: colors.orange400,
  500: colors.orange500,
  600: colors.orange600,
  700: colors.orange700,
  800: colors.orange800,
  900: colors.orange900,
};

const yellow = {
  50: colors.yellow50,
  100: colors.yellow100,
  200: colors.yellow200,
  300: colors.yellow300,
  400: colors.yellow400,
  500: colors.yellow500,
  600: colors.yellow600,
  700: colors.yellow700,
  800: colors.yellow800,
  900: colors.yellow900,
};

const purple = {
  50: colors.purple50,
  100: colors.purple100,
  200: colors.purple200,
  300: colors.purple300,
  400: colors.purple400,
  500: colors.purple500,
  600: colors.purple600,
  700: colors.purple700,
  800: colors.purple800,
  900: colors.purple900,
};

module.exports = {
  theme: {
    colors: {
      gray,
      red,
      blue,
      orange,
      yellow,
      purple,
      green,
      white: colors.white,
      transparent: "transparent",
      current: "currentColor",
    },
    fontFamily: {
      merriweather: ["Merriweather Sans", "sans-serif"],
      "source-sans": ["Source Sans Pro", "sans-serif"],
      monospace: ["monospace"],
    },
    fontSize: {
      xs: "13px",
      sm: "14px",
      body: "15px",
      lg: "16px",
      xl: "20px",
      "2xl": "24px",
      "3xl": "32px",
    },
  },
};
