import React, { Component, Fragment } from "react";

import { IProps, IState } from "./types";

class Accordion extends Component<IProps, IState> {
  public readonly state: IState = {
    showContent: false
  };

  public render() {
    const { showContent } = this.state;

    return (
      <Fragment>
        <button type="button" onClick={this.toggle}>
          Click me
        </button>
        {showContent && this.renderContent}
      </Fragment>
    );
  }

  private toggle = () => {
    this.setState(state => ({
      showContent: !state.showContent
    }));
  };

  private renderContent = () => this.props.children;
}

export default Accordion;
