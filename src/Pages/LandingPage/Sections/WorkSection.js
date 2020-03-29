import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "../../../Component/Grid/GridContainer";
import GridItem from "../../../Component/Grid/GridItem";
import CustomInput from "../../../Component/CustomInput/CustomInput";
import Button from "../../../Component/CustomButtons/Button";

import styles from "../../../Assets/Styling/Components/workStyle";

const useStyles = makeStyles(styles);

export default function WorkSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}> Learn With Us</h2>
          <h4 className={classes.description}>
            Every courses that we offer is tailored to student need. In couses section we group courses based on subject and program to identify initial need of student.
          </h4>
              <div align="center" style={{ marginTop: '20px'}}>
                  <Button href="/courses" color="primary" > See All Course </Button>
              </div>
        </GridItem>
      </GridContainer>
    </div>
  );
}
