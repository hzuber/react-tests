import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import { create } from 'react-test-renderer';
import App from './App';
import Component from './component'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

function Button(props) {
    const [text, setText] = useState("")

    function handleClick() {
        setText("PROCEED TO CHECKOUT");
    }
    return (
        <button onClick = {handleClick}>
            {text || props.text}
        </button>
    )
}

describe("Component", () => {
  it('should disable the button when the text is less than 3 characters', () => {
    const text = "h"
    const component = create(<Component text={text}/>);
    const instance = component.root;
    const button = instance.findByType("button");
    expect(button.props.disabled).toBeTruthy;
    })

    
  it('should enable the button when the text is less than 3 characters', () => {
    const text = "hello"
    const component = create(<Component text={text}/>);
    const instance = component.root;
    const button = instance.findByType("button");
    expect(button.props.disabled).toBeFalsey;
    })
    
  it('should have an h1 when the text is at least 3 characters', () => {
    const text = "hello"
    const component = create(<Component text={text}/>);
    const instance = component.root;
    const form = instance.findByType("form");
    expect(form.toContain(form.findByType('h1')))
    })

  it('should not have an h1 when the text is less than 3 characters', () => {
    const text = "h"
    const component = create(<Component text={text}/>);
    const instance = component.root;
    const form = instance.findByType("form");
    expect(form.not.toContain(instance.findByType('h1')))
    })
  })

describe("Button component", () => {
  test("shows expected text when clicked", () => {
    const component = create(<Button text="SUBSCRIBE TO BASIC"/>);
    const instance = component.root;
    const button = instance.findByType("button");
    button.props.onClick();
    expect(button.props.children).toBe("PROCEED TO CHECKOUT");
  });
});