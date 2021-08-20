import React, {Component} from 'react';
import MaterialTable from "material-table";
import { Form, Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ReactTooltip from "react-tooltip";
import ToggleDays from "./ToggleDays";

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
    height: '44px',
    padding: '3px',
    borderBottom:'solid',
//   margin: `0 0 ${grid}px 0`,

  // change background colour if dragging
  background: isDragging ? "lightgreen" : "White",

  // styles we need to apply on draggables
  ...draggableStyle
});


class AddBusRoute extends Component {
    constructor(props){
        super(props);
        this.state = {
          records: [],
          items: [{
            id: `1`,
            content: `16 Sector`
          },
          {
            id: `2`,
            content: `18 Sector`
          },
          {
            id: `3`,
            content: `20 Sector`
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
                <h3 className="page-title">Bus Data </h3>
                </div>
                <div className="row">
                    <div className="col-lg-12 grid-margin stretch-card">    
                        <div className="card">
                            <div className="card-body">
                                <form className="forms-sample">
																<h4 className="card-title">Add Bus Route</h4>
                                    <div className="row">
                                        <div className="col-md-7">
                                            <Form.Group className="row">
                                            <label className="col-sm-3 col-form-label">Route No.<span style={this.state.startstyle}>*</span></label>
                                            <div className="col-sm-9">
                                                <Form.Control  type="text" />
                                            </div>
                                            </Form.Group>
                                        </div>
										
                                        <div className="col-md-7">
                                            <Form.Group className="row">
                                            <label className="col-sm-3 col-form-label">Bus No./Id<span style={this.state.startstyle}>*</span></label>
                                            <div className="col-sm-9">
                                                <Form.Control  type="text" />
                                            </div>
                                            </Form.Group>
                                        </div>
                                        <div className="col-md-7">
                                            <Form.Group className="row">
                                                <label className="col-sm-3 col-form-label">Bus Driver<span style={this.state.startstyle}>*</span></label>
                                                <div className="col-sm-9">
                                                    <select className="form-control col-sm-9">
                                                        <option>kishan</option>
                                                        <option>bahadur</option>
                                                        <option>kamal</option>
                                                        <option>kuldeep</option>
                                                        <option>abdul</option>
                                                    </select>
                                                </div>
                                            </Form.Group>
                                        </div>
										<div className="col-md-7">
                                            <Form.Group className="row">
                                                <label className="col-sm-3 col-form-label">Bus Monitor<span style={this.state.startstyle}>*</span></label>
                                                <div className="col-sm-9">
                                                    <select className="form-control col-sm-9">
                                                        <option>rakesh</option>
                                                        <option>mandeep</option>
                                                        <option>makhan</option>
                                                        <option>billu</option>
                                                        <option>jagga</option>
                                                    </select>
                                                </div>
                                            </Form.Group>
                                        </div>
                                        <div className="col-md-7">
                                            <Form.Group className="row">
                                            <label className="col-sm-3 col-form-label">Departure Time<span style={this.state.startstyle}>*</span></label>
                                            <div className="col-sm-9">
                                                <Form.Control
                                                    type="time"
                                                    format="hh:mm"
                                                    name="recordingDepartureTime"
                                                    placeholder="Start Time"
                                                />
                                            </div>
                                            </Form.Group>
                                        </div>
										<div className="col-md-7">
                                            <Form.Group className="row">
                                            <label className="col-sm-3 col-form-label">Arrival Time<span style={this.state.startstyle}>*</span></label>
                                            <div className="col-sm-9">
                                                <Form.Control
                                                    type="time"
                                                    format="hh:mm"
                                                    name="recordingStartTime"
                                                    placeholder="Start Time"
                                                />
                                            </div>
                                            </Form.Group>
                                        </div>
										<div className="col-md-7">
                                            <Form.Group className="row">
                                            <label className="col-sm-3 col-form-label">Days Of Week<span style={this.state.startstyle}>*</span></label>
                                            <div className="col-sm-9">
                                                <ToggleDays />
                                            </div>
                                            </Form.Group>
                                        </div>
										<div className="col-md-7">
                                            <Form.Group className="row">
                                            <label className="col-sm-3 col-form-label">Capacity<span style={this.state.startstyle}>*</span></label>
                                            <div className="col-sm-9">
                                                <Form.Control  type="text" />
                                            </div>
                                            </Form.Group>
                                        </div>
										<div className="col-md-7">
                                            <Form.Group className="row">
                                            <label className="col-sm-3 col-form-label">Start From<span style={this.state.startstyle}>*</span></label>
                                            <div className="col-sm-9">
                                                <Form.Control  type="text" value="school" />
                                            </div>
                                            </Form.Group>
                                        </div>
										<div className="col-md-7">
                                            <Form.Group className="row">
                                            <label className="col-sm-3 col-form-label">Stop At<span style={this.state.startstyle}>*</span>(Destinations)</label>
                                            <div className="col-sm-9">
                                                <Form.Control  type="text" />
											</div>
                                            </Form.Group>
                                        </div>
                                        <div className="col-md-1">
                                                <button type="button" className="btn btn-link btn-rounded btn-fw">Add More</button>
                                        </div>
                                        <div className="col-md-7">
                                            <Form.Group className="row">
                                            <label className="col-sm-3 col-form-label"></label>
                                            <div className="col-sm-9">

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
                    <span>
                        {item.content}
                        <span className="float-right">
                            <ReactTooltip id='Delete' type='error' effect='solid'>
                                <span>Delete</span>
                            </ReactTooltip>

                            <button data-tip data-for="Delete" type="button" className="btn btn-outline-danger" style={{padding:'8px'}}>
                                <i className="mdi mdi-delete"style={{fontSize:'17px'}}></i>
                            </button>
                        </span>
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
                                        <button type="submit" className="btn btn-primary ml-2 btn-fw" style={{lineHeight:1.5, float:'right'}}>Submit</button>
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

export default AddBusRoute;