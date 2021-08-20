import React, {Component} from 'react';
import MaterialTable from "material-table";
import { Link } from 'react-router-dom';
import { Form, Modal, Button } from 'react-bootstrap';
import ReactTooltip from "react-tooltip";

class ManageStaffData extends Component {
    constructor(props){
        super(props);
        this.state = {
          records: [],
          tooltipOpen: false,
          startstyle: {
            color: 'red',
            fontSize: '14px'
          },
          isModalVisible: false,
          selectedTeacher: '',
        }
    }

    componentDidMount(){
        let re = [
          {
            _id: 1,
            name: 'Ram Kumar',
            email: 'sdfaf@gmail.com',
            mobile: '8976540321',
            classTeacher: 'Class 1-A',
            subjectHead: 'English'
          },
          {
            _id: 2,
            name: 'Kunal Sharma',
            email: 'sdfa2f@gmail.com',
            mobile: '8976540321',
            classTeacher: 'Class 1-B',
            subjectHead: 'Hindi'
          },
          {
            _id: 3,
            name: 'Vineet Sethi',
            email: 'sdfaf4@gmail.com',
            mobile: '8976540321',
            classTeacher: 'Class 2-A',
            subjectHead: 'Maths'
          },
          {
            _id: 4,
            name: 'Aditya Saini',
            email: 'sdfaf55@gmail.com',
            mobile: '8976520321',
            classTeacher: 'Class 3-A',
            subjectHead: 'Science'
          },
        ];
        this.setState({records: re})
    }

    renderAction = (props) => {
    
      return(
          <span>
            <ReactTooltip id='Edit' type='warning' effect='solid'>
              <span>Edit</span>
            </ReactTooltip>
            <Link to="/admin/addstaff">  
						<button data-tip data-for="Edit" type="button" className="btn btn-outline-warning" style={{padding:'8px'}}>
                  <i className="mdi mdi-border-color" style={{fontSize:'17px'}}></i>
              </button>
						</Link>
              
            <ReactTooltip id='Delete' type='error' effect='solid'>
              <span>Delete</span>
            </ReactTooltip>
            
              <button data-tip data-for="Delete" type="button" className="btn btn-outline-danger" style={{padding:'8px'}}>
                  <i className="mdi mdi-delete"style={{fontSize:'17px'}}></i>
              </button>
          </span>
      )
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

  NameHyperLink = (props) => {
    console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$")
    console.log(props)
    return(
      <span>
        <Link>
          {props.name}
        </Link>
      </span>
    )
  }

  ClassTeacherHyperLink = (props) => {
    return(
      <span>
        <Link>
          {props.classTeacher}
        </Link>
      </span>
    )
  }

  field = () => {
        const fields = [
            {
                name: "action",
                title: "",
                width: "0%",
                align:"center",
                render: this.DeactiveAction,
            },
            {
              title: "Name",
              render: this.NameHyperLink
            },
            {
              title: "Email",
              field: "email",
            },
            {
              title: "Moblie",
              field: "mobile",
            },
            {
              title: "Class Teacher",
              render: this.ClassTeacherHyperLink
            },
            {
              title: "Subject Head",
              field: "subjectHead",
            },
            {
              title: "Class & Subjects",
              render: this.studentHyperlink
            },
            {
              name: "action",
              title: "Actions ",
              render: this.renderAction,
            },
        ];
        return fields;
  }

  studentHyperlink = (props) => {
      return(
        <span>
          <ReactTooltip id='subjects' type='warning' effect='solid'>
              <span>show Subjects</span>
          </ReactTooltip>
          <button data-tip data-for="subjects" onClick={() => this.setState({selectedTeacher:props.name, isModalVisible: !this.state.isModalVisible})} type="button" className="btn btn-outline-warning" style={{padding:'8px'}}>
              <i className="mdi mdi-link-variant" style={{fontSize:'17px'}}></i>
          </button>    
        </span>
      )
  }

  handleClose = () => {
    this.setState({selectedClass:"", isModalVisible: false})
  }

    render() {
        return(
            <div>
                <div className="page-header">
                  <h3 className="page-title"> Staff Data </h3>
                  
                  <Link className="nav-link" to="/admin/addstaff">
                    <button type="submit" className="btn btn-primary ml-2 btn-fw" style={{lineHeight:1.5}}>Add</button>
                  </Link>
                      
                </div>
                
                <div className="row">
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
                            columns={this.field()}
                            options={{ search: true, paging: true, exportButton: true }}
                            />
                        </div>
                    </div>
                </div>
            
            {/* ================================= */}
            <Modal show={this.state.isModalVisible} onHide={() => this.handleClose()}>
        <Modal.Header closeButton>
        <h3 className="page-title"> Associate Teacher - {this.state.selectedTeacher} with Classes & Subjects </h3>
        </Modal.Header>
        <div className="card">
            <div className="card-body">
                <form>
                  <div className="row">
                    <div className="col-md-12">
                        <Form.Group className="row">
                        <label className="col-sm-2 col-form-label">Class <span style={this.state.startstyle}>*</span></label>
                        <div className="col-sm-10">
                        <select className="form-control">
                            <option>Class 2-B</option>
                            <option>Class 3-C</option>
                        </select>
                        </div>
                        </Form.Group>
                    </div>
                  </div>
                    <div className="row">
                        <div className="col-sm-6">
                            <Form.Group>
                            <div className="form-check form-check-success">
                                <label className="form-check-label">
                                    <input type="checkbox" className="form-check-input" defaultChecked /> Hindi 
                                    <i className="input-helper"></i>
                                </label>
                            </div>
                            </Form.Group>
                        </div>
                        <div className="col-sm-6">
                            <Form.Group>
                            <div className="form-check form-check-success">
                                <label className="form-check-label">
                                    <input type="checkbox" className="form-check-input" defaultChecked /> English 
                                    <i className="input-helper"></i>
                                </label>
                            </div>
                            </Form.Group>
                        </div>
                        <div className="col-sm-6">
                            <Form.Group>
                            <div className="form-check form-check-success">
                                <label className="form-check-label">
                                    <input type="checkbox" className="form-check-input" defaultChecked /> Maths 
                                    <i className="input-helper"></i>
                                </label>
                            </div>
                            </Form.Group>
                        </div>
                        <div className="col-sm-6">
                            <Form.Group>
                            <div className="form-check form-check-success">
                                <label className="form-check-label">
                                    <input type="checkbox" className="form-check-input" defaultChecked /> Punjabi 
                                    <i className="input-helper"></i>
                                </label>
                            </div>
                            </Form.Group>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-3">
                            <button type="button" className="btn btn-primary" style={{lineHeight:1.5, float:'right'}}>Add More</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <Modal.Footer style={{backgroundColor: '#ffffff'}}>
          <Button variant="secondary" onClick={() => this.handleClose()}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
            {/* ================================= */}

            </div>
        )
    }
}

export default ManageStaffData;