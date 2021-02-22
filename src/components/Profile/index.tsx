import React from 'react';
import moment from 'moment';
import { useFormik } from 'formik';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Container,
  Divider,
  Grid,
  makeStyles,
  TextField,
  Typography
} from '@material-ui/core';

import Page from '../Common/Page';
import DashboardWrapper from '../Wrappers/DashboardWrapper';

import { AppState } from '../../redux/reducers';
import { ProfileSchema } from '../../utils/validationSchemas';
import { commonTransitionVariants } from '../../utils/animationVariants';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
  avatar: {
    height: 100,
    width: 100
  },
  uploadForm: {
    width: '100%',
    margin: '10px 0',
    textAlign: 'center'
  },
  uploadInput: {
    color: '#fff',
    backgroundColor: '#3f51b5',
    borderRadius: '4px',
    padding: '6px 16px',
    fontSize: '0.875rem',
    boxShadow: '0 0 1px 0 rgb(0 0 0 / 31%), 0 2px 2px -2px rgb(0 0 0 / 25%)',
    transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,' +
      'box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,' +
      'border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: 'rgb(44, 56, 126)'
    }
  }
}));

const Profile = () => {
  const classes = useStyles();

  const { profile } = useSelector((state: AppState) => state);

  const currentUser = profile.profile?.user;

  const initialValues = {
    firstName: '',
    lastName: '',
    email: ''
  };

  const handlePhotoUpload = async (event: any) => {
    console.log(event.target.files[0]);
  }

  const handleSubmit = async (values: any) => {
    console.log(values);
  };

  const formik = useFormik({
    initialValues,
    validationSchema: ProfileSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true
  });

  return (
    <DashboardWrapper>
      <Page className={classes.root} title='Profile'>
        <motion.div
          variants={commonTransitionVariants}
          initial='initial'
          animate='animate'
        >
          <Container maxWidth='lg'>
            <Grid container spacing={3}>
              <Grid item lg={4} md={6} xs={12}>
                <Card>
                  <CardContent>
                    <Box alignItems='center' display='flex' flexDirection='column'>
                      <Avatar className={classes.avatar} src={currentUser?.photo} />

                      <Typography color='textPrimary' gutterBottom variant='h3'>
                        {`${currentUser?.firstName} ${currentUser?.lastName}`}
                      </Typography>

                      <Typography color='textSecondary' variant='body1'>
                        {currentUser?.isAdmin ? 'Admin' : 'Member'}
                      </Typography>

                      <Typography color='textSecondary' variant='body1'>
                        {moment(currentUser?.dateJoined).format('lll')}
                      </Typography>
                    </Box>
                  </CardContent>

                  <Divider />

                  <CardActions>
                    <form className={classes.uploadForm} encType="multipart/form-data">
                      <label htmlFor="photo" className={classes.uploadInput}>
                        UPLOAD PHOTO
                      </label>

                      <input
                        id="photo"
                        name="photo"
                        type="file"
                        hidden
                        onChange={handlePhotoUpload}
                      />
                    </form>
                  </CardActions>
                </Card>
              </Grid>

              <Grid item lg={8} md={6} xs={12}>
                <form autoComplete='off' noValidate>
                  <Card>
                    <CardHeader
                      subheader='The information can be edited'
                      title='Profile'
                    />

                    <Divider />

                    <CardContent>
                      <Grid container spacing={3}>
                        <Grid item md={6} xs={12}>
                          <TextField
                            fullWidth
                            helperText='Please specify the first name'
                            label='First name'
                            name='firstName'
                            onChange={formik.handleChange}
                            required
                            value={formik.values.firstName}
                            variant='outlined'
                          />
                        </Grid>

                        <Grid item md={6} xs={12}>
                          <TextField
                            fullWidth
                            label='Last name'
                            name='lastName'
                            onChange={formik.handleChange}
                            required
                            value={formik.values.lastName}
                            variant='outlined'
                          />
                        </Grid>

                        <Grid item md={12} xs={12}>
                          <TextField
                            fullWidth
                            label='Email Address'
                            name='email'
                            onChange={formik.handleChange}
                            required
                            value={formik.values.email}
                            variant='outlined'
                          />
                        </Grid>
                      </Grid>
                    </CardContent>

                    <Divider />

                    <Box display='flex' justifyContent='flex-end' p={2}>
                      <Button color='primary' variant='contained'>
                        Save details
                      </Button>
                    </Box>
                  </Card>
                </form>
              </Grid>
            </Grid>
          </Container>
        </motion.div>
      </Page>
    </DashboardWrapper>
  );
};

export default Profile;
