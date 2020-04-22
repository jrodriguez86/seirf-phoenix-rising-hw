import React from 'react';
import logo from './logo.svg';
import './App.css';


  class App extends React.Component {

    state = {
      
      animals: []
    }
  
    componentDidMount() {
      this.getComments()
    }
  
    getComments = () => {
      fetch(baseURL+ '/animals')
        .then(data => {
          return data.json()},
          err => console.log(err))
          .then(parsedData => this.setState({
            requests: parsedData
          }),
           err=> console.log(err))
    }
  
  //for show route
  getRequest = (request) => {

    this.setState({request, getRequestActive: true, getEditRequestActive: false}) 

  }

    //for edit route
    getEditRequest = (request) => {
      this.setState({request, getRequestActive: false, getEditRequestActive: true, show: true})
    }

  
  
   // New Form HandleAdd 
    handleAddRequest = (requests) => {
      const copyRequest = [...this.state.requests]
      copyRequest.unshift(requests)
      this.setState({
        requests: copyRequest,
        name: '',
        comments: '',
        location: '',
      })
    }

    handleEditRequest = (data) => {
      const newData = this.state.requests.filter( request => {
        return request._id !== data._id
      })
      newData.push(data);
      this.setState({ 
        requests: newData,
        show: false
      })
    }
  
  
      //function to delete a request and return all the others
      deleteRequest = (id) => {
        fetch(baseURL + '/animals/' + id, {
          method: 'DELETE'
        }).then ( res => {
          const requestsArr = this.state.animals.filter( request => {
            return request._id !== id
          })
          this.setState({requests: requestsArr})
        })
      }
  
    render() {
      console.log(this.state.requests)
    return (
  
      // Comments/Requests
      <div className="commentsContainer">
       
        <NewForm baseURL={baseURL}
    handleAddRequest={this.handleAddRequest}/>
  
    {/* this is where the requests will display */}

    <Table striped bordered hover responsive="lg" className="commenttable">
    <tbody>
        <tr>
          <th>Name</th> 
          <th>Species</th> 
          <th>Breed</th> 
          <th>Delete</th> 
          <th>Edit</th> 
         </tr> 
      {this.state.requests.map(request => (
         <tr key={request._id}
         onMouseOver={() => this.getRequest(request)}>
          <td>{request.name}</td>
          <td>{request.comments}</td>
          <td>{request.location}</td>

          <td className="delete"><Button variant="secondary" onClick={() => this.deleteAnimals(request._id)}>Delete</Button></td>
          <td className="edit"><Button className="Edit-Button" govariant="primary" onClick={() => {this.getEditRequest(request)} }>Edit</Button></td>
          </tr>
      ))}
    </tbody>
  </Table>
  {this.state.getRequestActive ? <Show request={this.state.animals}/> : null}
  <br/>
  <br/>
  
  {this.state.getEditRequestActive ? <UpdateModal baseURL={baseURL}animal={this.state.animals} 

      
    );
  }
  }
}


export default App;
