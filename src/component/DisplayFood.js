import React from "react";
import { Card, Button } from "react-bootstrap";

const DisplayFood = ({ foodItem }) => {
  return (
    <div className="row">
      {foodItem.map((item) => (
        <React.Fragment key={item.idMeal}>
          <div className="col-md-4 g-3">
            <Card style={{ width: "22rem" }}>
              <Card.Img variant="top" src={item.strMealThumb} />
              <Card.Body>
                <Card.Title>{item.strMeal}</Card.Title>
                <Card.Text>
                  {item.strInstructions.split("").length < 100
                    ? item.strInstructions
                    : item.strInstructions.split("").slice(0, 100).join("") +
                      "........."}
                </Card.Text>
                <Button variant="primary">Details Food</Button>
              </Card.Body>
            </Card>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default DisplayFood;
