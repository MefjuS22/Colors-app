import { TextField } from '@mui/material';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

export const InputRow = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [debouncedValue, setDebouncedValue] = useState('');
    // const [timerId, setTimerId] = useState<NodeJS.Timeout | null>(null);

    const handleChange = (value: string) => {
        if (value.trim().length === 0) {
            console.log('puste');

            setSearchParams(searchParams => {
                searchParams.delete('id');
                return searchParams;
            });
            return;
        }

        setSearchParams({
            id: value,
        });
        setDebouncedValue(value);
    };

    const getValue = () => {
        if (searchParams.get('id') && !searchParams.has('page')) {
            return searchParams.get('id');
        }
        return '';
    };

    useEffect(() => {
        // const timer = setTimeout(() => {
        //   searchParams.set('id', debouncedValue)
        // }, 500);
        // setTimerId(timer);
        // return () => {
        //   if (timerId) clearTimeout(timerId);
        // };
    }, [debouncedValue]);

    return (
        <TextField
            label="id"
            variant="outlined"
            size="small"
            color="primary"
            type="number"
            value={getValue()}
            onChange={e => handleChange(e.target.value)}
            inputProps={{
                min: 1,
            }}
        />
    );
};