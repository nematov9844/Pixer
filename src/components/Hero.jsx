import { Box, Button, Typography } from "@mui/material";

export default function Hero() {
    return (
        <Box
            display={"flex"}
            flexDirection={{ xs: "column-reverse", md: "row" }}
            width={"100%"}
            alignItems={{ xs: "center", md: "center" }}
            justifyContent={{ xs: "center", md: "space-between" }}
            height={{ xs: "auto", md: "70vh"  }}
            maxHeight={"500px"}
            gap={{ xs: 4, md: 0 }}
        maxWidth={"1440px"}
        margin={"0 auto"}
        >

            <Box
                width={{ xs: "100%", md: "50%" }}
                display={"flex"}
                flexDirection={"column"}
                justifyContent={{ xs: "center", md: "center" }}
                alignItems={{ xs: "center", md: "center" }}
                gap={{ xs: "20px", md: "20px" }}
            >
                <Box
                    maxWidth={{ xs: "90%", md: "500px" }}
                    display={"flex"}
                    flexDirection={"column"}
                    justifyContent={"center"}
                    alignItems={{ xs: "center", md: "start" }}
                    gap={"20px"}
                >
                    <Typography variant="heroTitle" textAlign={{ xs: "center", md: "left" }}>
                        Biznesingizni keyingi bosqichga olib chiqing
                    </Typography>
                    <Typography variant="heroText" textAlign={{ xs: "center", md: "left" }}>
                        Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis lacinia ex, eget sollicitudin massa pellentesque in. Vivamus mattis eros at sem pulvinar
                    </Typography>
                    <Button variant="primary">Xizmatlar bilan tanishish</Button>
                </Box>
            </Box>
            <Box
                width={{ xs: "90%", md: "50%" }}
                height={{ xs: "300px", md: "100%" }}
                padding={"20px"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
            >
                <Box
                    width={"100%"}
                    height={"100%"}
                    maxWidth={{ xs: "100%", md: "500px" }}
                    maxHeight={{ xs: "auto", md: "300px" }}
                    borderRadius={"10px"}
                    overflow={"hidden"}
                >
                    <iframe
                        width={"100%"}
                        height={"100%"}
                        src="https://www.youtube.com/embed/5mvCVJIZWtA?si=F7Ly6-ZECTz1ecLe"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    />
                </Box>
            </Box>
        </Box>
    );
}
