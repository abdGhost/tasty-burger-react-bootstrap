import React from "react";
import { Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Cards = ({ image, rating, title, paragraph, price }) => {
  return (
    <Col sm={6} xl={3} className="mb-4">
      <Card className="overflow-hidden">
        <div className="overflow-hidden">
          <Card.Img variant="top" src={image} />
        </div>
        <Card.Body>
          <div className="d-flex align-items-center justify-content-between">
            <div>Rating</div>
            <div className="wishlist">
              <i className="bi bi-heart"></i>
            </div>
          </div>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{paragraph}</Card.Text>
          <div className="d-flex align-items-center justify-content-between">
            <h5 className="mb-0">${price}</h5>
            <div className="add_to_card">
              <Link to="/">
                <i class="bi bi-bag me-2" />
                Add To Cart
              </Link>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};
