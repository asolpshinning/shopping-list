import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { blue, grey } from '@mui/material/colors';

const headerStyle = {
    backgroundColor: blue["A100"],
    paddingY: 2.5,
    paddingX: 3.5,
    textTransform: 'uppercase',
    fontSize: 20,
    fontWeight: 550,
    letterSpacing: '0.25px',
};

const Header = () => (
    <Box component="header" sx={headerStyle}>
        <Typography sx={{ fontFamily: "monospace", fontSize: 22, color: grey[50] }}>
            Shopping List
        </Typography>
    </Box>
);

export default Header;