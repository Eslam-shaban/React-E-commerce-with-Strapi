import { Box, Container, Drawer, IconButton, ListItemIcon, ListItemText, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import { Close, ElectricBikeOutlined, KeyboardArrowRightOutlined, LaptopChromebookOutlined, MenuBookOutlined, SportsEsportsOutlined, Window } from "@mui/icons-material";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Links from "./Links";
const Header3 = () => {

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const theme = useTheme();

  //drawer
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (

    <Container sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      mt: 5,
      gap: 2
    }}>

      <Box>
        <Button
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          sx={{
            width: '222px',
            // @ts-ignore
            bgcolor: theme.palette.myColor.main,
            // @ts-ignore
            color: theme.palette.text.secondary
          }}
        >
          <Window />
          <Typography
            sx={{
              padding: "0",
              textTransform: "capitalize",
              mx: 1
            }}>
            Categories
          </Typography>
          <Box flexGrow={1} />
          <KeyboardArrowRightOutlined />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
          // @ts-ignore
          sx={{ '.MuiPaper-root': { width: '220px', bgcolor: theme.palette.myColor.main } }}
        >
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <ElectricBikeOutlined fontSize="small" />
            </ListItemIcon>
            <ListItemText>
              Bikes
            </ListItemText>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <LaptopChromebookOutlined fontSize="small" />
            </ListItemIcon>
            <ListItemText>
              Electronics
            </ListItemText>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <MenuBookOutlined fontSize="small" />
            </ListItemIcon>
            <ListItemText>
              Books
            </ListItemText>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <SportsEsportsOutlined fontSize="small" />
            </ListItemIcon>
            <ListItemText>
              Games
            </ListItemText>
          </MenuItem>
        </Menu>
      </Box>
      {useMediaQuery('(min-width:1000px)') && (
        <Stack direction={'row'} gap={4} alignItems={'center'} >
          <Links title='Home' />
          <Links title='Mega Menu' />
          <Links title='Full Screen Menu' />
          <Links title='pages' />
          <Links title='User Acount' />
          <Links title=' Vendor Acount' />
        </Stack>)}


      {useMediaQuery('(max-width:1000px)') && (<IconButton onClick={toggleDrawer("top", true)}>
        <MenuIcon />
      </IconButton>)}

      <Drawer
        anchor={"top"}
        open={state["top"]}
        onClose={toggleDrawer("top", false)}
        sx={{ '.MuiPaper-root.css-1qdun2q-MuiPaper-root-MuiDrawer-paper': { height: "100%" } }}
      >

        <Box
          sx={{ width: 444, mx: "auto", mt: 6, position: 'relative', pt: 10 }}>
          <IconButton onClick={toggleDrawer("top", false)}
            sx={{
              position: 'absolute', top: 0, right: 8,
              ':hover': { color: 'red', rotate: '180deg', transition: '0.3s' }
            }}>
            <Close />
          </IconButton>

          {[{ mainLink: "Home", subLink: ['linl1', 'linl2', 'link3'] },
          { mainLink: "Mega menu", subLink: ['linl1', 'linl2', 'link3'] },
          { mainLink: "full screen menu", subLink: ['linl1', 'linl2', 'link3'] },
          { mainLink: "pages", subLink: ['linl1', 'linl2', 'link3'] },
          { mainLink: "user acount", subLink: ['linl1', 'linl2', 'link3'] },
          { mainLink: "vendor account", subLink: ['linl1', 'linl2', 'link3'] }].map((item) => {
            return (
              <Accordion key={item.mainLink} elevation={0} sx={{ bgcolor: 'initial' }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                  sx={{ '.MuiAccordionSummary-content': { m: 0, } }}
                >
                  {item.mainLink}
                </AccordionSummary>
                <AccordionDetails
                  sx={{ p: 0, m: 0 }}>
                  {item.subLink.map((link) => {
                    return (
                      <List key={link}
                        sx={{ p: 0, m: 0 }}>
                        <ListItem
                        >
                          <ListItemButton
                            sx={{ py: 0, m: 0 }}>
                            <ListItemText primary={link} />
                          </ListItemButton>
                        </ListItem>

                      </List>)
                  })}
                </AccordionDetails>
              </Accordion>
            )
          })}
        </Box>



      </Drawer>
    </Container>
  );
};

export default Header3;
