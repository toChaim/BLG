import React, { useState, useEffect } from 'react';
import axios from 'axios';

const { HEROKU_APP_NAME } = process.env;
console.log(process.env);
const url = HEROKU_APP_NAME ? `https://${HEROKU_APP_NAME}.herokuapp.com` : 'http://localhost:5000/api';

function Content() {
  const [content, setContent] = useState('loading content');
  useEffect(() => {
    axios.get(url)
      .then(res => {
        setContent(res.data?.data?.message);
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
