import React from 'react';

function Form({ variables, setVariables }) {
  const handleChange = (e) => {
    setVariables({ ...variables, [e.target.name]: e.target.value });
  };

  return (
    <form className="flex flex-col p-4 md:w-1/2 space-y-4">
      <label className="block">
        Recipient Name:
        <input
          type="text"
          name="recipientName"
          value={variables.recipientName}
          onChange={handleChange}
          className="mt-1 p-2 border border-gray-300 rounded w-full"
        />
      </label>
      <label className="block">
        Company Name:
        <input
          type="text"
          name="companyName"
          value={variables.companyName}
          onChange={handleChange}
          className="mt-1 p-2 border border-gray-300 rounded w-full"
        />
      </label>
      <label className="block">
        Position:
        <input
          type="text"
          name="position"
          value={variables.position}
          onChange={handleChange}
          className="mt-1 p-2 border border-gray-300 rounded w-full"
        />
      </label>
    </form>
  );
}

export default Form;
