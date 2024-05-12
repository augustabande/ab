import React from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';
import { Link } from 'react-scroll';

const AccordionExample = () => {
    return (
        <div id="accordion-example" >
            <h4>Details</h4>
            {/*<p>Using the <Link title="Card" className="scroll-to-id" to="card" spy={ true } smooth={ true } duration={ 0 } href="#card">card</Link> component, you can extend the default collapse behavior to create an accordion. To properly achieve the accordion style, be sure to use <code>.accordion</code> as a wrapper.</p>*/}

            <div className="bd-example">
                <Accordion id="accordion-example-1" defaultActiveKey="0">
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={ Button } variant="link" eventKey="0">
                                + Consulting is right for you if
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <ul>
                                    <li>You already have a website/blog and have doubts about some aspects</li>
                                    <li>You have technical problems that you can't solve</li>
                                    <li>You don't know if it's technically optimized</li>
                                    <li>You don't know if it's optimized for SEO</li>
                                    <li>You would like to improve the user experience</li>
                                </ul>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={ Button } variant="link" eventKey="1">
                                + Consulting is NOT for you if
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>
                                <ul>
                                    <li>You are looking for a developer to solve a technical problem</li>
                                    <li>You are looking for an SEO specialist for strategic planning and sector-specific advice</li>
                                </ul>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={ Button } variant="link" eventKey="2">
                                + Initial Questionnaire
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="2">
                            <Card.Body>
                                <span>Before the consultation, I will send you a questionnaire with some elements I need to know to analyze your website.</span>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={ Button } variant="link" eventKey="3">
                                + Virtual call
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="3">
                            <Card.Body>
                                <span>During the consultation, we will analyze your website together, and I will give you the best advice to optimize performance, usability, basic SEO, user experience, and some technical concepts that will allow you to manage your site on your own as much as possible. My main goal is precisely to give you the tools to handle your site independently as much as possible.</span>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={ Button } variant="link" eventKey="4">
                                + Finall report
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="4">
                            <Card.Body>
                                <span>At the end of the consultation, I will send you a report with all the aspects we have covered together and the technical instructions to fix any potential issues with the site.</span>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>                    
                </Accordion>
            </div>            
            
        </div>
        
    );
};

export default AccordionExample;
