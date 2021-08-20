import React, { Component } from 'react';
import { ProgressBar } from 'react-bootstrap';
import { Dropdown, Tabs, Tab } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export class Dashboard extends Component {
  constructor(props){
    super(props)
    this.state = {
      saleOptions : {
        scales: {
          yAxes: [{
            display: false,
            gridLines: {
              drawBorder: false,
              display: false,
              drawTicks: false
            },
            ticks: {
              beginAtZero: true,
              stepSize: 10
            }
          }],
          xAxes: [{
            display: false,
            position: 'bottom',
            gridLines: {
              drawBorder: false,
              display: false,
              drawTicks: false
            },
            ticks: {
              beginAtZero: true,
              stepSize: 10
            }
          }],
        },
        legend: {
          display: false,
        },
        elements: {
          point: {
            radius: 0
          },
          line: {
            tension: .4
          }
        },
        tooltips: {
          backgroundColor: 'rgba(2, 171, 254, 1)',
        },
    
      },
      salespredictionData: {},
      salesprediction2Data : {},
      salesprediction3Data : {},
      salesprediction4Data : {},

    }
  }

  toggleProBanner() {
    document.querySelector('.proBanner').classList.toggle("hide");
  }
  render () {
    return (
      <div>
        {/* <div className="row proBanner">
          <div className="col-12">
            <span className="d-flex align-items-center purchase-popup">
              <p>Get tons of UI components, Plugins, multiple layouts, 20+ sample pages, and more!</p>
              <a href="https://www.bootstrapdash.com/product/connect-plus-react/?utm_source=organic&utm_medium=banner&utm_campaign=free-preview" rel="noopener noreferrer" target="_blank" className="btn purchase-button ml-auto">Check Pro Version</a>
              <i className="mdi mdi-close bannerClose" onClick={this.toggleProBanner}></i>
            </span>
          </div>
        </div> */}
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
                          <h5 className="mb-2 text-dark font-weight-normal">Schools</h5>
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
export default Dashboard;