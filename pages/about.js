import React, { Component } from 'react';
import Page from '../components/Page';

export default class extends Component {
  render() {
    return (
      <div className="about">
        <Page content='This is the about page.' />
      </div>
    );
  }
}
