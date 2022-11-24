import React from "react";
import Card from "react-bootstrap/Card";
export default function Testemonials() {
  return (
    <div className="testimonials">
      <h1>Testemonials</h1>
      <p>The graph displays how our cutomers have raited our service:</p>
      <img
        src={
          "https://support.trustpilot.com/hc/article_attachments/4408402471314/Product_review_ratings_page_example_product_review_graph.png"
        }
        alt="graph"
      />
      <article>
        <Card>
          <Card.Header>Rating from Customer: Mark Blumemann</Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <h1>Amazing for Beginners</h1>
              <p>
                Amazing for Beginners! HackerUnited is a great place to start.
                If you want to start coding this is the place! You will still
                need tons of other sources to learn to code, but it still gets 5
                stars because there is no "one source" to learn to code. thank
                you, HackerUnited. Date of experience: July 14, 2020
              </p>
              <footer className="blockquote-footer">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </footer>
            </blockquote>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>Rating from Customer: Benjamin Blümchen</Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <h1>Disapointment across the board</h1>
              <p>
                Very bad if you have no clue how to code. HackerUnited is a
                medioca place to learn. Date of experience: July 1, 2020
              </p>
              <footer className="blockquote-footer">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </footer>
            </blockquote>
          </Card.Body>
        </Card>
      </article>
    </div>
  );
}
