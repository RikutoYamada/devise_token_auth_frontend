import React from "react";

import { Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

import Header from "components/layouts/Header";

const useStyles = makeStyles(() => ({
  container: {
    maginTop: "3rem"
  }
}))

interface CommonLayoutProps {
  children: React.ReactElement
}

const CommonLayout = ({ children }: CommonLayoutProps) => {
  const classes = useStyles();

  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Container maxWidth="lg" className={classes.container}>
          <Grid container justifyContent="center">
            <Grid item>
              {children}
            </Grid>
          </Grid>
        </Container>
      </main>
    </>
  )
}

export default CommonLayout