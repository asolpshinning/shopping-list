import { useState, ReactNode, ChangeEvent } from 'react';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';

const generateNumberArrayUpToAmount = (amount: number): number[] => {
    const arr: number[] = [];
    let i = 1;
    while (i <= amount) {
        arr.push(i);
        i++;
    }
    return arr;
};


type DropDownSelectProps = {
    value?: number;
    onSelect?: (event: ChangeEvent<HTMLInputElement>, child: ReactNode) => void;
    amount?: number;
    error?: boolean;
    errorText?: string;
};

const DropDownSelect: React.FC<DropDownSelectProps> = ({
    value = 0,
    onSelect = () => { },
    amount = 5,
    error = false,
    errorText = '',
}) => {
    const [selValue, setValue] = useState<number>(value);
    const handleChange = (e: SelectChangeEvent, child: ReactNode) => {
        setValue(Number(e.target.value));
        onSelect(e as ChangeEvent<HTMLInputElement>, child);
    };
    return (
        <FormControl fullWidth sx={{ marginTop: 1.7 }} error={error}>
            <Select
                labelId="item-amount-label"
                id="item-amount-select"
                value={String(selValue)}
                inputProps={{
                    sx: { color: 'black' },
                    name: 'quantity',
                }}
                onChange={handleChange}
            >
                <MenuItem value={0} disabled>
                    How Many?
                </MenuItem>
                {generateNumberArrayUpToAmount(amount).map((num: number) => (
                    <MenuItem data-field="amount" key={num} value={num}>
                        {num}
                    </MenuItem>
                ))}
            </Select>
            <FormHelperText>{errorText}</FormHelperText>
        </FormControl>
    );
};

export default DropDownSelect;