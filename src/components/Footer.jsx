import { Box, IconButton, Typography } from "@mui/material";
import TelegramIcon from '@mui/icons-material/Telegram';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer() {
    return (
        <Box
            bgcolor={"black"}
            color={"white"}
            width={"100%"}
            maxWidth={"1440px"}
            margin={"0 auto"}
            padding={5}
            ding={3}
            sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
                gap: 3,
            }}
        >
            <Box display={"flex"} flexDirection={"column"} gap={1}>
                <Typography variant="h6" fontWeight="bold">Copyright 2020</Typography>
                <Typography variant="body2">
                    Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis
                    lacinia ex, eget sollicitudin massa pellentesque in. Vivamus mattis eros at sem
                    pulvinar tincidunt.
                </Typography>
            </Box>

            <Box display={"flex"} flexDirection={"column"} gap={1}>
                <Typography variant="h6" fontWeight="bold">Sayt sahifalari</Typography>
                <Typography variant="body2">Bosh sahifa</Typography>
                <Typography variant="body2">Xizmatlar</Typography>
                <Typography variant="body2">Portfolio</Typography>
                <Typography variant="body2">Jamoa</Typography>
                <Typography variant="body2">Blog</Typography>
                <Typography variant="body2">Kontaktlar</Typography>
            </Box>

            <Box display={"flex"} flexDirection={"column"} gap={1}>
                <Typography variant="h6" fontWeight="bold">Biz internetda</Typography>

                <Box display="flex" alignItems="center" gap={1}>
                    <IconButton color="inherit" size="small">
                        <TelegramIcon />
                    </IconButton>
                    <Typography variant="body2">Telegram</Typography>
                </Box>

                <Box display="flex" alignItems="center" gap={1}>
                    <IconButton color="inherit" size="small">
                        <FacebookIcon />
                    </IconButton>
                    <Typography variant="body2">Facebook</Typography>
                </Box>

                <Box display="flex" alignItems="center" gap={1}>
                    <IconButton color="inherit" size="small">
                        <InstagramIcon />
                    </IconButton>
                    <Typography variant="body2">Instagram</Typography>
                </Box>
            </Box>
        </Box>
    );
}
