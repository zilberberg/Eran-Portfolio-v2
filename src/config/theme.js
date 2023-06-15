const colors = {
    light: "#F1F6F9",
    lightBlue: "#DBDFEA",
    blue: "#394867",
    darkBlue: "#212A3E",
    darkGrey: "#9BA4B5",
}

const size = {
    small: "12px",
    medium: "16px",
    large: "20px",
    extraLarge: "30px",
    semiHuge: "40px",
    huge: "60px",
}

const weight = {
    light: 200,
    medium: 400,
    bold: 600,
    extraBold: 800,
}

//Base Theme
const theme = {
    colors,
    size,
    weight,
    breakpoints: ["400px", "600px", "900px", "1200px"],
    styledBreakPoints: {
        small: 400,
        med: 600,
        large: 900,
        xlarge: 1200,
    },
}

export default theme