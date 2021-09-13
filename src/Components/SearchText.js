import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { alpha, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({}));
const SearchText = ({setSearchText}) => { 
      const classes = useStyles();

    return (
        <div>
            <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              onChange = {(e) =>setSearchText (e.target.value)}
            />
          </div>
        </div>
    )
}

export default SearchText
