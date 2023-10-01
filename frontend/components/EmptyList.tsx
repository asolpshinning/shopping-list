import Box from '@mui/material/Box';
import { grey } from '@mui/material/colors';

const containerStyle = {
    border: 1,
    borderRadius: 1,
    borderColor: grey[400],
    color: grey,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: 'Nunito',
    minWidth: 600,
    fontSize: 15,
    paddingTop: 10,
    paddingBottom: 15,
};

type EmptyListProps = {
    reveal: boolean;
    msg?: string;
    onClickAddItem?: () => void;
    children?: React.ReactNode;
};

const EmptyList: React.FC<EmptyListProps> = ({ reveal = false, msg = 'Your shopping list is empty :(', children }) => (
    reveal ?
        <Box sx={{ marginTop: 20 }}>
            <Box sx={containerStyle}>
                <Box>{msg}</Box>
                {children}
            </Box>
        </Box>
        : null
);

export default EmptyList;