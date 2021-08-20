import React, {Component} from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    toggleOffcanvas() {
        document.querySelector('.sidebar-offcanvas').classList.toggle('active');
      }
      render () {
        return (
          <nav className="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
            <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center" style={{background:'#fff'}}>
              <Link className="navbar-brand brand-logo" to="/"><img src={require('../../assets/images/Edvantum.png')} style={{height:'unset'}} alt="logo" /></Link>
              <Link className="navbar-brand brand-logo-mini" to="/"><span style={{background:'white', display: 'block', margin: '10px', borderRadius: '12px', fontWeight:'bolder', fontSize:'21px'}}>E</span></Link>
            </div>
            <div className="navbar-menu-wrapper d-flex align-items-stretch">
              <button className="navbar-toggler navbar-toggler align-self-center" type="button" onClick={ () => document.body.classList.toggle('sidebar-icon-only') }>
                <span className="mdi mdi-menu"></span>
              </button>
              {/* <div className="search-field d-none d-md-block">
                <form className="d-flex align-items-center h-100" action="#">
                  <div className="input-group">
                    <div className="input-group-prepend bg-transparent">
                      <i className="input-group-text border-0 mdi mdi-magnify"></i>
                    </div>
                    <input type="text" className="form-control bg-transparent border-0" placeholder="Search products"/>
                  </div>
                </form>
              </div> */}
              <ul className="navbar-nav navbar-nav-right">
                {/* <li className="nav-item nav-profile d-none d-xl-flex">
                  <Dropdown alignRight>
                    <Dropdown.Toggle className="nav-link count-indicator">
                      Reports
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="preview-list navbar-dropdown">
                      <Dropdown.Item className="dropdown-item d-flex align-items-center" href="!#" onClick={evt =>evt.preventDefault()}>
                        <i className="mdi mdi-file-pdf mr-2"></i>PDF
                      </Dropdown.Item>
                      <div className="dropdown-divider"></div>
                      <Dropdown.Item className="dropdown-item d-flex align-items-center" href="!#" onClick={evt =>evt.preventDefault()}>
                      <i className="mdi mdi-file-excel mr-2"></i>Excel
                      </Dropdown.Item>
                      <div className="dropdown-divider"></div>
                      <Dropdown.Item className="dropdown-item d-flex align-items-center" href="!#" onClick={evt =>evt.preventDefault()}>
                        <i className="mdi mdi-file-word mr-2"></i>doc
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </li> */}

                <li className="nav-item nav-profile nav-language">
                  <Dropdown alignRight>
                    <Dropdown.Toggle className="nav-link count-indicator">
                      <div className="nav-profile-img">
                          <img src={require("../../assets/images/faces/face28.png")} alt="profile" />
                        </div>
                        <div className="nav-profile-text">
                          <p className="mb-1 text-black">Henry Klein</p>
                      </div>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="preview-list navbar-dropdown">
                      <div className="p-3 text-center bg-primary">
                        <img className="img-avatar img-avatar48 img-avatar-thumb" src={require("../../assets/images/faces/face28.png")} alt=""/>
                      </div>
                      <div className="p-2">
                        <h5 className="dropdown-header text-uppercase pl-2 text-dark">User Options</h5>
                        {/* <Dropdown.Item className="dropdown-item d-flex align-items-center justify-content-between" href="!#" onClick={evt =>evt.preventDefault()}>
                          <span>Inbox</span>
                          <span className="p-0">
                            <span className="badge badge-primary">3</span>
                            <i className="mdi mdi-email-open-outline ml-1"></i>
                          </span>
                        </Dropdown.Item> */}
                        <Dropdown.Item className="dropdown-item d-flex align-items-center justify-content-between" href="!#" onClick={evt =>evt.preventDefault()}>
                          <span>Profile</span>
                          <span className="p-0">
                            <span className="badge badge-success">1</span>
                            <i className="mdi mdi-account-outline ml-1"></i>
                          </span>
                        </Dropdown.Item>
                        {/* <Dropdown.Item className="dropdown-item d-flex align-items-center justify-content-between" href="!#" onClick={evt =>evt.preventDefault()}>
                          <span>Settings</span>
                          <i className="mdi mdi-settings"></i>
                        </Dropdown.Item> */}
                        <div role="separator" className="dropdown-divider"></div>
                        {/* <h5 className="dropdown-header text-uppercase  pl-2 text-dark mt-2">Actions</h5>
                        <Dropdown.Item className="dropdown-item d-flex align-items-center justify-content-between" href="!#" onClick={evt =>evt.preventDefault()}>
                          <span>Lock Account</span>
                          <i className="mdi mdi-lock ml-1"></i>
                          </Dropdown.Item> */}
                          <Dropdown.Item className="dropdown-item d-flex align-items-center justify-content-between" href="!#" onClick={evt =>evt.preventDefault()}>
                          <span>Log Out</span>
                          <i className="mdi mdi-logout ml-1"></i>
                        </Dropdown.Item>
                      </div>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
                {/* <li className="nav-item">
                  <Dropdown alignRight>
                    <Dropdown.Toggle className="nav-link count-indicator hide-carret">
                      <i className="mdi mdi-email-outline"></i>
                      <span className="count-symbol bg-warning"></span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="preview-list navbar-dropdown">
                      <h6 className="p-3 bg-primary text-white py-4 mb-0">Messages</h6>
                      <div className="dropdown-divider"></div>
                      <Dropdown.Item className="dropdown-item preview-item" onClick={evt =>evt.preventDefault()}>
                        <div className="preview-thumbnail">
                          <img src={require("../assets/images/faces/face4.jpg")} alt="user" className="profile-pic"/>
                        </div>
                        <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                          <h6 className="preview-subject ellipsis mb-1 font-weight-normal">Mark send you a message</h6>
                          <p className="text-gray mb-0">
                            1 Minutes ago
                          </p>
                        </div>
                      </Dropdown.Item>
                      <div className="dropdown-divider"></div>
                      <Dropdown.Item className="dropdown-item preview-item" onClick={evt =>evt.preventDefault()}>
                        <div className="preview-thumbnail">
                          <img src={require("../assets/images/faces/face2.jpg")} alt="user" className="profile-pic"/>
                        </div>
                        <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                          <h6 className="preview-subject ellipsis mb-1 font-weight-normal">Cregh send you a message</h6>
                          <p className="text-gray mb-0">
                            15 Minutes ago
                          </p>
                        </div>
                      </Dropdown.Item>
                      <div className="dropdown-divider"></div>
                      <Dropdown.Item className="dropdown-item preview-item" onClick={evt =>evt.preventDefault()}>
                        <div className="preview-thumbnail">
                          <img src={require("../assets/images/faces/face3.jpg")} alt="user" className="profile-pic"/>
                        </div>
                        <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                          <h6 className="preview-subject ellipsis mb-1 font-weight-normal">Profile picture updated</h6>
                          <p className="text-gray mb-0">
                            18 Minutes ago
                          </p>
                        </div>
                      </Dropdown.Item>
                      <div className="dropdown-divider"></div>
                      <h6 className="p-3 mb-0 text-center cursor-pointer">4 new messages</h6>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
                 */}
                <li className="nav-item">
                  <Dropdown alignRight>
                    <Dropdown.Toggle className="nav-link count-indicator hide-carret">
                      <i className="mdi mdi-bell-outline"></i>
                      <span className="count-symbol bg-danger"></span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="dropdown-menu navbar-dropdown preview-list">
                      <h6 className="p-3 mb-0 bg-primary text-white py-4">Notifications</h6>
                      <div className="dropdown-divider"></div>
                      <Dropdown.Item className="dropdown-item preview-item" onClick={evt =>evt.preventDefault()}>
                        <div className="preview-thumbnail">
                          <div className="preview-icon bg-success">
                            <i className="mdi mdi-calendar"></i>
                          </div>
                        </div>
                        <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                          <h6 className="preview-subject font-weight-normal mb-1">Event today</h6>
                          <p className="text-gray ellipsis mb-0"> Just a reminder that you have an event today </p>
                        </div>
                      </Dropdown.Item>
                      <div className="dropdown-divider"></div>
                      <Dropdown.Item className="dropdown-item preview-item" onClick={evt =>evt.preventDefault()}>
                        <div className="preview-thumbnail">
                          <div className="preview-icon bg-warning">
                            <i className="mdi mdi-settings"></i>
                          </div>
                        </div>
                        <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                          <h6 className="preview-subject font-weight-normal mb-1">Settings</h6>
                          <p className="text-gray ellipsis mb-0">
                          Update dashboard
                          </p>
                        </div>
                      </Dropdown.Item>
                      <div className="dropdown-divider"></div>
                      <Dropdown.Item className="dropdown-item preview-item" onClick={evt =>evt.preventDefault()}>
                        <div className="preview-thumbnail">
                          <div className="preview-icon bg-info">
                            <i className="mdi mdi-link-variant"></i>
                          </div>
                        </div>
                        <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                          <h6 className="preview-subject font-weight-normal mb-1">Launch Admin</h6>
                          <p className="text-gray ellipsis mb-0">
                          New admin wow!
                          </p>
                        </div>
                      </Dropdown.Item>
                      <div className="dropdown-divider"></div>
                      <h6 className="p-3 mb-0 text-center cursor-pointer">See all notifications</h6>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
              </ul>
              <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" onClick={this.toggleOffcanvas}>
                <span className="mdi mdi-menu"></span>
              </button>
            </div>
          </nav>
        );
      }
}

export default Navbar;