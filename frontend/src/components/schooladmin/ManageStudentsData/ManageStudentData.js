import React, {Component} from 'react';
import MaterialTable from "material-table";
import { Link, withRouter } from 'react-router-dom';
import ReactTooltip from "react-tooltip";

class ManageStudentData extends Component {
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
        studentName:'Ankur Rana',
        admissionId:'123AB',
        admissionDate:'02-04-2012',
        class:'2-A',
        dob:'02-04-2012',
      },
      {
        _id: 2,
        studentName:'Manjeet Kaur',
        admissionId:'333AB',
        admissionDate:'02-05-2010',
        class:'2-B',
				dob:'02-04-2012',
      }
    ];
    this.setState({records: re})
  }

  renderAction = (props) => {
    
    return(
        <span>
          <ReactTooltip id='Edit' type='warning' effect='solid'>
            <span>Edit</span>
          </ReactTooltip>
            <Link to="/admin/addstudent"><button data-tip data-for="Edit" type="button" className="btn btn-outline-warning" style={{padding:'8px'}}>
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

StudentHyperLink = (props) => {
  return (
    <span>
      <Link>
        {props.studentName}
      </Link>
    </span>
  )
}

ClassHyperLink = (props) => {
  return (
    <span>
      <Link>
        {props.class}
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
        title: "Student Name ",
        render: this.StudentHyperLink
      },
      {
        title: "Admission ID",
        field: "admissionId",
      },
      {
        title: "Admission Date",
        field: "admissionDate",
      },
      {
        title: "Class",
        render: this.ClassHyperLink
      },
      {
        field: "dob",
        title: "DOB ",
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
          <h3 className="page-title"> Manage Students </h3>
					<Link className="nav-link" to="/admin/addstudent">
							<button type="submit" className="btn btn-primary ml-2 btn-fw" style={{lineHeight:1.5}}>Add</button>
          </Link>
					
                                        
        </div>
        <div className="row">
          
          <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
              <nav aria-label="breadcrumb">
                  <div className="row">
                    <div class="col">
                      <button type="button" class="btn mr-0 pr-0">
                        <i class="mdi mdi-import" style={{fontSize: "24px"}}></i>
                      </button>Import Bulk Data (<code><a href="" class="sm-text">Download &amp; View File Format</a></code>)
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
      </div>
    )
  }
}

export default ManageStudentData;