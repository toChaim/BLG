import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ENV = require('../../ENV');
console.log('******************', 'ENV=', ENV, '&&&&&&&&&&&&&&&&&&&');
import { PORT, HOST } from '../../ENV';
import { PRODUCTION_HOST } from '../../CONSTANTS';

const url = HOST === PRODUCTION_HOST ? `${HOST}/api` : `${HOST}:${PORT}/api`;

function Content() {
  const [content, setContent] = useState('loading content');
  useEffect(() => {
    axios.get(url)
      .then(res => {
        setContent(res.data?.data?.message ?? 'failed to load content');
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div className="content">
      {content}
    </div>
  );
}

export default Content;
