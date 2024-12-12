import { Box, Input, MenuItem, Select, Typography } from "@mui/material";

export default function Order() {
    return (
        <Box
            bgcolor={"#00BAFC"}
            width={"100%"}
            maxWidth={"1440px"}
            maxHeight={"80vh"}
            height={"100%"}
            padding={"40px 20px"}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
        >
            <Typography
                variant="h4"
                color="white"
                marginBottom={2}
                textAlign="center"
                fontWeight="bold"
            >
                Buyurtma berish
            </Typography>
            <Typography
                variant="body1"
                color="white"
                textAlign="center"
                marginBottom={4}
                maxWidth="600px"
            >
                Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam
                facilisis lacinia ex, eget sollicitudin massa pellentesque in. Vivamus
                mattis eros at sem pulvinar.
            </Typography>

            <Box
                display={"flex"}
                flexDirection={"column"}
                bgcolor={"white"}
                borderRadius={"10px"}
                padding={3}
                maxWidth={"400px"}
                width={"100%"}
                boxShadow={"0 4px 12px rgba(0, 0, 0, 0.1)"}
            >
                <Input
                    placeholder="Ismingiz"
                    disableUnderline
                    sx={{
                        backgroundColor: "#f5f5f5",
                        padding: "10px 15px",
                        borderRadius: "5px",
                        marginBottom: 2,
                        fontSize: "16px",
                    }}
                />

                <Input
                    placeholder="Telefon raqamingiz"
                    disableUnderline
                    sx={{
                        backgroundColor: "#f5f5f5",
                        padding: "10px 15px",
                        borderRadius: "5px",
                        marginBottom: 2,
                        fontSize: "16px",
                    }}
                />

                <Select
                    defaultValue=""
                    displayEmpty
                    sx={{
                        backgroundColor: "#f5f5f5",
                        padding: "0px 12px",
                        borderRadius: "5px",
                        fontSize: "16px",
                        outline:"none"
                    }}
                >
                    <MenuItem value="" disabled>
                        Xizmat turi
                    </MenuItem>
                    <MenuItem value="xizmat1">Xizmat 1</MenuItem>
                    <MenuItem value="xizmat2">Xizmat 2</MenuItem>
                    <MenuItem value="xizmat3">Xizmat 3</MenuItem>
                </Select>
            </Box>
        </Box>
    );
}
