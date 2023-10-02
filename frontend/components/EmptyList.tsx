import { Typography } from '@mui/material';
import Box from '@mui/material/Box';

const containerStyle = {
    width: '614px',
    height: '290px',
    top: '174px',
    left: '333px',
    borderRadius: '5px',
    border: '1px solid #C6C6C6',
    backgroundColor: 'linear-gradient(0deg, #C6C6C6, #C6C6C6), linear-gradient(0deg, #FFFFFF, #FFFFFF)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 15,
    minWidth: 600,
}

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
                <Box>
                    <Typography sx={{
                        fontFamily: 'Nunito',
                        fontSize: '18px',
                        fontWeight: 400,
                        lineHeight: '24px',
                        letterSpacing: '-1.3038520263464193e-9px',
                        textAlign: 'center'
                    }}
                        variant="h2"
                    >

                        {msg}
                    </Typography>
                </Box>
                {children}
            </Box>
        </Box>
        : null
);

export default EmptyList;