import React from 'react';
import { Jumbotron, Button } from 'reactstrap';



class LandingPage extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div>
                
            <section>
                    <div>
                            <Jumbotron>
                            <h1 className="display-1">Better Grades, Better Opportunity</h1>
                            <p className="lead">Prepare your Cambridge Exams for Better Grades and Better Opportunity </p>
                            <hr className="my-2" />
                            <p> We use one-by-one mentorship with apps guided learning powered by machine learning to maximize exams results for Cambridge International Exams.</p>
                            <p className="lead">
                            <Button color="primary">Try ALevel.id</Button>
                            <Button color="primary">See The Demo </Button>
                            </p>
                            </Jumbotron>
                    </div>
                    </section>
                    <section>
                        <div>
                            <h1>
                                Benefit Section
                            </h1>
                        </div>
                    </section>
                    <section>
                        <div>
                            <h1>
                                How to Use Section
                            </h1>
                        </div>
                    </section>
                    <section>
                        <div>
                            <h1>
                                Testimoni & Experience Section
                            </h1>
                        </div>
                    </section>
                    <section>
                        <div>
                            <h1>
                                Blogs
                            </h1>
                        </div>
                    </section>
                    <section>
                        <div>
                            <h1>
                                Call to Action
                            </h1>
                        </div>
                    </section>
                    <section>
                        <div>
                            <h1>
                                Website Maps
                                    {this.props.text}
                            </h1>
                        </div>
                </section>
            </div>
         );
    }
}
 
export default LandingPage;