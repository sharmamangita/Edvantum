import React, {Component} from 'react';
import { Form } from 'react-bootstrap';
import ReactTooltip from "react-tooltip";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";


// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
    userSelect: "none",
    padding: '3px',
    borderBottom:'solid',
//   margin: `0 0 ${grid}px 0`,

  // change background colour if dragging
  background: isDragging ? "lightgreen" : "White",

  // styles we need to apply on draggables
  ...draggableStyle
});


class AddExamSchedule extends Component {
    constructor(props){
        super(props);
        this.state = {
          records: [],
          items: [{
            id: "1",
            subject: "English",
            date: "19-07-2021",
            time: "11:00 to 12:15"
          },
          {
            id: `2`,
            subject: "Maths",
            date: "20-07-2021",
            time: "11:00 to 12:15"
          },
          {
            id: `3`,
            subject: "Hindi",
            date: "22-07-2021",
            time: "11:00 to 12:15"
          }
        ],
          tooltipOpen: false,
          startstyle: {
            color: 'red',
            fontSize: '14px'
          }
        }
        this.onDragEnd = this.onDragEnd.bind(this);
    }

    componentDidMount(){
       
    }

    onDragEnd(result) {
        // dropped outside the list
        if (!result.destination) {
          return;
        }
    
        const items = reorder(
          this.state.items,
          result.source.index,
          result.destination.index
        );
    
        this.setState({
          items
        });
    }
    


    render() {
        return(
            <div>
                <div className="page-header">
                <h3 className="page-title">Add Exam Schedule </h3>
                </div>
                <div className="row">
                    <div className="col-lg-12 grid-margin stretch-card">    
                        <div className="card">
                            <div className="card-body">
                                <form className="forms-sample"> 
                                    
                                    <div className="row">
                                        <div className="col-md-6">
                                            <Form.Group className="row">
                                                <label className="col-sm-3 col-form-label">Select Class<span style={this.state.startstyle}>*</span></label>
                                                <div className="col-sm-9">
                                                    <select className="form-control">
                                                        <option>I</option>
                                                        <option>II</option>
                                                        <option>III</option>
                                                        <option>IV</option>
                                                    </select>
                                                </div>
                                            </Form.Group>
                                        </div>
                                        <div className="col-md-6">
                                        <Form.Group className="row">
                                            <label className="col-sm-3 col-form-label">Term<span style={this.state.startstyle}>*</span></label>
                                            <div className="col-sm-9">
                                                <select className="form-control">
                                                <option>I</option>
                                                <option>II</option>
                                                <option>III</option>
                                                </select>
                                            </div>
                                        </Form.Group>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-3">
                                            <Form.Group className="row">
                                                <label className="col-sm-3 col-form-label">Subject<span style={this.state.startstyle}>*</span></label>
                                                <div className="col-sm-9">
                                                    <select className="form-control">
                                                        <option>English</option>
                                                        <option>Hindi</option>
                                                        <option>Punjabi</option>
                                                    </select>
                                                </div>
                                            </Form.Group>
                                        </div>
                                        <div className="col-md-3">
                                            <Form.Group className="row">
                                                <label className="col-sm-3 col-form-label">Date<span style={this.state.startstyle}>*</span></label>
                                                <div className="col-sm-9">
                                                    <Form.Control type="date" />
                                                </div>
                                            </Form.Group>
                                        </div>
                                        <div className="col-md-6">
                                            <Form.Group className="row">
                                                <label className="col-sm-3 col-form-label">Time<span style={this.state.startstyle}>*</span></label>
                                                <div className="col-sm-4">
                                                    <Form.Control
                                                        type="time"
                                                        format="hh:mm"
                                                        name="recordingStartTime"
                                                    />
                                                </div>
                                                <div className="col-1">
                                                    <label className="col-form-label">To</label>
                                                </div>
                                                <div className="col-sm-4">
                                                    <Form.Control
                                                        type="time"
                                                        format="hh:mm"
                                                        name="recordingStartTime"
                                                    />
                                                </div>
                                            </Form.Group>
                                        </div>
                                    </div>

                                    <div className="row">  
                                        <div className="col-md-12">
                                            <Form.Group className="row">
                                                <div className="col-sm-12">
                                                    {/* ================================================================================== */}
                                                    <DragDropContext onDragEnd={this.onDragEnd}>
                                                            <Droppable droppableId="droppable">
                                                            {(provided, snapshot) => (
                                                                <div
                                                                {...provided.droppableProps}
                                                                ref={provided.innerRef}
                                                                >
                                                                {this.state.items.map((item, index) => (
                                                                    <Draggable key={item.id} draggableId={item.id} index={index}>
                                                                    {(provided, snapshot) => (
                                                                        <div
                                                                        ref={provided.innerRef}
                                                                        {...provided.draggableProps}
                                                                        {...provided.dragHandleProps}
                                                                        style={getItemStyle(
                                                                            snapshot.isDragging,
                                                                            provided.draggableProps.style
                                                                        )}
                                                                        >
                                                                            <span className="row">
                                                                                <div className="col-md-3">
                                                                                    {item.subject}
                                                                                </div>
                                                                                <div className="col-md-3">
                                                                                    {item.date}
                                                                                </div>
                                                                                <div className="col-md-3">
                                                                                    {item.time}
                                                                                </div>
                                                                                <div className="col-md-3">
                                                                                    <span className="float-right">

                                                                                        <ReactTooltip id='Edit' type='warning' effect='solid'>
                                                                                            <span>Edit</span>
                                                                                        </ReactTooltip>
                                                                                        <button data-tip data-for="Edit" type="button" className="btn btn-outline-warning" style={{padding:'8px'}}>
                                                                                            <i className="mdi mdi-border-color" style={{fontSize:'17px'}}></i>
                                                                                        </button>

                                                                                        <ReactTooltip id='Delete' type='error' effect='solid'>
                                                                                            <span>Delete</span>
                                                                                        </ReactTooltip>

                                                                                        <button data-tip data-for="Delete" type="button" className="btn btn-outline-danger" style={{padding:'8px'}}>
                                                                                            <i className="mdi mdi-delete"style={{fontSize:'17px'}}></i>
                                                                                        </button>
                                                                                    </span>
                                                                                </div>
                                                                            </span>
                                                                        </div>
                                                                    )}
                                                                    </Draggable>
                                                                ))}
                                                                {provided.placeholder}
                                                                </div>
                                                            )}
                                                            </Droppable>
                                                        </DragDropContext>
                                                    {/* ================================================================================== */}
                                                </div>
                                            </Form.Group>
                                        </div>
									</div>
                                    
                                    <div className="row">
                                        <div className="col-md-12">
                                            <button type="submit" className="btn btn-primary ml-2 btn-fw" style={{lineHeight:1.5, float:'right'}}>Add</button>
                                        </div>
                                    </div>
                                    {/* ========================================================== */}
                                </form>
                            </div>
                        </div>
                    </div>                    
                </div>
            </div>
        )
    }
}

export default AddExamSchedule;