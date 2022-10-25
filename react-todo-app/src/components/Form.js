import React from 'react'
import "../css/Form.css";

export default function Form({ handleSubmit, value, setValue }) {
  const handleChange = (e) => {
    setValue(e.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
          <input 
            type="text"
            name="value"
            placeholder="해야 할 일을 입력하세요."
            value={value}
            onChange={handleChange}
          />
          <input
            type="submit"
            value="입력"
            className="btn"
          />
        </form>
    </div>
  )
}
