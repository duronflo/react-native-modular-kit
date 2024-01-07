export const colorPalette = {
  mintGreen: "#98ff98",
  lightMintGreen: "#b0ffb0",
  darkMintGreen: "#79ff79",
  accentColor1: "#56cc52",
  accentColor2: "#4caf50",
  backgroundColor: "#edf7f2", // A light and vibrant shade of teal
};


export const welcomeStyles = () => {
  return {
    container: {
      backgroundColor: colorPalette.backgroundColor,
      justifyContent: "flex-start",
      padding: 10,
    },
    sectionTitle: {
      backgroundColor: colorPalette.mintGreen,
      padding: 10,
      paddingLeft: 20,
      borderRadius: 12,
      overflow: 'hidden'
    },
    sectionButton: {
      padding: 5,
      flexDirection: "row",
      alignItems: "center"
    },
    sectionInfo: {
      padding: 5,
      flexDirection: "row"
    },
    sectionSwitch: {
      padding: 5,
      flexDirection: "row",
      alignItems: "center",
    }
  }
};

