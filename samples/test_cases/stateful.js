import { React, Component } from 'react';

class Stateful extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
          <h1>Header 1</h1>
          <Query getUser={GET_USER}/>
          <InnerComponent testUser={TEST_USER}/>
          <Foo/>
      </div>
    );
  }
}

const Foo = () => (
  <div>
    <h2>Yay!</h2>
  </div>
);

const InnerComponent = () => (
  <div>
    <h1>Title</h1>
  </div>
);

export default Stateful;