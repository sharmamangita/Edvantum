import React, { Component, forwardRef } from 'react'
import MaterialTable from "material-table";
import { Link } from 'react-router-dom';
import ReactTooltip from "react-tooltip";
import { Form, Modal, Button } from 'react-bootstrap';

class StudentsFees extends Component {
  constructor(props){
    super(props);
    this.state = {
      records: [],
      startstyle: {
        color: 'red',
        fontSize: '14px'
      },
      isModalVisible: false,
      isModalVisible2: false,
      selectedstudent: {},
    }
  }

  componentDidMount(){
    let re = [
      {
        _id: 1,
        admissionNo:'0810',
        student:'Jay',
        class:'1-A',
        paid:'1600.00',
        onDate:'9-4-21',
        pending:'1000'
      },
      {
        _id: 2,
        admissionNo:'0811',
        student:'Reena',
        class:'1-A',
        paid:'2600.00',
        onDate:'9-4-21',
        pending:''
      },
      {
        _id: 3,
        admissionNo:'0812',
        student:'Sunil',
        class:'1-A',
        paid:'Not Paid',
        onDate:'',
        pending:''
      },

    ];
    let re2 = [
      {
        class: '1-A',
        feesForMonths: 'April May',
        feesPaid:'16000',
        amountPaid:'10000',
        paymentDate:'9-04-2021',
        notPaid:'6200'
      },
    ];
    this.setState({records: re, records2: re2})
  }

  renderAction = (props, index) => {
    if(props.pending || props.paid == "Not Paid"){
        return(
          <span>
            <ReactTooltip id='PayNow' effect='solid'>
              <span>Pay Fees</span>
            </ReactTooltip>
            <Link to="/admin/submitstudentfee">
              <button data-tip data-for="PayNow"type="button" className="btn btn-outline-success" style={{padding:'8px'}}>
                Pay Now
              </button>
            </Link>
            <ReactTooltip id='FeeRecords' type='warning' effect='solid'>
              <span>Fee Records</span>
            </ReactTooltip>
              <button data-tip data-for="FeeRecords" onClick={()=> this.setState({isModalVisible2: true, selectedstudent:props})} type="button" className="btn btn-outline-warning mt-1" style={{padding:'8px'}}>
                Fee Records
              </button>  
          </span>
          )
    } else {
        return(
        <span>
          <ReactTooltip id='FeeRecords' type='warning' effect='solid'>
              <span>Fee Records</span>
            </ReactTooltip>
              <button data-tip data-for="FeeRecords" onClick={()=> this.setState({isModalVisible2: true, selectedstudent:props})} type="button" className="btn btn-outline-warning" style={{padding:'8px'}}>
                Fee Records
              </button>
            <ReactTooltip id='Print' type='warning' effect='solid'>
              <span>Print</span>
            </ReactTooltip>
              <button data-tip data-for="Print" onClick={()=> this.setState({isModalVisible: true, selectedstudent:props})} type="button" className="btn btn-outline-warning mt-1" style={{padding:'8px'}}>
                  Print
              </button>
        </span>
        )
    }
  }

  handleClose = () => {
    this.setState({selectedstudent:{}, isModalVisible: false})
  }
  handleClose2 = () => {
    this.setState({selectedstudent:{}, isModalVisible2: false})
  }

  StudentHyperLink = (props) => {
    return(
      <span>
        <Link>
          {props.student}
        </Link>
      </span>
    )
  }  

  ClassHyperLink = (props) => {
    return(
      <span>
        <Link>
          {props.class}
        </Link>
      </span>
    )
  }

  // =========================================================
  field = () => {
    const fields = [
        {
          title: "Class",
          field: "class",
        },
        {
          title: "fees For Months",
          field: "feesForMonths",
        },
        {
          title: "Fees Paid",
          field: "feesPaid",
        },
        {
          title: "Amount Paid",
          field: "amountPaid",
        },
        {
          title: "Payment Date",
          field: "paymentDate",
        },
        {
          title: "Not Paid",
          field: "notPaid",
        }
    ];
    return fields;
  }
  // =========================================================

  render() {
    const fields = [
      {
        title: "Admission No.",
        field: "admissionNo",
      },
      {
        title: "Student",
        render: this.StudentHyperLink
      },
      {
        title: "Class",
        render: this.ClassHyperLink
      },
      {
        field: "paid",
        title: "Paid",
      },
      {
        field: "onDate",
        title: "On Date ",
      },
      {
        field: "pending",
        title: "Pending",
      },
      {
        name: "action",
        title: "Actions ",
        render: this.renderAction,
      },
    ];
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title"> Students Fees </h3>
        </div>
        <div className="row">

          {/* =========================================== */}
          <div className="col-lg-12 grid-margin stretch-card">    
              <div className="card">
                  <div className="card-body">
                      <form className="forms-sample">
                      <h4 className="card-title">Search Student</h4>
                        <div className="row">
                            <div className="col-md-6">
                                <Form.Group className="row">
                                <label className="col-sm-3 col-form-label">Student Name</label>
                                <div className="col-sm-9">
                                    <Form.Control  type="text" />
                                </div>
                                </Form.Group>
                            </div>
                            <div className="col-md-6">
                                <Form.Group className="row">
                                    <label className="col-sm-3 col-form-label">Admission #</label>
                                    <div className="col-sm-9">
                                        <Form.Control type="text" />
                                    </div>
                                </Form.Group>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <Form.Group className="row">
                                <label className="col-sm-3 col-form-label">Class<span style={this.state.startstyle}>*</span></label>
                                <div className="col-sm-9">
                                  <select className="form-control">
                                    <option>Class-1-A</option>
                                    <option>Class-1-B</option>
                                    <option>Class-2-A</option>
                                    <option>Class-2-B</option>
                                  </select>
                                </div>
                                </Form.Group>
                            </div>
                            <div className="col-md-6">
                              <Form.Group className="row">
                                  <label className="col-sm-3 col-form-label">Student</label>
                                  <div className="col-sm-9">
                                    <select className="form-control">
                                      <option>Reena</option>
                                      <option>Jay</option>
                                    </select>
                                  </div>
                              </Form.Group>
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="col-md-6">
                                <Form.Group className="row">
                                <label className="col-sm-3 col-form-label">Session</label>
                                <div className="col-sm-9">
                                    <select className="form-control">
                                        <option>2021 - 2022</option>
                                        <option>2020 - 2021</option>
                                        <option>2019 - 2020</option>
                                    </select>
                                </div>
                                </Form.Group>
                            </div>
                            <div className="col-md-6">
                              <Form.Group className="row">
                                  <label className="col-sm-3 col-form-label">Month</label>
                                  <div className="col-sm-9">
                                    <select className="form-control">
                                        <option>January</option>
                                        <option>February</option>
                                        <option>March</option>
                                        <option>April</option>
                                        <option>May</option>
                                        <option>June</option>
                                        <option>July</option>
                                        <option>August</option>
                                        <option>September</option>
                                        <option>October</option>
                                        <option>November</option>
                                        <option>December</option>
                                    </select>
                                  </div>
                              </Form.Group>
                            </div>
                        </div>

                        <div className="row">
                          <div className="col-sm-12">
                            <button type="submit" className="btn btn-primary ml-2 btn-fw" style={{lineHeight:1.5, float:'right'}}>Search</button>
                          </div>
                        </div>
                      </form>
                  </div>
              </div>
          </div>
          {/* =========================================== */}

          <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
              <nav aria-label="breadcrumb">
                  <div className="row">
                    <div className="col">
                      <button type="button" className="btn mr-0 pr-0">
                        <i className="mdi mdi-import" style={{fontSize: "24px"}}></i>
                      </button>Import Bulk Data (<code><a href="" className="sm-text">Download &amp; View File Format</a></code>)
                    </div>
                  </div>            
              </nav>       
              <MaterialTable
              title=""
              data={this.state.records}
              columns={fields}
              options={{ search: true, paging: true, exportButton: true }}
              />
            </div>
          </div>
        </div>
            {/* ================================= */}
            <Modal show={this.state.isModalVisible} size="xl" onHide={() => this.handleClose()}>
                <Modal.Header closeButton>
                    <h3 className="page-title">Fee Receipt</h3>
                </Modal.Header>
                    <div className="card">
                        <div className="card-body">
                          <div className="row" style={{justifyContent:"center"}}>
                            <h2>S.D.M High School</h2>
                          </div>
                          <div className="row" style={{justifyContent:"center"}}>
                            <h4>Address</h4>
                          </div>

                          <div className="row">
                            <div className="col-sm-6">
                              <div>Fee Invoice: <span>2021-2022</span></div>
                            </div>
                            <div className="col-sm-6">
                              <div className="float-right">Date: <span>9-04-2021</span></div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-6">
                              <div className="row mt-3 ml-3">
                                <div className="col-sm-12">Admissoin No.: <span>0810</span></div>
                                <div className="col-sm-12">Student: <span>Jai</span></div>
                                <div className="col-sm-12">Father: <span>Ram Singh</span></div>
                                <div className="col-sm-12">Mother: <span>Reena Kour</span></div>
                                <div className="col-sm-12">Class: <span>1-A</span></div>
                                <div className="col-sm-12">Payment Schedule: <span>1 April 2021</span></div>
                              </div>
                            </div>
                            <div className="col-md-6">
                            <div className="row mt-3 mr-3" style={{border: 'solid 1px'}}>
                                <div className="col-sm-12">Admissoin Fees: <span className="float-right">0810</span></div>
                                <div className="col-sm-12">Tution Fees: <span className="float-right">893</span></div>
                                <div className="col-sm-12">Annual Fees: <span className="float-right">1500</span></div>
                                <div className="col-sm-12">Compute Fees: <span className="float-right">200</span></div>
                                <div className="col-sm-12">Total Fees Paid: <span className="float-right">22,750</span></div>
                              </div>
                            </div>
                          </div>
                        
                        </div>
                    </div>
                <Modal.Footer style={{backgroundColor: '#ffffff'}}>
                  <div className="row">
                    <div className="col-sm-12">
                      <span>FEE ONCE PAID IS NOT REFUNDABLE</span>
                    </div>
                  </div>
                    <Button variant="secondary" onClick={() => this.handleClose()}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => this.handleClose()}>
                        Print
                    </Button>
                </Modal.Footer>
            </Modal>
            {/* ================================= */}
            {/* ================================= */}
            <Modal show={this.state.isModalVisible2} size="xl" onHide={() => this.handleClose2()}>
                <Modal.Header closeButton>
                    <h3 className="page-title">Previous Fee Records</h3>
                </Modal.Header>
                    <div className="card">
                        <div className="card-body">
                            <MaterialTable
                                title=""
                                data={this.state.records2}
                                columns={this.field()}
                                options={{ search: false, paging: true, exportButton: true, }}
                                />
                        </div>
                    </div>
                <Modal.Footer style={{backgroundColor: '#ffffff'}}>
                  <div className="row">
                    <div className="col-sm-12">
                      <span>FEE ONCE PAID IS NOT REFUNDABLE</span>
                    </div>
                  </div>
                    <Button variant="secondary" onClick={() => this.handleClose2()}>
                        Print
                    </Button>
                    <Button variant="secondary" onClick={() => this.handleClose2()}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            {/* ================================= */}
      </div>
    )
  }
}

export default StudentsFees;