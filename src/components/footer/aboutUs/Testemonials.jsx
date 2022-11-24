import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import "./aboutUs.css";
export default function Testemonials() {
    return (
        <div className="testimonials">
            <Card className="card">
                <Card.Header className="card">
                    <h4>Testemonials</h4>
                </Card.Header>
                <Card.Body className="card">
                    <p className="card">
                        The graph displays how our cutomers have raited our
                        service:
                    </p>
                    <br />
                    <img
                        className="card"
                        src={
                            "https://support.trustpilot.com/hc/article_attachments/4408402471314/Product_review_ratings_page_example_product_review_graph.png"
                        }
                        alt="graph"
                    />
                </Card.Body>
            </Card>
            <br />
            <article>
                <Card className="card">
                    <Card.Header className="card">
                        Rating from Customer: Mark Blumemann
                    </Card.Header>
                    <Card.Body className="card">
                        <blockquote className="blockquote mb-0">
                            <h4>Amazing for Beginners</h4>
                            <p>
                                Amazing for Beginners! HackerUnited is a great
                                place to start. If you want to start coding this
                                is the place! You will still need tons of other
                                sources to learn to code, but it still gets 5
                                stars because there is no "one source" to learn
                                to code. thank you, HackerUnited. Date of
                                experience: July 14, 2020
                            </p>
                        </blockquote>
                    </Card.Body>
                </Card>
                <Card className="card">
                    <Card.Header>
                        Rating from Customer: Benjamin Blümchen
                    </Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <h4>Disapointment across the board</h4>
                            <p>
                                Very bad if you have no clue how to code.
                                HackerUnited is a medioca place to learn. Date
                                of experience: July 1, 2020
                            </p>
                        </blockquote>
                    </Card.Body>
                </Card>
                <Card className="card">
                    <Card.Header>
                        Rating from Customer: Allan Turing
                    </Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <h4>new approach to teaching</h4>
                            <p>
                                I learned just a bit of react, but all I learned
                                was concise information Date of experience: July
                                1, 2020
                            </p>
                        </blockquote>
                    </Card.Body>
                </Card>
                <Card className="card next">
                    <Card.Header>
                        Rating from Customer: Benjamin Blümchen
                    </Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <h4>Disapointment across the board</h4>
                            <p>
                                Very bad if you have no clue how to code.
                                HackerUnited is a medioca place to learn. Date
                                of experience: July 20, 2020
                            </p>
                        </blockquote>
                    </Card.Body>
                </Card>
                <Card className="card">
                    <Card.Header>Rating from Customer: Mark Asser</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <h4>I liked the experience</h4>
                            <p>
                                Thumbs up from me. Date of experience: July 1,
                                2020
                            </p>
                        </blockquote>
                    </Card.Body>
                </Card>
                <Card className="card">
                    <Card.Header>
                        Rating from Customer: Maya Deloris
                    </Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <h4>One place with all the information you need</h4>
                            <p>
                                I liked how the information was collected and
                                shared all in one place. Date of experience: May
                                15, 2020
                            </p>
                        </blockquote>
                    </Card.Body>
                </Card>
                <Card className="card">
                    <Card.Header>
                        Rating from Customer: Archiles Magademdon
                    </Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <h4>Not as engaging as hoped</h4>
                            <p>
                                I would have liked a more interresting site,
                                somethimes it was boring to spend time here.
                                Date of experience: May 27, 2020
                            </p>
                        </blockquote>
                    </Card.Body>
                </Card>
            </article>
        </div>
    );
}
