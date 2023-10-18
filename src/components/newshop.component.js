import React, { Component } from 'react';

export default class newshop extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: '',
          description: '',
          file: null
        };
      }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('Name:', this.state.name, 
        'Description:', this.state.description);
        //alert the file name
        alert(this.state.file.name + ' has been uploaded\nName: ' + this.state.name + '\nDescription: ' + this.state.description);

        //display the image file

  
    };

    handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
            this.setState({
            file: file,
            imageUrl: reader.result
            });
        };
        reader.readAsDataURL(file);
    }
        
    }
    

    //handle file upload
    // handleFileChange = (e) => {
    //     this.setState({ file: e.target.files[0] });
    // };
    
    //reset all input fields when button is clicked
    handleReset = () => {
        this.setState({
            name: '',
            description: '',
            file: null
        });
    }

    
    render() {
        return (
            <div className="container mt-5">
        <h2>New Shop</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="mb-3">
            <input type="file" className="form-control" onChange={this.handleFileChange} />
          </div>
          <div className="mb-3">
            <label className="form-label">Name:</label>
            <input type="text" className="form-control" value={this.state.name} onChange={e => this.setState({ name: e.target.value })} />
          </div>
          <div className="mb-3">
            <label className="form-label">Description:</label>
            <input type="text" className="form-control" value={this.state.description} onChange={e => this.setState({ description: e.target.value })} />
          </div>
          <button type="submit" className="btn btn-primary me-2">Submit</button>
          <button type="button" className="btn btn-secondary" onClick={this.handleReset}>Cancel</button>
        </form>
        {this.state.file && (
                <img src={this.state.imageUrl} alt="" />
              )}
      </div>
        )
    }
    
}