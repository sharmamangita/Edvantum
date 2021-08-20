import React, {Component} from 'react';
import MaterialTable from "material-table";
import { Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import ReactTooltip from "react-tooltip";

class ManageFeeData extends Component {
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
            class: '1',
            month: 'April',
            totalFees: '260000.00',
          },
          {
            _id: 2,
            class: '2',
            month: 'April',
            totalFees: '180000.00',
          },
          {
            _id: 3,
            class: '3',
            month: 'April',
            totalFees: '160000.00',
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
              <Link to="/admin/masterdata/createfees">
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

  ClassHyperLink = (props) => {
    return(
      <span>
        <Link>
          {props.class}
        </Link>
      </span>
    )
  }

  TotalFeesHyperLink = (props) => {
    return(
      <span>
        <Link>
          {props.totalFees}
        </Link>
      </span>
    )
  }

    field = () => {
        const fields = [
            {
              title: "Class",
              render: this.ClassHyperLink
            },
            {
              title: "Month",
              field: "month",
            },
            {
              title: "Total Fees",
              render: this.TotalFeesHyperLink
            },
            {
              name: "action",
              title: "Actions ",
              render: this.renderAction,
            },
        ];
        return fields;
    }

    render() {
        return(
            <div>
                <div className="page-header">
                  <h3 className="page-title"> Manage Fees </h3>
                  
                  <Link className="nav-link" to="/admin/masterdata/createfees">
                    <button type="submit" className="btn btn-primary ml-2 btn-fw" style={{lineHeight:1.5}}>Create Fees</button>
                  </Link>
                      
                </div>
                
                <div className="row">
                    <div className="col-lg-12 grid-margin stretch-card">
                        <div className="card">
                    {/* =========================================== */}
                            <div className="row ml-1 mr-1">
                                <div className="col-1">
                                    <Dropdown alignRight>
                                        <Dropdown.Toggle className="bg-white dropdown-toggle border-0 p-3 mr-0 text-muted d-flex align-items-center">
                                            <i className="mdi mdi-calendar mr-1"></i>January
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item>January</Dropdown.Item>
                                            <Dropdown.Item>February</Dropdown.Item>
                                            <Dropdown.Item>March</Dropdown.Item>
                                            <Dropdown.Item>April</Dropdown.Item>
                                            <Dropdown.Item>May</Dropdown.Item>
                                            <Dropdown.Item>June</Dropdown.Item>
                                            <Dropdown.Item>July</Dropdown.Item>
                                            <Dropdown.Item>August</Dropdown.Item>
                                            <Dropdown.Item>September</Dropdown.Item>
                                            <Dropdown.Item>October</Dropdown.Item>
                                            <Dropdown.Item>November</Dropdown.Item>
                                            <Dropdown.Item>December</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                                <div className="col-1">
                                    <Dropdown alignRight>
                                        <Dropdown.Toggle className="bg-white dropdown-toggle border-0 p-3 mr-0 text-muted d-flex align-items-center">
                                            <i className="mdi mdi-calendar mr-1"></i>2019
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item>2019</Dropdown.Item>
                                            <Dropdown.Item>2020</Dropdown.Item>
                                            <Dropdown.Item>2021</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                                <div className="col-10"></div>
                            </div>
                
                            {/* =========================================== */}                   
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

export default ManageFeeData;