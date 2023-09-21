import React from "react";
import { Badge } from "react-bootstrap";
import { marked } from "marked";



class  App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      name:"",
    }
  }
  updateName(name)
  {
    this.setState({name});

  }
  render(){
    const inputStyle = {
      width: "400px",
      height: "50vh",
      marginLeft: "auto",
      marginRight: "auto",
      padding:"10px"
    };
    const outputStyle = {
      width: "400px",
      height: "50vh",
      backgroundColor: "#DCDCDC",
      marginLeft: "auto",
      marginRight: "auto",
      padding:"10px"
    };
  return (
    <div className="App">
    <div className="container">
      <div className="row mt-4">
        <div className="col text-center">
          <h1>
            <Badge className="text-align-center" variant="light">
              Markdown previewer

            </Badge>
          </h1>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-6">
          <div className="col text-center">
            <h4>
            <Badge className="text-align-center" variant='secondary'>
              Markdown Input

            </Badge>
            </h4>
          </div>
          <div className="mark-input" style={inputStyle} >
            <textarea className="input"style={inputStyle} value={this.state.name} onChange={(e)=>{
              this.updateName(e.target.value)
            }} >
              {console.log(this.state.name)}

            </textarea>
          </div>

        </div>
        <div className="col-md-6">
          <div className="col text-center">
            <h4>
            <Badge className="text-align-center" variant='secondary'>
              Preview

            </Badge>
            </h4>
          </div>
          <div style={outputStyle}
             dangerouslySetInnerHTML={{
              __html: marked(this.state.name),
            }}
          ></div>

        </div>
       


      </div>
    </div>
    </div>
  );
}
}

export default App;
