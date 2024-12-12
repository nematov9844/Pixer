import { Box, Typography } from "@mui/material";

export default function ServicesCard({img,title,desc}) {
  return (
    <Box width={"100%"} display={"flex"} flexDirection={"column"} gap-4 justifyContent={"center"} alignItems={"center"}  sx={{
        '@media (min-width:1024px)': {
            maxWidth: "350px",
        }
    }} boxShadow={"0px 0px 10px rgba(0,0,0,0.2)"} borderRadius={2} padding={2} >
        <Box>
            <img src={img} alt="" />
        </Box>
        <Box display={"flex"} flexDirection={"column"} gap-5>
            <Typography variant="subSectionTitle">{title}</Typography>
            <Typography variant="bodyText">{desc}</Typography>
        </Box>
    </Box>
  )
}
