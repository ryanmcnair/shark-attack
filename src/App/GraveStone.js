import React, { Component } from 'react';
import {
  Card, CardBody,
  CardTitle,
}
  from 'reactstrap';

export default class GraveCard extends Component {
  render() {
    return (
      <>
      <div id="graveCard">
      <Card body inverse color="danger">
        <CardBody>
        <h2><i class="fas fa-skull-crossbones"></i></h2>
          <CardTitle tag="h3">{this.props.firstName} {this.props.lastName}</CardTitle>
        </CardBody>
      </Card>
    </div>
      </>
    );
  }
}
