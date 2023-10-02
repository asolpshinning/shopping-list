import { Typography } from '@mui/material';
import Box from '@mui/material/Box';

const headerStyle = {
    backgroundColor: "#4D81B7",
    paddingY: 2.5,
    paddingX: 3.5,
    textTransform: 'uppercase',
    fontSize: 20,
    fontWeight: 550,
    letterSpacing: '0.25px',
    height: '64px',

};

const textStyle = {
    fontFamily: 'Dosis',
    fontSize: '18px',
    fontWeight: 600,
    lineHeight: '23px',
    letterSpacing: '0.25px',
    textAlign: 'left',
    color: '#FFFFFF'
}

const Header = () => (
    <Box component="header" sx={headerStyle}>
        <Typography sx={textStyle}>
            Shopping List
        </Typography>
    </Box>
);

export default Header;