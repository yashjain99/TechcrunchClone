import React from "react";
import PropTypes from "prop-types";
import { PinItem } from "./PinItem";

class Pin extends React.Component {
  constructor(props) {
    super(props);
    this.values = new Array(props.len).fill("");
    this.elements = [];
  }

  handleChange = (val, i) => {
    const { len, boxLen } = this.props;
    this.values[i] = val;
    if (val.length > 3 && i < len - 1) {
      this.elements[i + 1].focus();
    }
    this.props.onChange && this.props.onChange(this.values.join(""));
    // console.log();
  };

  handleBackspace = (i, val) => {
    if (i > 0) {
      this.elements[i - 1].focus();
    }
    this.values[i] = val;
    this.props.onChange && this.props.onChange(this.values.join(""));
  };

  handlePaste = (event, i) => {
    event.preventDefault();
    let val = event.clipboardData
      .getData("Text")
      .split("")
      .filter((_, i) => i < this.props.len);
    val.forEach((value, i) => {
      this.values[i] = value;
      this.elements[i].focus();
      this.elements[i].setValue(value);
    });
  };

  render() {
    const { isTrue } = this.props;
    return (
      <div>
        <div style={{ marginLeft: "5px" }}>Credit/Debit Card Number</div>
        {this.values.map((item, i) => (
          <PinItem
            isTrue={isTrue}
            key={i}
            ref={(n) => (this.elements[i] = n)}
            onBackspace={(e) => this.handleBackspace(i, e.target.value)}
            onChange={(val) => this.handleChange(val, i)}
            onPaste={(i) => this.handlePaste(i)}
          />
        ))}
      </div>
    );
  }
}

Pin.propTypes = {
  len: PropTypes.number.isRequired,
  //   boxLen: PropTypes.length,
};

export { Pin };
