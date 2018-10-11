import React, { PropTypes } from 'react';

export default class Welcome extends React.Component {
  showApp = (e) => {
    e.preventDefault();
    if (this.props.showApp) this.props.showApp();
  };

  render() {
    return (
      <div>
        <a href="https://badge.fury.io/js/%40infinitecsolutions%2Fui">
          <img src="https://badge.fury.io/js/%40infinitecsolutions%2Fui.svg" alt="npm version" height="18" />
        </a>
        <h1>Welcome to Infinitec&apos;s UI Storybook</h1>
        <p>This is a UI component dev environment for the component library.</p>
        <p>
          Stories are originating from the <code>/stories</code> directory.
          <br />
          A story is a state of one or more UI components.
          <br />
          (Basically a story is like a visual test case.)
        </p>
        <p>
          See these sample{' '}
          <a href="#" onClick={this.showApp}>
            stories
          </a>{' '}
          for a component called <code>Button</code>.
        </p>
        <p>
          Just like that, you can add your own components as stories.
          <br />
          You can also edit those components and see changes right away.
          <br />
          (Try editing the <code>Button</code> component located at <code>src/stories/button.stories.js</code>.)
        </p>
      </div>
    );
  }
}
