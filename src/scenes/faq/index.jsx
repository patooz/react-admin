import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";


const FAQ = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode);

    return (
    <Box m="20px">
        <Header title="FAQ" subtitle="Frequently Asked Questions Page" />
        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    An Important Question 
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Quis officia in culpa anim id amet velit anim commodo magna ex ipsum. Exercitation velit amet amet dolore laboris eu voluptate. Et duis nisi ex qui exercitation. Lorem nulla magna est consectetur esse aute velit duis incididunt sint quis. 
                </Typography>
            </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    Why do i have Line break? 
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Quis officia in culpa anim id amet velit anim commodo magna ex ipsum. Exercitation velit amet amet dolore laboris eu voluptate. Et duis nisi ex qui exercitation. Lorem nulla magna est consectetur esse aute velit duis incididunt sint quis. 
                </Typography>
            </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    How did you do this? 
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Quis officia in culpa anim id amet velit anim commodo magna ex ipsum. Exercitation velit amet amet dolore laboris eu voluptate. Et duis nisi ex qui exercitation. Lorem nulla magna est consectetur esse aute velit duis incididunt sint quis. 
                </Typography>
            </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    Problem with page render 
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Quis officia in culpa anim id amet velit anim commodo magna ex ipsum. Exercitation velit amet amet dolore laboris eu voluptate. Et duis nisi ex qui exercitation. Lorem nulla magna est consectetur esse aute velit duis incididunt sint quis. 
                </Typography>
            </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    I cant open the folder 
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Quis officia in culpa anim id amet velit anim commodo magna ex ipsum. Exercitation velit amet amet dolore laboris eu voluptate. Et duis nisi ex qui exercitation. Lorem nulla magna est consectetur esse aute velit duis incididunt sint quis. 
                </Typography>
            </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    Who is this guy on tv? 
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Quis officia in culpa anim id amet velit anim commodo magna ex ipsum. Exercitation velit amet amet dolore laboris eu voluptate. Et duis nisi ex qui exercitation. Lorem nulla magna est consectetur esse aute velit duis incididunt sint quis. 
                </Typography>
            </AccordionDetails>
            </Accordion>

    </Box>
    )
}
export default FAQ;

