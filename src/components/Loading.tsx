import React, { Component } from 'react';
import { CgSpinner } from 'react-icons/cg';
type Props = {};

type State = {};

export default class Loading extends Component<Props, State> {
  state = {};

  render() {
    return (
      <div className="w-full flex justify-center items-center h-32">
        <CgSpinner className="animate-spin text-6xl text-primary" />
      </div>
    );
  }
}
