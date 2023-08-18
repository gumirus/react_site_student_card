import React, { useState } from "react";

const Student = () => {
  // State to store the form data
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    // Add more fields as needed
  });

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can handle the data submission, for example, send it to a backend server.
    // For this example, we'll just log the data to the console.
    console.log(formData);
  };

  // Function to handle input field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <div className="container mt-5 mr-5">
      <h3>Карточка студента</h3>
      {formData.name ? (
        <>
          <h4>Данные студента:</h4>
          <p>Имя: {formData.name}</p>
          <p>Возраст: {formData.age}</p>
          <p>Email: {formData.email}</p>
        </>
      ) : (
        <h6>Нет данных...</h6>
      )}

      {!formData.name && (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Имя:</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              onChange={handleChange}
              value={formData.name}
            />
          </div>
          <div className="form-group">
            <label htmlFor="age">Возраст:</label>
            <input
              type="number"
              id="age"
              name="age"
              className="form-control"
              onChange={handleChange}
              value={formData.age}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              onChange={handleChange}
              value={formData.email}
            />
          </div>
          <button className="btn btn-primary mt-1" type="submit">
            Добавить данные
          </button>
        </form>
      )}
    </div>
  );
};

export default Student;