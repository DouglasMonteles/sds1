import React from 'react';

import './styles.css';

const Records = () => {
  return (
    <div className="page-contanier">
      <table className="records-table" cellPadding={0} cellSpacing={0}>
        <thead>
          <tr>
            <th>INSTANTE</th>
            <th>NOME</th>
            <th>IDADE</th>
            <th>PLATAFORMA</th>
            <th>GÊNERO</th>
            <th>TÍTULO DO GAME</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>20/08/2020 13:45</td>
            <td>Douglas Monteles</td>
            <td>25</td>
            <td>XBOX</td>
            <td>Ação - Aventura</td>
            <td>The Last Of US</td>
          </tr>

          <tr>
            <td>20/08/2020 13:45</td>
            <td>Douglas Monteles</td>
            <td>25</td>
            <td>XBOX</td>
            <td>Ação - Aventura</td>
            <td>The Last Of US</td>
          </tr>

          <tr>
            <td>20/08/2020 13:45</td>
            <td>Douglas Monteles</td>
            <td>25</td>
            <td>XBOX</td>
            <td>Ação - Aventura</td>
            <td>The Last Of US</td>
          </tr>

          <tr>
            <td>20/08/2020 13:45</td>
            <td>Douglas Monteles</td>
            <td>25</td>
            <td>XBOX</td>
            <td>Ação - Aventura</td>
            <td>The Last Of US</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Records;