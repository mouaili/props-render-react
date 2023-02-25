import React, { Component } from 'react';
import vegeta from '../images/vegeta.png';

class Vegeta extends Component {
  render() {
    const { hits, addOne, name } = this.props;

    return (
      <div className='col'>
        <img className='d-block m-auto' src={vegeta} width='201' alt='Vegeta' />
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

export default Vegeta;
