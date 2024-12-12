import { Box, Button, Typography } from "@mui/material";
import Img1 from '../assets/card1.png'
import Img2 from '../assets/card2.png'
import Img3 from '../assets/card3.png'
import Img4 from '../assets/card4.png'
import Img5 from '../assets/card5.png'
import ServicesCard from "./ServicesCard";
let dataCard = [
    {
        id: 1,
        img: Img1,
        title: "Vebsayt tuzish",
        desc: "lorem ipsum"
    },
    {
        id: 2,
        img: Img2,
        title: "Telegram bot",
        desc: "lorem ipsum"
    },
    {
        id: 3,
        img: Img3,
        title: "SMM",
        desc: "lorem ipsum"
    },
    {
        id: 4,
        img: Img4,
        title: "Grafik dizayn",
        desc: "lorem ipsum"
    },
    {
        id: 5,
        img: Img5,
        title: "CRM tizimlar",
        desc: "lorem ipsum"
    },
]
export default function Services() {
    return (
        <Box width={"100%"} display={"flex"} maxWidth={"1440px"} margin={"0 auto"} flexDirection={"column"} gap={"20px"} justifyContent={"center"} alignItems={"center"}>
            <Typography variant="sectionTitle">Xizmatlar</Typography>
            <Typography variant="bodyText">Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis lacinia ex, eget sollicitudin massa pellentesque in. Vivamus mattis eros at sem pulvinar</Typography>
            <Box
                gap={4}
                sx={{
                    justifyContent: "center",
                    width: '100%',
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
                    '@media (max-width: 300px)': {
                        minWidth: '250px',
                        width: '90%',
                    },
                    '@media (max-width: 600px)': {
                        minWidth: '280px',
                        width: '80%',
                    },
                    '@media (min-width: 600px)': {
                        width: '80%',
                    },
                    '@media (min-width:1024px)': {
                        width: "100%",
                        display: 'flex',
                        flexWrap: "wrap",
                        justifyContent: "center"
                    }
                }}>
                {
                    dataCard.map(item => (
                        <ServicesCard key={item.id} title={item.title} desc={item.desc} img={item.img} />
                    ))
                }
            </Box>
            <Box sx={{
                display: "flex", flexDirection: {
                    xs: "column",
                    md: "row",
                },
                justifyContent: 'center',
                alignItems: "center",
                gap: "20px"

            }}>
                <Button variant="primary">Buyurtma berish</Button>
                <Typography color="#00BAFC" fontSize={"16px"} fontWeight={400}>Xizmatlar sahifasiga o’tish</Typography>
            </Box>
        </Box >
    )
}
