import React, {Component} from 'react';
import MaterialTable from "material-table";
import { Form, Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ReactTooltip from "react-tooltip";
import * as actions from '../../redux/actions/subject';
import SimpleReactValidator from 'simple-react-validator';
import { ToastContainer, toast } from "react-toastify";
import { connect } from 'react-redux';

class ManageSubjects extends Component {
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
        selectedClass: '',

        _id:"",
        subjectName:""
      }
      this.validator = new SimpleReactValidator({autoForceUpdate: this})
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChanges = this.handleChanges.bind(this);
    }

    componentDidMount(){
      this.props.getSubjectList();
    }

  componentWillReceiveProps(nextProps){
    console.log(nextProps.list)
    this.setState({ records: nextProps.list})

    if(nextProps.error){
      toast.error(nextProps.msg.toString(), {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else if(nextProps.success && nextProps.msg){
        toast.success(nextProps.msg.toString(), {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
    }
    nextProps.eraseMsg()
  }

      // ======================================= coding part =======================================
      handleChanges = (event) => {
        const { name, value } = event.target;
            this.setState({
                [name]: value
            })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let {
            _id,
            subjectName
        } = this.state
        if(this.validator.allValid()){
            this.validator.hideMessages();
            if(this.state._id){
                this.props.editSubject({
                    _id,
                    subjectName
                })
            } else {
                this.props.createSubject({
                  subjectName
                })
            }
            this.cleanFields()
        } else {
            this.validator.showMessages();
        }
    }

    cleanFields = () => {
        this.setState({
            _id:"",
            subjectName:""
        })
    }
    
    editSubject = (props) => {
      let {
          _id,
          subjectName
      } = props
      this.setState({
          _id,
          subjectName
      })
    }
    // ===================================/ coding part /=======================================

    renderAction = (props) => {
    
        return(
            <span>
              <ReactTooltip id='Edit' type='warning' effect='solid'>
                <span>Edit</span>
              </ReactTooltip>
                <button data-tip data-for="Edit" onClick={ ()=> this.editSubject(props)} type="button" className="btn btn-outline-warning" style={{padding:'8px'}}>
                    <i className="mdi mdi-border-color" style={{fontSize:'17px'}}></i>
                </button>
                
              <ReactTooltip id='Delete' type='error' effect='solid'>
                <span>Delete</span>
              </ReactTooltip>
              
                <button data-tip data-for="Delete" onClick={() => this.props.deleteSubject(props._id)} type="button" className="btn btn-outline-danger" style={{padding:'8px'}}>
                    <i className="mdi mdi-delete"style={{fontSize:'17px'}}></i>
                </button>
            </span>
        )
    }


    field = () => {
        const fields = [
            {
              title: "Subjects",
              field: "subjectName",
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
                <h3 className="page-title"> Subjects </h3>
                </div>
                <div className="row">
                    <div className="col-lg-12 grid-margin stretch-card">    
                        <div className="card">
                            <div className="card-body">
                                <form onSubmit={this.handleSubmit} className="forms-sample">
                                    <div className="row">
                                        <div className="col-md-9">
                                            <Form.Group className="row">
                                            <label className="col-sm-2 col-form-label">Subject<span style={this.state.startstyle}>*</span></label>
                                            <div className="col-sm-10">
                                                <Form.Control type="text" name="subjectName" onChange={this.handleChanges} value={this.state.subjectName} />
                                                {this.validator.message('subjectName', this.state.subjectName, 'required', {className:"text-danger"})}
                                            </div>
                                            </Form.Group>
                                        </div>
                                        <div className="col-md-3">
                                        <button type="submit" className="btn btn-primary ml-2 btn-fw" style={{lineHeight:1.5}}>{this.state._id?"Update":"Add"}</button>
                                        </div>
                                    </div>

                                    {/* ========================================================== */}
                                </form>
                            </div>
                        </div>
                    </div>
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
                            columns={this.field()}
                            options={{ search: true, paging: true, exportButton: true, }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
  return {
      error: state.subject.error,
      success: state.subject.success,
      msg: state.subject.msg,
      list: state.subject.SubjectList,
      selectedSubject: state.subject.selectedSubject
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      getSubjectList: () => dispatch(actions.getSubject()),
      createSubject: (data) => dispatch(actions.createSubject(data)),
      editSubject: (data) => dispatch(actions.editSubject(data)),
      deleteSubject: (id) => dispatch(actions.deleteSubject(id)),
      eraseMsg: () => dispatch(actions.eraseMsg())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageSubjects);