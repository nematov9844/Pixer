import { AppBar, Box, Button, Container, Drawer, IconButton, List, ListItem, ListItemText, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../assets/Logo.png';
import { useState } from 'react';

let pages = ["Bosh sahifa", "Xizmatlar", "Portfolio", "Jamoa", "Blog", "Kontaktlar"];

export default function Header() {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };

    return (
        <AppBar
            position="sticky"
            sx={{ backgroundColor: '#fff', borderBottom: '1px solid #393E46' }}>
            <Container maxWidth="lg">
                <Box display="flex" justifyContent="space-between" alignItems="center" py={2}>
                    {/* Logo */}
                    <Box>
                        <img src={Logo} alt="Logo" style={{ height: '30px' }} />
                    </Box>

                    {/* Desktop Menu */}
                    <Box display={{ xs: 'none', md: 'flex' }} gap="40px">
                        {pages.map((page) => (
                            <Typography key={page} variant="bodyText" sx={{ color: 'black', cursor: 'pointer' }}>
                                {page}
                            </Typography>
                        ))}
                    </Box>

                    {/* Mobile Menu Button */}
                    <Box display={{ xs: 'flex', md: 'none' }}>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            onClick={toggleDrawer(true)}
                        >
                            <MenuIcon color='info' sx={{ fontSize: '40px' }} />
                        </IconButton>
                        <Drawer
                            anchor="right"
                            open={drawerOpen}
                            onClose={toggleDrawer(false)}
                        >
                            <Box
                                sx={{ width: 250 }}
                                role="presentation"
                                onClick={toggleDrawer(false)}
                                onKeyDown={toggleDrawer(false)}
                            >
                                <List>
                                    {pages.map((page) => (
                                        <ListItem button key={page}>
                                            <ListItemText primary={page} />
                                        </ListItem>
                                    ))}
                                </List>
                            </Box>
                        </Drawer>
                    </Box>

                    {/* Contact Button */}
                    <Box display={{ xs: 'none', md: 'block' }}>
                        <Button variant="primary">
                            +998 90 921 37 11
                        </Button>
                    </Box>
                </Box>
            </Container>
        </AppBar>
    );
}
