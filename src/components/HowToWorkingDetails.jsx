import { Box, Typography } from '@mui/material';

export default function HowToWorkingDetails({ img, title, desc, col }) {
    return (
        <Box
            width="100%"
            gap={5}
            display="flex"
            flexDirection={col}
            alignItems="center"
            justifyContent="center"
            sx={{
                flexDirection: {
                    xs: 'column', 
                    sm: col, 
                },
            }}
        >
            <Box
                width="50%"
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                <img src={img} alt="" />
            </Box>
            <Box
                width="50%"
                display="flex"
                flexDirection="column"
                gap={2}
                justifyContent="center"
                alignItems="start"
            >
                <Typography variant="subSectionTitle">{title}</Typography>
                <Typography variant="heroText">{desc}</Typography>
            </Box>
        </Box>
    );
}
