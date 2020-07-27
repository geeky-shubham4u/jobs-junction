import React, { useState } from 'react'
import { Card, Badge,Button, Collapse } from 'react-bootstrap'
import ReactMarkdown from 'react-markdown'


export default function Job({jobz}) {
    
        const [open, setOpen] = useState(false);
        return (
            <Card className="mb-3">
                <Card.Body>
                    <div className="d-flex justify-content-between">
                        <div>
                            <Card.Title>
                                {jobz.title} - <span className="text-muted font-weight-light">{jobz.company}</span>
                            </Card.Title>
                            <Card.Subtitle>
                                {new Date(jobz.created_at).toLocaleDateString()}
                            </Card.Subtitle>
                            <Badge variant="secondary" className="mr-2">{jobz.type}</Badge>
                            <Badge variant="secondary">{jobz.location}</Badge>
                            <div style={{wordBreak:"break-all"}}>
                                <ReactMarkdown source={jobz.how_to_apply}/>
                            </div>
                        </div>
                        <img className="d-none d-md-block" height="50px" alt={jobz.company} src={jobz.company_logo} />
                    </div>
                    <Card.Text>
                    <Button onClick={()=>setOpen(prevOpen => !prevOpen)} variant="primary">
                            {open ? "Hide Details" : "View Details"}</Button>
                    </Card.Text>
                    <Collapse in={open}>
                        <div className="mt-4">
                            <ReactMarkdown source={jobz.description}/>
                        </div>
                    </Collapse>
                </Card.Body>

            </Card>
        )
    
}
