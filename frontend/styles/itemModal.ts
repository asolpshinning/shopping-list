import { grey } from "@mui/material/colors";

const container = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    borderBottom: `5px solid #4D81B7`,
    width: 560,
    boxShadow: 24,
};

const header = {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: "#ffffff",
    color: 'black',
    paddingY: 2,
    paddingLeft: 4,
    paddingRight: 3.25,
    textTransform: 'uppercase',
    letterSpacing: '0.25px',
    fontSize: 18,
    fontWeight: 600,
    borderBottom: `1px solid ${grey[300]}`,
};

const headerIcon = { color: 'black' };

const padding = {
    paddingY: 2,
    paddingLeft: 4,
    paddingRight: 3.25,
};

const primaryText = {
    fontFamily: 'Nunito',
    fontSize: 18,
    fontWeight: 400,
    color: 'black',
    lineHeight: '24px',
};

const secondaryText = {
    fontFamily: 'Nunito',
    fontSize: 16,
    fontWeight: 400,
    color: grey[500],
    lineHeight: '22px',
    paddingBottom: 1,
};

const inputText = {
    color: grey[500],
};

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
    color: 'black',
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