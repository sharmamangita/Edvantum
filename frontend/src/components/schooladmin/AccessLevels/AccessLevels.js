import React, {Component} from 'react';
import MaterialTable from "material-table";
import { Link } from 'react-router-dom';
import ReactTooltip from "react-tooltip";

class AccessLevels extends Component {
    constructor(props){
        super(props);
        this.state = {
          records: [],
          // tooltip
          place: "top",
          type: "dark",
          effect: "float",
          condition: false,
          startstyle: {
            color: 'red',
            fontSize: '14px'
          },
        }
    }

    componentDidMount(){
        let re = [
          {
            _id: 1,
            user: "Anil Sharma",
            username: 'Anil',
            category: 'Admin',
            access: "Fees, Bus"
          },
          {
            _id: 2,
            user: "Ram Singh",
            username:'Ram',
            category: 'Accounts',
            access: "Fees"
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
                <Link to="/admin/addaccesslevels"><button data-tip data-for="Edit" type="button" className="btn btn-outline-warning" style={{padding:'8px'}}>
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

  UserNameHyperlink = (props) => {
    return(
      <>
      <Link to="/admin/accesslevels">{props.username}</Link>
      </>
    )
  }
  UserHyperlink = (props) => {
    return(
      <>
      <Link to="/admin/accesslevels">{props.user}</Link>
      </>
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
              title: "Username",
              render: this.UserNameHyperlink
            },
            {
              title: "User",
              render: this.UserHyperlink
            },
            {
              title: "Category",
              field: "category",
            },
            {
              title: "Access",
              field: "access",
            },
            {
              name: "action",
              title: "Actions ",
              render: this.renderAction,
            },
        ];
        return fields;
    }

    handleClose = () => {
        this.setState({selectedClass:"", isModalVisible: false})
    }

    render() {
        return(
            <div>
                <div className="page-header">
                    <h3 className="page-title"> Manage Access Levels </h3>
                    <Link className="nav-link" to="/admin/addaccesslevels">
					    <button type="submit" className="btn btn-primary ml-2 btn-fw" style={{lineHeight:1.5}}>Add</button>
                    </Link>
                </div>
                <div className="row">
                    <div className="col-lg-12 grid-margin stretch-card">
                        <div className="card">                   
                            <MaterialTable
                            title=""
                            data={this.state.records}
                            columns={this.field()}
                            options={{ search: true, paging: true, exportButton: true }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AccessLevels;