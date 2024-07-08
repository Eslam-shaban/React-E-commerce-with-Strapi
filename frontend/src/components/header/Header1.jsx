import { useContext, useState } from "react";
import { ColorModeContext } from "../../theme";
import { Box, Container, IconButton, Stack, useTheme } from "@mui/material";
import { DarkModeOutlined, ExpandMore, LightModeOutlined } from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

const options = [
  'En',
  'AR',

];
const Header1 = () => {

  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };



  return (

    <Box sx={{
      bgcolor: "#2B3445",
      borderBottomLeftRadius: 4,
      borderBottomRightRadius: 4,
    }}>
      <Container>
        <Stack direction={"row"} alignItems={"center"}>
          <Typography
            sx={{
              mr: 2,
              p: "3px 10px",
              bgcolor: "#d23f57",
              borderRadius: "12px",
              fontsize: "10px",
              fontweight: "bold",
              color: "#fff",
            }}
            variant="body2"
          >
            Hot
          </Typography>

          <Typography
            sx={{
              fontsize: "12px",
              fontweight: "300",
              color: "#fff",
            }}
            variant="body2"
          >
            Free Express Shipping
          </Typography>
          <Box flexGrow={1}></Box>
          {/* light and dark mode */}
          <div>
            {theme.palette.mode === "light" ? (
              <IconButton
                onClick={() => {
                  localStorage.setItem(
                    "mode",
                    theme.palette.mode === "dark" ? "light" : "dark"
                  );
                  colorMode.toggleColorMode();
                }}
                color="inherit"
              >
                <LightModeOutlined sx={{ fontSize: "16px", color: "#fff" }} />
              </IconButton>
            ) : (
              <IconButton
                onClick={() => {
                  localStorage.setItem(
                    "mode",
                    theme.palette.mode === "dark" ? "light" : "dark"
                  );
                  colorMode.toggleColorMode();
                }}
                color="inherit"
              >
                <DarkModeOutlined sx={{ fontSize: "16px" }} />

              </IconButton>
            )}
          </div>

          <List
            component="nav"
            aria-label="Device settings"
            sx={{ p: 0, m: 0 }}
          >
            <ListItem
              id="lock-button"
              aria-haspopup="listbox"
              aria-controls="lock-menu"
              aria-label="when device is locked"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClickListItem}
              sx={{ "&:hover": { cursor: "pointer" }, px: 1 }}
            >
              <ListItemText
                sx={{ ".MuiTypography-root": { fontSize: "12px", color: "#fff" } }}
                secondary={options[selectedIndex]}
              />
              <ExpandMore sx={{ fontSize: "12px", color: "#fff" }} />
            </ListItem>
          </List>
          <Menu
            id="lock-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'lock-button',
              role: 'listbox',
            }}
          >
            {options.map((option, index) => (
              <MenuItem
                key={option}
                selected={index === selectedIndex}
                onClick={(event) => handleMenuItemClick(event, index)}
                sx={{ fontSize: "12px", padding: "3px 10px", minHeight: "10px" }}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>


          <XIcon
            sx={{
              fontSize: "16px",
              color: "#fff",
              mx: 1,
            }}
          />
          <FacebookIcon
            sx={{
              fontSize: "16px",
              color: "#fff",
              mx: 1,
            }}
          />
          <InstagramIcon
            sx={{
              fontSize: "16px",
              color: "#fff",
              mx: 1,
            }}
          />
        </Stack>
      </Container>
    </Box>


    // <Box
    //   sx={{
    //     bgcolor: "#2B3445",
    //   }}
    // >
    //   <Stack direction={"row"} alignItems={"center"}>
    //     <Typography
    //       sx={{
    //         mr: 2,
    //         p: "3px 10px",
    //         bgcolor: "#d23f57",
    //         borderRadius: "12px",
    //         fontsize: "10px",
    //         fontweight: "bold",
    //         color: "#fff",
    //       }}
    //       variant="body2"
    //     >
    //       Hot
    //     </Typography>

    //     <Typography
    //       sx={{
    //         fontsize: "12px",
    //         fontweight: "300",
    //         color: "#fff",
    //       }}
    //       variant="body2"
    //     >
    //       Free Express Shipping
    //     </Typography>

    //     <Box flexGrow={1}></Box>

    //     {/* dark nad light mode  */}
    //     <div>
    //       {theme.palette.mode === "light" ? (
    //         <IconButton
    //           onClick={() => {
    //             localStorage.setItem(
    //               "mode",
    //               theme.palette.mode === "dark" ? "light" : "dark"
    //             );
    //             colorMode.toggleColorMode();
    //           }}
    //           color="inherit"
    //         >
    //           <LightModeOutlined />
    //         </IconButton>
    //       ) : (
    //         <IconButton
    //           onClick={() => {
    //             localStorage.setItem(
    //               "mode",
    //               theme.palette.mode === "dark" ? "light" : "dark"
    //             );
    //             colorMode.toggleColorMode();
    //           }}
    //           color="inherit"
    //         >
    //           <DarkModeOutlined />
    //         </IconButton>
    //       )}
    //     </div>

    //     <XIcon
    //       sx={{
    //         fontSize: "16px",
    //         color: "fff",
    //         mx: 1,
    //       }}
    //     />
    //     <FacebookIcon
    //       sx={{
    //         fontSize: "16px",
    //         color: "fff",
    //         mx: 1,
    //       }}
    //     />
    //     <InstagramIcon
    //       sx={{
    //         fontSize: "16px",
    //         color: "fff",
    //         mx: 1,
    //       }}
    //     />
    //   </Stack>
    // </Box>
  );
};

export default Header1;
