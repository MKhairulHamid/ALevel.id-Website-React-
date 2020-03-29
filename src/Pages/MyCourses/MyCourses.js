import React from 'react';
import { useSelector } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '../../Component/CustomButtons/Button';
import Title from '../Dashboard/Sections/Title'


const MyCourses = () => {
    
    const enrollment = useSelector(state => state.enrollment)
    const data = enrollment.mycourses

    const renderMyCourses = () => {
        return data.map((val) => (
            <TableRow key={val.courseId}>
              <TableCell>{val.courseId}</TableCell>
              <TableCell>{val.name}</TableCell>
              <TableCell> {val.subject} </TableCell>
              <TableCell>{val.program}</TableCell>
              <TableCell>
                <Button color='twitter' >
                    Go to Course Page
                </Button> 
              </TableCell>
            </TableRow>
          ))
    }

    return(
        <div style={{ minHeight:'700px', marginRight:'100px', marginLeft:'100px' }} >
            <div align="center">
                <Title > My Courses </Title>
            </div>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell> Course ID</TableCell>
                <TableCell>Course Name</TableCell>
                <TableCell>Subject </TableCell>
                <TableCell>Program </TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {renderMyCourses()}
            </TableBody>
          </Table>
        </div>
      
    )
}

export default MyCourses;