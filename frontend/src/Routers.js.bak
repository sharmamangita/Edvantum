import React, { Component,Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Spinner from './components/common/Spinner';
// Super admin
import Dashboard from './components/superadmin/index';
import AddSchool from './components/superadmin/AddSchool';
import ManageSchools from './components/superadmin/ManageSchools';

// school admin
import AdminDashboard from './components/schooladmin/Dashboard/AdminDashboard';
import ClassInformation from './components/schooladmin/ClassInformation/ClassInformation';
import ManageBusData from './components/schooladmin/ManageBusData/ManageBusData';
import ManageFeeData from './components/schooladmin/MasterData/ManageFeeData';
import ManageStaffData from './components/schooladmin/MnagageStaffData/ManageStaffData';
import ManageStudentData from './components/schooladmin/ManageStudentsData/ManageStudentData';
import AddStudent from './components/schooladmin/ManageStudentsData/AddStudent';
import ManageSubjects from './components/schooladmin/ManageSubjects/ManageSubjects';
import AccessLevels from './components/schooladmin/AccessLevels/AccessLevels';
import ManageClassForEmployees from './components/schooladmin/ManageClass4Employees/ManageClassForEmployees';
import AddStaff from './components/schooladmin/MnagageStaffData/AddStarff';
import AddClass4Employees from './components/schooladmin/ManageClass4Employees/AddClass4Employees';
import AddAccessLevels from './components/schooladmin/AccessLevels/AddAccessLevels';
import ManageConcessionData from './components/schooladmin/MasterData/ManageConcessionData';
import CreateFees from './components/schooladmin/MasterData/CreateFees';
import StudentsFees from './components/schooladmin/ManageFeeData/StudentsFees';
import SubmitStudentFee from './components/schooladmin/ManageFeeData/SubmitStudentFee';
import AddBusRoute from './components/schooladmin/ManageBusData/AddBusRoute';
import ManageCategoryData from './components/schooladmin/MasterData/ManageCategoryData';

// auth
import Login from './components/auth/Login';
import Logout from './components/auth/Logout';

// common
import Error404 from './components/common/pages/Error404';
import Error500 from './components/common/pages/Error500';

class Routers extends Component {
  render () {
    return (
      <Suspense fallback={<Spinner/>}>
        <Switch>
          {/* supper admin */}
          <Route exact path="/dashboard" component={ Dashboard } />
          <Route path="/setupschool" component={AddSchool} />
          <Route path="/manageschool" component={ManageSchools} />

          {/* school admin */}
          <Route path="/admin/dashboard" component={AdminDashboard} />
          <Route path="/admin/classes" component={ClassInformation} />
          <Route path="/admin/students" component={ManageStudentData} />
					<Route path="/admin/addstudent" component={AddStudent} />
          <Route path="/admin/masterdata/feedata" component={ManageFeeData} />
          <Route path="/admin/class4employees" component={ManageClassForEmployees} />
          <Route path="/admin/staffmembers" component={ManageStaffData} />
					<Route path="/admin/accesslevels" component={AccessLevels} />
          <Route path="/admin/subjects" component={ManageSubjects} />
          <Route path="/admin/busdata" component={ManageBusData} />
          <Route path="/admin/addstaff" component={AddStaff} />
          <Route path="/admin/addclass4employees" component={AddClass4Employees} />
          <Route path="/admin/addaccesslevels" component={AddAccessLevels} />
          <Route path="/admin/masterdata/createfees" component={CreateFees} />
          <Route path="/admin/studentsfees" component={StudentsFees} />
          <Route path="/admin/submitstudentfee" component={SubmitStudentFee} />
					<Route path="/admin/addbusroute" component={AddBusRoute} />
					<Route path="/admin/masterdata/category" component={ManageCategoryData} />
          <Route path="/admin/masterdata/concession" component={ManageConcessionData} />

          {/* auth */}
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Logout} />
          <Route path="/" component={Login} />

          {/* common */}
          <Route path="/error-404" component={ Error404 } />
          <Route path="/error-500" component={ Error500 } />
        </Switch>
      </Suspense>
    );
  }
}

export default Routers;