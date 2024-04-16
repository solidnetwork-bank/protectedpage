import React, { Component } from 'react';
import {
  API_STAGE
} from '../action/action-const';

export default class DeploymentVersion extends Component {


  render() {
    return (
      <div>
        <p Style="text-align: right; font-size: 10px; font-weight: bold;">

          {
            (() => {

              if (API_STAGE === "V0") {
                return (
                 "REST API Gateway Mock mode."
                );
              } else {
                return (
                 "REST API Gateway Beanstalk mode."
                );
              }

            })()

          }

        </p>
      </div>
    );
  }
}
