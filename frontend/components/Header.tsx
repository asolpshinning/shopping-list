import Box from '@mui/material/Box';


const Header = (props: { title: string }) => (
    <Box component="header">
        {props.title}
    </Box>
);

export default Header;