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
    },
    modalView: {
      margin: 20,
      backgroundColor: colorPalette.backgroundColor,
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
      backgroundColor: colorPalette.lightMintGreen,
    },
    textStyle: {
      color: colorPalette.accentColor2,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    },
  }
};

