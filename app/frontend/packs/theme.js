// create theme for app with global rules
var importTheme = {
    palette: {
        // primmary hp blue
        primary: { main: "#004875" },
    },
    typography: {
        useNextVariants: true,
        // use hpp font
        fontFamily: ['Montserrat', "sans-serif"],
        // use hp softer black for header
        h1: {
            color: '#222228',
        },
        // use hp gray for subtext
        subtitle1: {
            color: '#686870',
        },
    },
    overrides: {
        // use hp gray for textfield label
        MuiFormLabel: { // Name of the component ⚛️ / style sheet
            root: { // Name of the rule
                color: '#686870', // Some CSS
            },
        },
        // use hp black for textfield text
        MuiInput: {
            root: {
                color: '#222228',
            },
            // use hp gray for textfeild bottom line
            underline: {
                "&::before": {
                    "border-bottom": '1px solid #686870',
                }
            }
        },
    }
};


export default importTheme