import React, { Component } from 'react';
import {
  Card, CardImg, CardBody,
  CardTitle,
}
  from 'reactstrap';

export default class StudentCard extends Component {
  render() {
    return (
      <>
      <div id="studenCard">
      <Card body inverse color="info">
        <CardBody>
          <h3><i class="fas fa-fish"></i></h3>
          <CardTitle tag="h3">{this.props.firstName} {this.props.lastName}</CardTitle>
        </CardBody>
        <CardImg top width="10%" src={this.props.image} alt={this.props.firstName} />
      </Card>
    </div>
      </>
    );
  }
}
