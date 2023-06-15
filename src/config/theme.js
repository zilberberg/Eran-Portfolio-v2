const colors = {
    light: "#FAFAFA",
    purple: "#8349ED",
    dark: "#222222",
    pink: "#EE4D79",
}

const size = {
    small: "12px",
    medium: "16px",
    large: "20px",
    extraLarge: "30px",
    semiHuge: "40px",
    huge: "100px",
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