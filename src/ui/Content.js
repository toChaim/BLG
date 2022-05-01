import React, { useState, useEffect } from 'react';
import axios from 'axios';

const { NODE_ENV, PORT = 5000 } = process.env;
const url = NODE_ENV === 'production' ? 'https://better-living-games.herokuapp.com/api' : `http://localhost:${PORT}/api`;

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
