import React from 'react'
import { Textfield, Grid, InputAdornment, IconButton, TextField } from "@material-ui/core"
import Visiblity from "@material-ui/icons/Visibility"
import VisiblityOff from "@material-ui/icons/VisibilityOff"


const Input = ({ half, name, label, handleChange, autoFocus, type, handleShowPassword }) => {
  return (
    <Grid item xs={12} sm={half ? 6 : 12}>
      <TextField 
        name={name}
        onChange={handleChange}
        variant="outlined"
        required
        fullWidth
        label={label}
        autoFocus={autoFocus}
        type={type}
        InputProps={name === 'password' ? {
          endAdornment: (
            <InputAdornment postion='end' >
              <IconButton onClick={handleShowPassword}>
                {type === 'password' ? <Visiblity/> : <VisiblityOff/>}
              </IconButton>
            </InputAdornment>
          )
        }: null}
      />
    </Grid>
  )
}
export default Input
