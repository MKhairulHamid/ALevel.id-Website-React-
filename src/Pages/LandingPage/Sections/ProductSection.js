import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

import TrendingUp from "@material-ui/icons/TrendingUp";
import PersonOutline from "@material-ui/icons/PersonOutline";
import Devices from "@material-ui/icons/Devices";

// core components
import GridContainer from "../../../Component/Grid/GridContainer";
import GridItem from "../../../Component/Grid/GridItem";
import InfoArea from "../../../Component/InfoArea/InfoArea";

import styles from "../../../Assets/Styling/Components/productStyle";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Why We Are Better</h2>
          <h5 className={classes.description}>
            ALevel.id prepare student to join international higher education by prepare 
            their A Level Certificate from Cambridge International Examination.
            A Level Certificate recognized by top university around the globe.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Personalized Learning"
              description="Every teacher in ALevel.id have deep understanding in subject and fast adaptability in teaching method. We make sure stundent get the best approach in their learning journey "
              icon={PersonOutline}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Progress Focused"
              description="We understand that student have different pace in learning, so whatever they positition we make sure they always making progress"
              icon={TrendingUp}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Tech Assisted "
              description="Our personalized method assisted by latest apps technology to keep student progress in track and make sure continuability "
              icon={Devices}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
      </div>
    </div>
  );
}
