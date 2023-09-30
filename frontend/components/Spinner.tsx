import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Spinner = (props: { loading: boolean }) => {
    if (props.loading) {
        return (
            <Box>
                <CircularProgress
                    aria-label="loading"
                    size={120}
                    thickness={5}
                />
            </Box>
        );
    }
    return null;
};

export default Spinner;