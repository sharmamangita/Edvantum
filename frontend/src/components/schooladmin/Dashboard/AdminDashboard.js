import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, Tabs, Tab } from 'react-bootstrap';

class AdminDashboard extends Component {
    render() {
        return (
            <div>
              <div>
                <div className="d-sm-flex justify-content-between align-items-start">
                  <h2 className="text-dark font-weight-bold mb-2"> Dashboard </h2>
                  <div className="d-sm-flex justify-content-xl-between align-items-center mb-2">
                    <div className="btn-group d-none d-xl-flex bg-white p-3" role="group" aria-label="Basic example">
                      <button type="button" className="btn btn-link text-light py-0 font-weight-medium border-right">7 Days</button>
                      <button type="button" className="btn btn-link text-dark py-0 font-weight-medium border-right">1 Month</button>
                      <button type="button" className="btn btn-link text-light font-weight-medium py-0">3 Month</button>
                    </div>
                    <div className="dropdown ml-0 ml-md-4 mt-2 mt-lg-0">
                      <Dropdown alignRight>
                        <Dropdown.Toggle className="bg-white dropdown-toggle border-0 p-3 mr-0 text-muted d-flex align-items-center">
                        <i className="mdi mdi-calendar mr-1"></i>24 Mar 2019 - 24 Mar 2019
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item>24 Mar 2019 - 24 Mar 2019</Dropdown.Item>
                          <Dropdown.Item>24 April 2019 - 24 May 2019</Dropdown.Item>
                          <Dropdown.Item>24 May 2019 - 24 Jun 2019</Dropdown.Item>
                          <Dropdown.Divider></Dropdown.Divider>
                          <Dropdown.Item>24 Jun 2019 - 24 July 2019</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </div>
                </div>
                
                <div className="row mt-2">
                  <div className="col-md-12">
                    <div className="justify-content-between align-items-center tab-transparent">
                      <div>
                        <div className="row">
                          <div className="col-xl-4 col-lg-6 col-sm-6 grid-margin stretch-card">
                            <div className="card">
                              <Link className="nav-link" to="/dashboard">
                                <div className="card-body text-center">
                                <h5 className="mb-2 text-dark font-weight-normal">Classes</h5>
                                <h2 className="mb-4 text-dark font-weight-bold">9</h2>
                              </div>
                              </Link>
                            </div>
                          </div>
                          <div className="col-xl-4 col-lg-6 col-sm-6 grid-margin stretch-card">
                            <div className="card">
                              <Link className="nav-link" to="/dashboard">
                                <div className="card-body text-center">
                                  <h5 className="mb-2 text-dark font-weight-normal">Teachers</h5>
                                  <h2 className="mb-4 text-dark font-weight-bold">100</h2>
                                </div>
                              </Link>
                            </div>
                          </div>
                          <div className="col-xl-4 col-lg-6 col-sm-6 grid-margin stretch-card">
                            <div className="card">
                              <Link className="nav-link" to="/dashboard">
                                <div className="card-body text-center">
                                  <h5 className="mb-2 text-dark font-weight-normal">Students</h5>
                                  <h2 className="mb-4 text-dark font-weight-bold">15k</h2>
                                </div>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> 
          );
    }
}

export default AdminDashboard;