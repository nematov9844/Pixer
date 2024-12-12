/** @format */

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
	typography: {
		bodyText: {
			fontFamily: "Open Sans",
            maxWidth:"718px",
			fontSize: "16px",
			fontWeight: 400,
			lineHeight: "24px",
			textAlign: "center",
			textUnderlinePosition: "from-font",
			textDecorationSkipInk: "none",
		},
        heroText: {
			fontFamily: "Open Sans",
            maxWidth:"500px",
			fontSize: "16px",
			fontWeight: 400,
			lineHeight: "24px",
			textAlign: "start",
			textUnderlinePosition: "from-font",
			textDecorationSkipInk: "none",
		},
		heroTitle: {
			fontFamily: "Open Sans",
            maxWidth:"500px",
			fontSize: "30px",
			fontWeight: 700,
			lineHeight: "39px",
			textAlign: "start",
			textUnderlinePosition: "from-font",
			textDecorationSkipInk: "none",
		},

		sectionTitle: {
			fontFamily: "Open Sans",
			fontSize: "24px",
			fontWeight: 700,
			lineHeight: "31.2px",
			textAlign: "center",
			textUnderlinePosition: "from-font",
			textDecorationSkipInk: "none",
		},
        subSectionTitle: {
			fontFamily: "Open Sans",
			fontSize: "24px",
			fontWeight: 700,
			lineHeight: "31.2px",
			textAlign: "center",
			textUnderlinePosition: "from-font",
			textDecorationSkipInk: "none",
		},
	},
	components: {
		MuiButton: {
			variants: [
				{
					props: { variant: "primary" },
					style: {
						backgroundColor: "#00BAFC",
						color: "#FFFFFF",
						fontFamily: "Open Sans",
						fontWeight: 700,
						fontSize: "16px",
						textTransform: "none",
						"&:hover": {
							backgroundColor: "#00A5E5",
						},
					},
				},
			],
		},
	},
});

export default theme;
