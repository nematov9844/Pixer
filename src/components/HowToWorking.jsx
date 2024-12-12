import { Box, Button, Typography } from "@mui/material";
import HowToWorkingDetails from "./HowToWorkingDetails";
import Img1 from '../assets/how1.png'
import Img2 from '../assets/how2.png'
import Img3 from '../assets/how3.png'
import Img4 from '../assets/how4.png'
import Img5 from '../assets/how5.png'
const cardData = [
    {
        id:1,
        img:Img1,
        title:"Talablarni aniqlab chiqamiz",
        desc:"Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis",
        col:"row"
    },
    {
        id:2,
        img:Img2,
        title:"Bir necha yechimlarni taklif qilamiz",
        desc:"Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis",
        col:"row-reverse"
    },
    {
        id:3,
        img:Img3,
        title:"Loyiha uchun vaqt belgilaymiz",
        desc:"Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis",
        col:"row"
    },
    {
        id:4,
        img:Img4,
        title:"A’lo sifat bilan bajarib topshiramiz",
        desc:"Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis",
        col:"row-reverse"
    },
    {
        id:5,
        img:Img5,
        title:"Qo’llab-quvvatlab boramiz",
        desc:"Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis",
        col:"row"
    }
]
export default function HowToWorking() {
  return (
<Box display={"flex"} maxWidth={"1440px"}  margin={"0 auto"} flexDirection={"column"} width={'100%'} alignItems={"center"} justifyContent={"center"}>
    <Typography variant="sectionTitle">Biz qanday ishlaymiz?</Typography>
    <Typography variant="bodyText">Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis lacinia ex, eget sollicitudin massa pellentesque in. Vivamus mattis eros at sem pulvinar</Typography>
    <Box width={"100%"}>
        {
cardData.map(item=>(
    <HowToWorkingDetails key={item.id} img={item.img} title={item.title} desc={item.desc} col={item.col}/>
))
        }
    </Box>
    <Button variant="primary">Buyurtma berish</Button>
</Box>
)
}
