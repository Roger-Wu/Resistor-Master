import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

import Resistor from './Resistor.jsx';

export default class ResistorGame extends Component {
  constructor(props) {
    super(props);
  }

  getProblem() {
    return {
      _id: 1,
      statement: [2, 2, 3, 10],
      options: ["10k", "22k", "81k", "87k"],
      answerIdx: 1,
    };
  }

  render() {
    return (
      <div>
        <ResistorProblem problem={this.getProblem()}/>
      </div>
    );
  }
}

class ResistorProblem extends Component {
  render() {
    const { problem } = this.props;

    const style = {
      container: {
        maxWidth: 400,
        margin: "0 auto",
        padding: 12,
      },
      option: {
        display: "block",
        margin: "12px auto 0",
        width: 240,
        height: 56,
      },
      optionText: {
        fontSize: 24,
      }
    }

    return (
      <Paper
        key={problem._id}
        style={style.container}
        zDepth={1}
      >
        <div>Q1</div>
        <div>Score: 1</div>
        <div style={{padding: "30px 0"}}>
          <Resistor codes={problem.statement} />
        </div>
        {
          problem.options.map((option, index) => {
            return (
              <RaisedButton
                key={option}
                label={option}
                labelStyle={style.optionText}
                secondary={true}
                style={style.option}
              />
            );
          })
        }
      </Paper>
    );
  }
}
