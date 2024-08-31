import React, { useState } from 'react';
import Form from './components/Form';
import EmailTemplate from './components/EmailTemplate';

function App() {
  const [variables, setVariables] = useState({
    recipientName: '',
    companyName: '',
    position: '',
  });

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Cold Email Customizer</h1>
      <div className="flex flex-col md:flex-row">
        <Form variables={variables} setVariables={setVariables} />
        <EmailTemplate variables={variables} />
      </div>
    </div>
  );
}

export default App;
