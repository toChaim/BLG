import React, { useState, useEffect } from 'react';
import axios from 'axios';


import { NODE_ENV, PORT, HOST } from '../ENV';
import { PRODUCTION_HOST } from '../CONSTANTS';

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
      <p>url={url}</p>
      <p>HOST={HOST}</p>
      <p>NODE_ENV={NODE_ENV}</p>
      {content}
    </div>
  );
}

export default Content;
