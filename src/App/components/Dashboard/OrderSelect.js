import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const QUANTITIES = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const useStyles = makeStyles((theme) => ({
  formControlFood: {
    margin: theme.spacing(1),
    minWidth: '200px',
    [theme.breakpoints.between('xs', 'md')]: {
      minWidth: '24%',
    },
  },
  formControlQuantity: {
    margin: theme.spacing(1),
    minWidth: '120px',
    [theme.breakpoints.between('xs', 'md')]: { minWidth: '21%' },
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function OrderSelect({ menu, type, value, handleChange }) {
  const classes = useStyles();

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);

  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  function getMenuItems(type) {
    if (type === 'Food') {
      return menu.map((menuItem) => {
        return (
          <MenuItem key={menuItem.name} value={menuItem.name}>
            {menuItem.name}
          </MenuItem>
        );
      });
    } else {
      return QUANTITIES.map((menuItem) => {
        return (
          <MenuItem key={menuItem} value={menuItem}>
            {menuItem}
          </MenuItem>
        );
      });
    }
  }

  return (
    <FormControl
      variant="outlined"
      className={
        type === 'Food' ? classes.formControlFood : classes.formControlQuantity
      }
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
