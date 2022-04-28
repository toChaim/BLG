import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Content() {
  const [content, setContent] = useState('loading content');
  useEffect(() => {
    axios.get('http://localhost:5000/api')
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
