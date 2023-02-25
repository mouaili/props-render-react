import React, { Component } from 'react';
import frieza from '../images/frieza.webp';

class Frieza extends Component {
  render() {
    const { hits, addOne, name } = this.props;

    return (
      <div className='col'>
        <img className='d-block m-auto' src={frieza} width='254' alt='Frieza' />
        <br />
        <button className='btn btn-primary m-2' onClick={addOne}>
          {name} frappe
        </button>
        <table className='table table-dark table-striped'>
          <thead>
            <tr>
              <th>Coups</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{hits}</td>
            </tr>
          </tbody>
          <tfoot></tfoot>
        </table>
      </div>
    );
  }
}

export default Frieza;
