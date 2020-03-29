import React, { memo  }  from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Button from '../../../Component/CustomButtons/Button'



const AddressForm = memo ( ({user, address, bankName, handleOnChangeAddress, handleOnChangeBankName }) => {
  
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Student Profile
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} >
          <Typography variant="h6" gutterBottom>
            Student Name : {user.firstName} {user.lastName}
            <br></br>
            Email : {user.email}
          </Typography>
      
        { user.address ? 
          <Grid>
          <Typography variant="h6" gutterBottom>
              Home Address : {user.address} 
          </Typography>
          <Button href="/myprofile" color='twitter' >
             Edit Data on Profile Page
          </Button>
          </Grid>
          :
          <Grid>
          <TextField
            required
            defaultValue={address}
            fullWidth
            onChange={handleOnChangeAddress}
            required
          />
          <Typography variant="h7" gutterBottom>
              You need to insert complete address included Kelurahan and Kecamatan
          </Typography>
          </Grid>
        }
        </Grid>
      </Grid>
      <br></br>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
            <InputLabel id="demo-simple-select-label"> Method</InputLabel>
            <Select 
                inputProps={{
                    name: 'Payment Method',
                    id: 'demo-simple-select-label',
                }} 
                fullWidth
                defaultValue={10}
                >
                <option value={10}>Bank Transfer</option>
            </Select>
            <Typography variant="h7" gutterBottom> Currently we only support Bank Transfer </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
        <InputLabel id="demo-simple-select-label"> Bank Name</InputLabel>
          <TextField 
            required
            defaultValue={bankName} 
            onChange={handleOnChangeBankName}
            fullWidth />
        </Grid>
      </Grid>
    </React.Fragment>
  );
})

export default AddressForm;