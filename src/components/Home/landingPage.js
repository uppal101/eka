import React from 'react';
import { Button, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './landingPage.css';
  
const LandingPage = () => (
  <Grid centered columns={2}>
    <Grid.Column className="home">
      <h2>Generic Landing Page</h2>
      <Link to={'/signup'}>
        <Button> Sign-up </Button>
      </Link>
    </Grid.Column>
  </Grid>
)

export default LandingPage;