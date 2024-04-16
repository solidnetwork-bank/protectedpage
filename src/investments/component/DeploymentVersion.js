import React, { Component } from 'react';
import {
  API_STAGE
} from '../action/action-const';

export default class DeploymentVersion extends Component {


  render() {
    return (
      <div>
        <h1>

          {
            (() => {

              if (API_STAGE === "V0") {
                return (
                  <span>Development Environment: REST API Geteway Mock mode.</span>
                );
              } else {
                return (
                  <span>Production Environment: REST API Geteway Beanstalk mode.</span>
                );
              }

            })()

          }

        </h1>
      </div>
    );
  }
}
