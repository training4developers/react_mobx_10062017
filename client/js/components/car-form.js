import React from 'react';

import { BaseForm } from './base-form';

export class CarForm extends BaseForm {

  constructor(props) {
    super(props);

    this.state = {
      make: '',
      model: '',
      year: 1900,
      color: '',
      price: 0,
    };    
  }

  onClick = () => {
    
    this.props.onSaveCar({
      make: this.state.make,
      model: this.state.model,
      year: this.state.year,
      color: this.state.color,
      price: this.state.price,
    });

    if (this.props.history) {

      this.props.history.push({
        pathname: '/',
      });

    } else {

      this.setState({
        make: '',
        model: '',
        year: 1900,
        color: '',
        price: 0,
      }, () => {
        if (this.makeInput) {
          this.makeInput.focus();
        }
      });
    }

  }

  componentWillReceiveProps(nextProps) {

    if (nextProps.doSetFocus) {
      if (this.makeInput) {
        this.makeInput.focus();
      }      
    }

  }

  componentDidMount() {

    if (this.makeInput) {
      this.makeInput.focus();
    }

  }

  // componentDidUpdate() {

  //   

  // }

  // onChange = e => {
  //   this.setState({
  //     [ e.currentTarget.name ]: e.currentTarget.value,
  //   }, () => {
  //     console.log('state was updated');
  //   });

  // }

  render() {

    return <form>
      <div>
        <label htmlFor="make-input">Make:</label>
        <input type="text" id="make-input" name="make"
          value={this.state.make} onChange={this.onChange}
          ref={ input => this.makeInput = input } />
      </div>
      <div>
        <label htmlFor="model-input">Model:</label>
        <input type="text" id="model-input" name="model"
          value={this.state.model} onChange={this.onChange} />
      </div>
      <div>
        <label htmlFor="year-input">Year:</label>
        <input type="number" id="year-input" name="year"
          value={this.state.year} onChange={this.onChange} />
      </div>
      <div>
        <label htmlFor="color-input">Color:</label>
        <input type="text" id="color-input" name="color"
          value={this.state.color} onChange={this.onChange} />
      </div>
      <div>
        <label htmlFor="price-input">Price:</label>
        <input type="number" id="price-input" name="price"
          value={this.state.price} onChange={this.onChange} />
      </div>
      <button type="button" onClick={this.onClick}>Save Car</button>
    </form>;

  }

}