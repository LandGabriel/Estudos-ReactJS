import React from "react";

const TemplateExpression = () => {
  const name = "Gabriel";

  const data = {
    age: 31,
    job: "Biomedical",
  };

  return (
    <div>
      <p>The sum between the numbers are {2 + 2} </p>
      <h3>Welcome {name}</h3>
      <p>
        Your age is {data.age} and your career is {data.job}?
      </p>
    </div>
  );
};

export default TemplateExpression;
