import React from 'react'
import {Route, Switch} from 'react-router-dom'

import NewCourse from './add/NewCourse'
//import Courses from './course/Courses'
import Course from './add/Course'
import EditCourse from './add/EditCourse'
import MyCourses from './add/MyCourses'


const MainRouter = () => {
    return (<div>
      <Menu/>
      <Switch>
        <Route path="/course/:courseId" component={Course}/>
        <PrivateRoute path="/teach/courses" component={MyCourses}/>
        <PrivateRoute path="/teach/course/new" component={NewCourse}/>
        <PrivateRoute path="/teach/course/edit/:courseId" component={EditCourse}/>
        <PrivateRoute path="/teach/course/:courseId" component={Course}/>
        

      </Switch>
    </div>)
}

export default MainRouter
