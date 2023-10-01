import { blue, grey } from "@mui/material/colors";

const primaryText = {
    fontWeight: 600,
    fontFamily: 'Nunito',
};
const checkedPrimaryText = {
    ...primaryText,
    textDecoration: 'line-through',
    color: blue["A100"]
};
const secondaryText = {
    fontFamily: 'Nunito',
    fontSize: 14,
    color: grey[500],
    fontWeight: 600,
};
const checkedSecondaryText = {
    ...secondaryText,
    textDecoration: 'line-through',
};

export default {
    primaryText,
    checkedPrimaryText,
    secondaryText,
    checkedSecondaryText
};

