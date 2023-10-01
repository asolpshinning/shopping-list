import MuiButton from '@mui/material/Button';

type ButtonVariant = 'contained' | 'text';

const containedButtonStyle = {
    textTransform: 'unset',
    fontFamily: 'sans-serif',
    fontWeight: 600,
    backgroundColor: 'blue',
};

const textButtonStyle = {
    ...containedButtonStyle,
    backgroundColor: 'transparent',
    color: 'black',
    paddingRight: 4,
}

type ButtonProps = {
    variant?: ButtonVariant;
    children: React.ReactNode | React.ReactNode[];
    onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ children, variant = "contained", ...rest }) => (
    <MuiButton {...rest} variant={variant} sx={variant == "contained" ? containedButtonStyle : textButtonStyle}>
        {children}
    </MuiButton>
);

export default Button;