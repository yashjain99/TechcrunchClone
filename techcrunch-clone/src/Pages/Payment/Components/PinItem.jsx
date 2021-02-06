import React from "react";

const style = {
  padding: 8,
  width: 60,
  fontSize: 14,
  margin: 5,
};

class PinItem extends React.Component {
  constructor(props) {
    super(props);
  }

  focus = () => {
    this.input.focus();
  };

  setValue = (val) => {
    this.input.value = val;
  };

  onChange(e) {
    let len = e.target.value;
    this.props.onChange(e.target.value);
    // console.log(len.length);
  }

  handleKeyUp = (e) => {
    if (e.keyCode === 8 && !this.input.value) {
      // console.log(!this.input.value);
      this.props.onBackspace(e);
    } else {
      this.onChange(e);
    }
  };

  render() {
    return (
      <input
        onKeyUp={this.handleKeyUp}
        style={{ ...style }}
        ref={(n) => (this.input = n)}
        maxLength={4}
      />
    );
  }
}

export { PinItem };
