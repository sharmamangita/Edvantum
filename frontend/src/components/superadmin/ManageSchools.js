import React, { Component, forwardRef } from 'react'
import MaterialTable from "material-table";
import { Link } from 'react-router-dom';
import ReactTooltip from "react-tooltip";
import { Form } from 'react-bootstrap';

class ManageSchool extends Component {
  constructor(props){
    super(props);
    this.state = {
      records: [],
      tooltipOpen: false,
    }
  }

  componentDidMount(){
    let re = [
      {
        _id: 1,
        schoolName:'S.D.M school',
        principal:'Ashok',
        teacherCount:'10',
        studentCount:"4000",
        city:'Amritsar',
        state:'Punjab'
      },
      {
        _id: 2,
        schoolName:'Shivalic public school',
        principal:'Jitu',
        teacherCount:'20',
        studentCount:"3000",
        city:'Amritsar',
        state:'Punjab'
      }
    ];
    this.setState({records: re})
  }

  renderAction = (props, index) => {
    
    return(<span>

      <ReactTooltip id='Edit' type='warning' effect='solid'>
        <span>Edit</span>
      </ReactTooltip>
				<Link to="setupschool">
        <button data-tip data-for="Edit" type="button" className="btn btn-outline-warning" style={{padding:'8px'}}>
            <i className="mdi mdi-border-color" style={{fontSize:'17px'}}></i>
        </button>
				</Link>
      
      <ReactTooltip id='User' effect='solid'>
        <span>Access school admin</span>
      </ReactTooltip>
      <button data-tip data-for="User" type="button" className="btn btn-outline-primary" style={{padding:'8px'}}>
        <i className="mdi mdi-account-key"style={{fontSize:'17px'}}></i>
      </button>

      <ReactTooltip id='Key' effect='solid'>
        <span>Key will show here</span>
      </ReactTooltip>
      <button data-tip data-for="Key" type="button" className="btn btn-outline-light" style={{padding:'8px'}}>
        <i className="mdi mdi-key-variant"style={{fontSize:'17px'}}></i>
      </button>
    </span>)
  }
  DeactiveAction = (props, index) => {

    return(
      <span>
        <ReactTooltip id='activate' type='error' effect='solid'>
            <span>Activate/Deactive</span>
          </ReactTooltip>  
        <span  data-tip data-for="activate" className="form-check form-check-danger" style={{display:'inline-flex'}}>
          <label className="form-check-label">
            <input type="checkbox" className="form-check-input" defaultChecked />
            <i className="input-helper"></i>
          </label>
        </span>
      </span>
    )
}

  PrincipalHyperLink = (props) => {
    return(
      <span>
        <Link>
          {props.principal}
        </Link>
      </span>
    )
  }
  StudentCountHyperLink = (props) => {
    return(
      <span>
        <Link>
          {props.studentCount}
        </Link>
      </span>
    )
  }
  TeacherCountHyperLink = (props) => {
    return(
      <span>
        <Link>
          {props.teacherCount}
        </Link>
      </span>
    )
  }

  render() {
    const fields = [
      {
        // name: "",
        // field: "Deactive",
        name: "action",
        title: "",
        width: "0%",
        align:"center",
        render: this.DeactiveAction,
      },
      {
        title: "School ",
        field: "schoolName",
      },
      {
        title: "Principal ",
        render: this.PrincipalHyperLink
      },
      {
        title: "Teacher No.",
        render: this.TeacherCountHyperLink
      },
      {
        title: "Student No.",
        render: this.StudentCountHyperLink
      },
      {
        field: "city",
        title: "City ",
      },
      {
        field: "state",
        title: "State ",
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
          <h3 className="page-title"> Manage Schools </h3>
        </div>
        <div className="row">

          {/* =========================================== */}
          {/* <div className="col-lg-12 grid-margin stretch-card">    
              <div className="card">
                  <div className="card-body">
                      <form className="forms-sample">
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
                                  <label className="col-sm-3 col-form-label">State <span style={this.state.startstyle}>*</span></label>
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
                          <div className="col-sm-12">
                            <button type="submit" className="btn btn-primary ml-2 btn-fw" style={{lineHeight:1.5, float:'right'}}>Search</button>
                          </div>
                        </div>
                      </form>
                  </div>
              </div>
          </div> */}
          {/* =========================================== */}

          <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
						{/*<nav aria-label="breadcrumb">
                  <div className="row">
                    <div className="col">
                      <button type="button" className="btn mr-0 pr-0">
                        <i className="mdi mdi-import" style={{fontSize: "24px"}}></i>
                      </button>Import Bulk Data (<code><a href="" className="sm-text">Download &amp; View File Format</a></code>)
                    </div>
                  </div>            
						</nav>  */}     
              <MaterialTable
              title=""
              data={this.state.records}
              columns={fields}
              options={{ search: true, paging: true, exportButton: true }}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ManageSchool;