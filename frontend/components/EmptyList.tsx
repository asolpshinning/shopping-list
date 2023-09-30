import Box from '@mui/material/Box';

type EmptyListProps = {
    reveal: boolean;
    msg?: string;
    onClickAddItem?: () => void;
    children?: React.ReactNode;
};

const EmptyList: React.FC<EmptyListProps> = ({ reveal = false, msg = 'Empty State :(', children }) => (
    reveal ?
        <Box>
            <Box>
                <Box>{msg}</Box>
                {children}
            </Box>
        </Box>
        : null
);

export default EmptyList;