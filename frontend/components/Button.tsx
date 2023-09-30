import MuiButton from '@mui/material/Button';

type ButtonVariant = 'contained' | 'text';

type ButtonProps = {
    variant?: ButtonVariant;
    children: React.ReactNode | React.ReactNode[];
    onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ children, variant = "contained", ...rest }) => (
    <MuiButton {...rest} variant={variant}>
        {children}
    </MuiButton>
);

export default Button;