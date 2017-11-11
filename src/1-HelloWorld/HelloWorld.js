import React from 'react';

class HelloWorld extends React.Component {

    render() {
        return <h1>Hello React BOY!</h1>;

        // React.createElement(element, props, ...children);
        // return React.createElement('h1', null, "Hello ", "World!");
    }
}

export default HelloWorld;