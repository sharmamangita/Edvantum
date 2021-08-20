import React, {Component} from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Collapse } from 'react-bootstrap';

class Sidebar extends Component {
    state = {};
  
    toggleMenuState(menuState) {
      if (this.state[menuState]) {
        this.setState({[menuState] : false});
      } else if(Object.keys(this.state).length === 0) {
        this.setState({[menuState] : true});
      } else {
        Object.keys(this.state).forEach(i => {
          this.setState({[i]: false});
        });
        this.setState({[menuState] : true});
      }
    }
  
    componentDidUpdate(prevProps) {
      if (this.props.location !== prevProps.location) {
        this.onRouteChanged();
      }
    }
  
    onRouteChanged() {
      document.querySelector('#sidebar').classList.remove('active');
      Object.keys(this.state).forEach(i => {
        this.setState({[i]: false});
      });
  
      const dropdownPaths = [
        {path:'/apps', state: 'appsMenuOpen'},
        {path:'/basic-ui', state: 'basicUiMenuOpen'},
        {path:'/advanced-ui', state: 'advancedUiMenuOpen'},
        {path:'/form-elements', state: 'formElementsMenuOpen'},
        {path:'/tables', state: 'tablesMenuOpen'},
        {path:'/maps', state: 'mapsMenuOpen'},
        {path:'/icons', state: 'iconsMenuOpen'},
        {path:'/charts', state: 'chartsMenuOpen'},
        {path:'/user-pages', state: 'userPagesMenuOpen'},
        {path:'/error-pages', state: 'errorPagesMenuOpen'},
        {path:'/general-pages', state: 'generalPagesMenuOpen'},
        {path:'/ecommerce', state: 'ecommercePagesMenuOpen'},
      ];
  
      dropdownPaths.forEach((obj => {
        if (this.isPathActive(obj.path)) {
          this.setState({[obj.state] : true})
        }
      }));
   
    } 
    render () {
      return (
        <nav className="sidebar sidebar-offcanvas" id="sidebar">
          <ul className="nav">
            
            <li className="nav-item nav-category">Edvantum - Admin</li>
            <li className={ this.isPathActive('/dashboard') ? 'nav-item active' : 'nav-item' }>
              <Link className="nav-link" to="/dashboard">
                <span className="icon-bg"><i className="mdi mdi-cube menu-icon"></i></span>
                <span className="menu-title">Dashboard</span>
              </Link>
            </li>
            
            <li className={ this.isPathActive('/setupschool') ? 'nav-item active' : 'nav-item' }>
              <Link className="nav-link" to="/setupschool">
                <span className="icon-bg"><i className="mdi mdi-format-list-bulleted menu-icon"></i></span>
                <span className="menu-title">Setup New School</span>
              </Link>
            </li>
            <li className={ this.isPathActive('/manageschool') ? 'nav-item active' : 'nav-item' }>
              <Link className="nav-link" to="/manageschool">
                <span className="icon-bg"><i className="mdi mdi-format-list-bulleted menu-icon"></i></span>
                <span className="menu-title">Manage Schools</span>
              </Link>
            </li>

            {/* ===================================== for school admin route =============================== */}
            <div className="dropdown-divider"></div>
            <li className="nav-item nav-category">School - Admin</li>
            <li className={ this.isPathActive('/admin/dashboard') ? 'nav-item active' : 'nav-item' }>
              <Link className="nav-link" to="/admin/dashboard">
                <span className="icon-bg"><i className="mdi mdi-cube menu-icon"></i></span>
                <span className="menu-title">Dashboard</span>
              </Link>
            </li>
            
            <li className={ this.isPathActive('/admin/classes') ? 'nav-item active' : 'nav-item' }>
              <Link className="nav-link" to="/admin/classes">
                <span className="icon-bg"><i className="mdi mdi-format-list-bulleted menu-icon"></i></span>
                <span className="menu-title"> Classes</span>
              </Link>
            </li>
            <li className={ this.isPathActive('/admin/students') ? 'nav-item active' : 'nav-item' }>
              <Link className="nav-link" to="/admin/students">
                <span className="icon-bg"><i className="mdi mdi-format-list-bulleted menu-icon"></i></span>
                <span className="menu-title"> Students</span>
              </Link>
            </li>
            <li className={ this.isPathActive('/admin/staffmembers') ? 'nav-item active' : 'nav-item' }>
              <Link className="nav-link" to="/admin/staffmembers">
                <span className="icon-bg"><i className="mdi mdi-format-list-bulleted menu-icon"></i></span>
                <span className="menu-title"> Staff Members</span>
              </Link>
            </li>
            <li className={ this.isPathActive('/admin/class4employees') ? 'nav-item active' : 'nav-item' }>
              <Link className="nav-link" to="/admin/class4employees">
                <span className="icon-bg"><i className="mdi mdi-format-list-bulleted menu-icon"></i></span>
                <span className="menu-title"> Class 4 Employees</span>
              </Link>
            </li>
            <li className={ this.isPathActive('/admin/studentsfees') ? 'nav-item active' : 'nav-item' }>
              <Link className="nav-link" to="/admin/studentsfees">
                <span className="icon-bg"><i className="mdi mdi-format-list-bulleted menu-icon"></i></span>
                <span className="menu-title">Students Fees</span>
              </Link>
            </li>
            <li className={ this.isPathActive('/admin/busdata') ? 'nav-item active' : 'nav-item' }>
              <Link className="nav-link" to="/admin/busdata">
                <span className="icon-bg"><i className="mdi mdi-format-list-bulleted menu-icon"></i></span>
                <span className="menu-title"> Bus Data</span>
              </Link>
            </li>
            <li className={ this.isPathActive('/admin/accesslevels') ? 'nav-item active' : 'nav-item' }>
              <Link className="nav-link" to="/admin/accesslevels">
                <span className="icon-bg"><i className="mdi mdi-format-list-bulleted menu-icon"></i></span>
                <span className="menu-title">Access Levels</span>
              </Link>
            </li>
						<li className={ this.isPathActive('/admin/timetalbe') ? 'nav-item active' : 'nav-item' }>
              <Link className="nav-link" to="/admin/timetable">
                <span className="icon-bg"><i className="mdi mdi-format-list-bulleted menu-icon"></i></span>
                <span className="menu-title">Time Table</span>
              </Link>
            </li>
						<li className={ this.isPathActive('/admin/coursestructure') ? 'nav-item active' : 'nav-item' }>
              <Link className="nav-link" to="/admin/coursestructure">
                <span className="icon-bg"><i className="mdi mdi-format-list-bulleted menu-icon"></i></span>
                <span className="menu-title">Course Structure</span>
              </Link>
            </li>
						<li className={ this.isPathActive('/admin/manageexamschedule') ? 'nav-item active' : 'nav-item' }>
              <Link className="nav-link" to="/admin/manageexamschedule">
                <span className="icon-bg"><i className="mdi mdi-format-list-bulleted menu-icon"></i></span>
                <span className="menu-title">Exam Schedule</span>
              </Link>
            </li>
						{/* ===================================== for master data route =============================== */}
						<div className="dropdown-divider"></div>
            <li className="nav-item nav-category">Master - Data</li>
						<li className={ this.isPathActive('/admin/masterdata/concession') ? 'nav-item active' : 'nav-item' }>
              <Link className="nav-link" to="/admin/masterdata/concession">
                <span className="icon-bg"><i className="mdi mdi-format-list-bulleted menu-icon"></i></span>
                <span className="menu-title">Concessions</span>
              </Link>
            </li>
						<li className={ this.isPathActive('/admin/masterdata/category') ? 'nav-item active' : 'nav-item' }>
              <Link className="nav-link" to="/admin/masterdata/category">
                <span className="icon-bg"><i className="mdi mdi-format-list-bulleted menu-icon"></i></span>
                <span className="menu-title">Category</span>
              </Link>
            </li>
            <li className={ this.isPathActive('/admin/subjects') ? 'nav-item active' : 'nav-item' }>
              <Link className="nav-link" to="/admin/subjects">
                <span className="icon-bg"><i className="mdi mdi-format-list-bulleted menu-icon"></i></span>
                <span className="menu-title"> Subjects</span>
              </Link>
            </li>
						<li className={ this.isPathActive('/admin/masterdata/feedata') ? 'nav-item active' : 'nav-item' }>
              <Link className="nav-link" to="/admin/masterdata/feedata">
                <span className="icon-bg"><i className="mdi mdi-format-list-bulleted menu-icon"></i></span>
                <span className="menu-title"> Fee Data</span>
              </Link>
            </li>
						<li className={ this.isPathActive('/admin/masterdata/holidays') ? 'nav-item active' : 'nav-item' }>
              <Link className="nav-link" to="/admin/masterdata/holidays">
                <span className="icon-bg"><i className="mdi mdi-format-list-bulleted menu-icon"></i></span>
                <span className="menu-title"> Holidays</span>
              </Link>
            </li>
            {/* ============================================================================================= */}
          </ul>
        </nav>
      );
    }
  
    isPathActive(path) {
      return this.props.location.pathname.startsWith(path);
    }
  
    componentDidMount() {
      this.onRouteChanged();
      // add className 'hover-open' to sidebar navitem while hover in sidebar-icon-only menu
      const body = document.querySelector('body');
      document.querySelectorAll('.sidebar .nav-item').forEach((el) => {
        
        el.addEventListener('mouseover', function() {
          if(body.classList.contains('sidebar-icon-only')) {
            el.classList.add('hover-open');
          }
        });
        el.addEventListener('mouseout', function() {
          if(body.classList.contains('sidebar-icon-only')) {
            el.classList.remove('hover-open');
          }
        });
      });
    }
  
  }

  export default withRouter(Sidebar);