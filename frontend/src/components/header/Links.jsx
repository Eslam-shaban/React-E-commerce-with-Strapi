import { Box, Paper, Typography } from '@mui/material';
import ExpandMore from '@mui/icons-material/ExpandMore';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { KeyboardArrowRightOutlined } from '@mui/icons-material';
import PropTypes from 'prop-types';

const Links = ({ title }) => {
    return (

        <Box
            className=""
            sx={{
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                ':hover': {
                    '.show-when-hover': { display: 'block' },
                    cursor: 'pointer',
                }
            }}
        >
            <Typography variant="body1">
                {title}
                <ExpandMore sx={{ fontSize: '16px', ml: 1 }} />
            </Typography>
            <Box
                className='show-when-hover'
                sx={{
                    minWidth: '170px',
                    position: 'absolute',
                    top: '100%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'none',
                    zIndex: 2

                }}>

                <Paper
                    sx={{ mt: 2 }}
                >
                    <nav aria-label="secondary mailbox folders">
                        <List>
                            <ListItem disablePadding>
                                <ListItemButton
                                    sx={{ display: 'flex', p: 0, px: 1.5 }}>
                                    <ListItemText primary="Dashboard"
                                        sx={{ '.MuiTypography-root': { fontSize: '15px', fontWeight: 300 } }} />
                                    <Box flexGrow={1} />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding
                                sx={{ '&:hover .sub-link': { display: 'block' }, position: 'relative' }}
                            >
                                <ListItemButton
                                    sx={{ display: 'flex', p: 0, px: 1.5 }}>
                                    <ListItemText primary="products"
                                        sx={{ '.MuiTypography-root': { fontSize: '15px', fontWeight: 300 } }} />
                                    <Box flexGrow={1} />
                                    <KeyboardArrowRightOutlined fontSize='small' />
                                </ListItemButton>

                                <Box
                                    className='sub-link'
                                    sx={{ display: 'none', position: 'absolute', left: '100%', top: 0 }}>
                                    <Paper sx={{ ml: 1 }}>
                                        <nav aria-label="secondary mailbox folders">
                                            <List>
                                                <ListItem disablePadding>
                                                    <ListItemButton>
                                                        <ListItemText primary="Trash" />
                                                    </ListItemButton>
                                                </ListItem>
                                                <ListItem disablePadding>
                                                    <ListItemButton component="a" href="#simple-list">
                                                        <ListItemText primary="Spam" />
                                                    </ListItemButton>
                                                </ListItem>
                                            </List>
                                        </nav>
                                    </Paper>
                                </Box>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton
                                    sx={{ display: 'flex', p: 0, px: 1.5 }}>
                                    <ListItemText primary="orders"
                                        sx={{ '.MuiTypography-root': { fontSize: '15px', fontWeight: 300 } }} />
                                    <Box flexGrow={1} />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton
                                    sx={{ display: 'flex', p: 0, px: 1.5 }}>
                                    <ListItemText primary="profile"
                                        sx={{ '.MuiTypography-root': { fontSize: '15px', fontWeight: 300 } }} />
                                    <Box flexGrow={1} />
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </nav>

                </Paper >
            </Box>
        </Box>

    );
}
Links.propTypes = {
    title: PropTypes.string.isRequired,
};


export default Links;
