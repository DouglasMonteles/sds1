import React, { useEffect, useState } from 'react';
import api from '../../services/api.service';

import './styles.css';

import { RecordsResponse } from './type';
import { formateDate } from './helpers';

const Records = () => {
  const [recordsResponse, setRecordsResponse] = useState<RecordsResponse>();

  useEffect(() => {
    api.get('records?linesPerPage=12')
      .then((response) => {
        setRecordsResponse(response.data);
      });
  }, []);

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
          {recordsResponse?.content.map(record => (
            <tr key={record.id}>
              <td>{formateDate(record.moment)}</td>
              <td>{record.name}</td>
              <td>{record.age}</td>
              <td className="text-secondary">{record.gamePlatform}</td>
              <td>{record.genreName}</td>
              <td className="text-primary">{record.gameTitle}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Records;