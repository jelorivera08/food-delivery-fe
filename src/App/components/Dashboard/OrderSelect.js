import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const QUANTITIES = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SimpleSelect({ menu, type, value, handleChange }) {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    age: '',
    name: 'hai',
  });

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);

  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  function getMenuItems(type) {
    if (type === 'Food') {
      return menu.map((menuItem) => {
        return <MenuItem value={menuItem.name}>{menuItem.name}</MenuItem>;
      });
    } else {
      return QUANTITIES.map((menuItem) => {
        return <MenuItem value={menuItem}>{menuItem}</MenuItem>;
      });
    }
  }

  return (
    <FormControl
      style={{ minWidth: type === 'Food' ? '200px' : '120px' }}
      variant="outlined"
      className={classes.formControl}
    >
      <InputLabel ref={inputLabel} htmlFor="outlined-age-simple">
        {type}
      </InputLabel>
      <Select
        value={value}
        onChange={handleChange}
        input={
          <OutlinedInput
            labelWidth={labelWidth}
            name={type}
            id="outlined-food-simple"
          />
        }
      >
        {getMenuItems(type)}
      </Select>
    </FormControl>
  );
}
