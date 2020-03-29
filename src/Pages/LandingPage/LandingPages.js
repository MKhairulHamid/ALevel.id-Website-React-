import React, { useState, useEffect } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import ModalVideo from 'react-modal-video';
import axios from 'axios'
import { API_URL } from '../../Support/API_URL';



// @material-ui/icons

// core components
import Parallax from "../../Component/Parallax";
import GridContainer from "../../Component/Grid/GridContainer.js";
import GridItem from "../../Component/Grid/GridItem.js";
import Button from "../../Component/CustomButtons/Button";

import styles from "../../Assets/Styling/Pages/landingPage";

// Section for this page
import ProductSection from "./Sections/ProductSection";
import TeamSection from "./Sections/TeamSection";
import WorkSection from "./Sections/WorkSection"


const useStyles = makeStyles(styles);

export default function LandingPage() {
  const classes = useStyles();

  const [openModal, setOpenModal] = useState(false)

  const [favCourse , setFavCourse] = useState({})
  const handleModalChange = () => {
      setOpenModal(!openModal)
  }

  useEffect(()=>getFavCourse, []);

  const getFavCourse = () => {
      axios.get(`${API_URL}/courses/getfavcourse`)
        .then((res) =>{
            setFavCourse(res.data)

        })
        .catch((err)=> {
          console.log(err)
        })
  }
  return (
    <div>
      <Parallax filter image={require("../../Assets/Image/Landing-Page.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Better Grades, Better Opportunity</h1>
              <h4>
                    Prepare your Cambridge Exams for Better Grades and Better Opportunity.
                    We use one-by-one mentorship with apps guided learning powered by machine learning to maximize exams results for Cambridge International Exams.
              </h4>
              <br />
              <ModalVideo channel='youtube' isOpen={openModal} videoId='yrWlNWtEuIo' onClose={handleModalChange} />
              <Button
                color="danger"
                size="lg"
                onClick={handleModalChange}
              >
              <h1> {favCourse.map()} </h1>
              <i className="fas fa-play" />
                Watch Video
              </Button>
              
              
              
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <ProductSection />
          <TeamSection />
          <WorkSection />
  
          </div>
      </div>
    </div>
  );
}


 
