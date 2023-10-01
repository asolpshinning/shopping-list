import { blue, grey } from "@mui/material/colors";

const container = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 560,
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderBottom: `5px solid ${blue["A100"]}`,
};

const header = {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: blue["A100"],
    color: 'white',
    paddingY: 2,
    paddingLeft: 4,
    paddingRight: 3.25,
    textTransform: 'uppercase',
    letterSpacing: '0.25px',
    fontSize: 18,
    fontWeight: 600,
    borderBottom: `1px solid ${blue["A100"]}`,
};

const headerIcon = { color: 'white' };

const padding = {
    paddingY: 2,
    paddingLeft: 4,
    paddingRight: 3.25,
};

const primaryText = {
    fontFamily: 'Nunito',
    fontSize: 18,
    fontWeight: 400,
    color: blue[500],
    lineHeight: '24px',
};

const secondaryText = {
    fontFamily: 'sans-serif',
    fontSize: 16,
    fontWeight: 400,
    color: grey[500],
    lineHeight: '22px',
};

const inputText = {};

const footer = {
    display: 'flex',
    justifyContent: 'end',
    paddingY: 2,
    paddingLeft: 4,
    paddingRight: 3.25,
    gap: 3,
};

const checkbox = {
    ...inputText,
    marginTop: 1.7,
};

const counter = {
    position: 'absolute',
    bottom: 0,
    right: 0,
    marginY: 1,
    marginX: 1.5,
    fontSize: '12px',
    color: blue[500],
};

export default {
    container,
    header,
    headerIcon,
    padding,
    primaryText,
    secondaryText,
    inputText,
    footer,
    checkbox,
    counter,
};