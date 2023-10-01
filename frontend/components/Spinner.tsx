import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Spinner = (props: { loading: boolean }) => {
    if (props.loading) {
        return (
            <Box sx={{ display: 'flex', marginTop: 14 }}>
                <CircularProgress
                    aria-label="loading"
                    size={100}
                    thickness={2}
                />
            </Box>
        );
    }
    return null;
};

export default Spinner;