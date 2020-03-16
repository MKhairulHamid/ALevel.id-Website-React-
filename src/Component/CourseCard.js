import React from 'react';
import {
    Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button
} from 'reactstrap';
import Loader from 'react-loader-spinner'

const CourseCard = (props) => {
    return (
        <div style={{textAlign: 'center', justifyContent: 'center', width: '250px'}} className='m-3' >
            <Card className='box-glow'>
                <div className='d-flex justify-content-center'>
                    {
                        props.image?
                        <CardImg top src={props.image} alt="Card Image Cap" style={{height: '150px', width:'200px'}} />
                        :
                        <Loader type="Circles" color="#5A6268" height={80} width={80} />
                    }
                </div>
                <CardBody>
                    <CardTitle style={{fontWeight: 'bolder', fontSize:'14px', height: '60px'}}> {props.name} </CardTitle>
                    <Button style={{color: 'orange', fontWeight: 'bolder', fontSize:'14px'}}> {props.subject} </Button>
                    <CardText style={{fontSize: '16px'}}> Rp. {props.price.toLocaleString()} </CardText>

                </CardBody>
            </Card>
        </div>
    )
}

export default CourseCard;