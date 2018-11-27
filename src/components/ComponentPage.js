import React, { Component } from "react";

class ComponentPage extends Component {
  componentWillUnmount() {
    console.log("if modal is open, dispatch modal hide action");
  }
}

export default ComponentPage;
