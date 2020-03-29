import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "../../../Component/Grid/GridContainer";
import GridItem from "../../../Component/Grid/GridItem";
import Button from "../../../Component/CustomButtons/Button";
import Card from "../../../Component/Card/Card";
import CardBody from "../../../Component/Card/CardBody";
import CardFooter from "../../../Component/Card/CardFooter";

import styles from "../../../Assets/Styling/Components/teamStyle";

import team1 from "../../../Assets/Image/Hamid.png";
import team2 from "../../../Assets/Image/Christine.jpeg";
import team3 from "../../../Assets/Image/John.jpg";

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Our Favourite Teacher </h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team1} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                M Khairul Hamid
                <br />
                <small className={classes.smallTitle}>Mathematics and Business Study</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  With more than five year experience in teaching, the student will find 'aha!' moment that will make them enjoy every minutes of learning.
                </p>
              </CardBody>
              
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team2} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Christine Lavor
                <br />
                <small className={classes.smallTitle}> English </small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Teaching is her life calling. Experience more than 10 years in teaching english for students and professionals.
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team3} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Johns Hopskin
                <br />
                <small className={classes.smallTitle}> Chemistry </small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Johns have unique style in teaching, many students say that Johns can expalain complicated theory with simple languange and analogy.
                </p>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
