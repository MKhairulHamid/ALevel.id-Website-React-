import React from 'react'

export const ProgramDesc = (props) => {
    if(props === 'IGCSE') {
        return(
            'IGCSE is the world’s most popular international qualification for 14 to 16 year olds. Not only is it truly international - it gives students more options than any other international qualification. That means more subjects to choose from, more ways to learn and more ways to succeed.'
        )
    }
    if(props === 'AS Level'){
        return(
            'Thousands of learners worldwide gain places at leading universities every year with Cambridge International AS & A Levels. The syllabuses develop a deep understanding of subjects and independent thinking skills. Take the Cambridge International AS Level is half of a Cambridge International A Level.'
        )
    }
    if(props === 'A Level'){
        return(
            'Thousands of learners worldwide gain places at leading universities every year with Cambridge International AS & A Levels. The syllabuses develop a deep understanding of subjects and independent thinking skills.'
        )
    }

}

