import React from "react";
import { Badge } from "react-bootstrap";

class  App extends React.Component {
  render(){
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

        </div>
        <div className="col-md-6">
          <div className="col text-center">
            <h4>
            <Badge className="text-align-center" variant='secondary'>
              Preview

            </Badge>
            </h4>
          </div>

        </div>
       


      </div>
    </div>
    </div>
  );
}
}

export default App;
