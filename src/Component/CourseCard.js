import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Loader from 'react-loader-spinner';

const CourseCard = (props) => {
    const useStyles = makeStyles({
        root: {
          maxWidth: 330,
        },
        media: {
          height: 160,
        },
      });
    const classes = useStyles();

    return (
        
        <Card className={classes.root} style={{ marginLeft :'10px', marginRight: '10px', marginTop: '10px', marginButtom: '10px'}}>
            <CardActionArea>
                <CardMedia
                className={classes.media}
                image={props.image}
                title={props.name}
                />
                <CardContent>
                <Typography gutterBottom variant="h6" component="h2">
                    {props.name} ({props.subject} - {props.program})
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                   This {props.name} is preparing you for Cambridge {props.program} Examination for {props.subject}. This program is designed for one {props.duration} long.
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                See Course Detail
                </Button>
            </CardActions>
        </Card>
    )
}

export default CourseCard;

// import {
    //     Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button
    // } from 'reactstrap';


{/* <div style={{textAlign: 'center', justifyContent: 'center' , height: '200px', width: '700px' }} className='m-3' >
            <Card className='box-glow'>
                <div className='d-flex justify-content-center'>
                    {
                        props.image?
                        <CardImg top src={props.image} alt="Card Image Cap" style={{height: '100px', width:'190px'}} />
                        :
                        <Loader type="Circles" color="#5A6268" height={80} width={80} />
                    }
                </div>
                <CardBody>
                    <CardTitle style={{fontWeight: 'bolder', fontSize:'14px'}}> {props.name} </CardTitle>
                    <CardText> Prepartion for {props.subject} - {props.program} for one {props.duration} </CardText>
                </CardBody>
            </Card>
        </div> */}