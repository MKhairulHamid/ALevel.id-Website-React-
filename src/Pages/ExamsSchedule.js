import React from 'react';

import Title from './Dashboard/Sections/Title';
import Covid19 from '../Component/BlogPost/Covid19'


const ExamsSchedule = () =>{


    return(
        <div style={{ minHeight:'700px', marginRight:'300px', marginLeft:'200px', marginTop:'100px' }} >
            <div>
                <Title > Update from Cambridge International on May/June 2020 exams </Title>
            </div>
            <div>
                <h4> 23 Maret 2020</h4>
                <p>
                    <Covid19 />
                </p>
            </div>

        </div>
    )
}

export default ExamsSchedule;