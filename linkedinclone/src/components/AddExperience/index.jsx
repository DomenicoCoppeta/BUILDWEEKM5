import { useState } from "react";
import { Form, Row, Col } from 'react-bootstrap'
import styles from './styles.module.scss'

export default function AddExperience({ id, getAllExperience }) {
    const [text, setText] = useState('')
    //aggiungere state per la data

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = {
            role: text,
            company: text,
            startDate: Date,
            endDate: Date,  //null se ancora in corso
            description: text,
            area: text,
        };

        fetch(`https://striveschool-api.herokuapp.com/api/profile/:${id}/experiences`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization:
                    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUyNjkxOGM1NWU3ZTAwMThmODNkMDAiLCJpYXQiOjE2OTk4OTk2NzIsImV4cCI6MTcwMTEwOTI3Mn0.ao9mBA9At0HrK13Qn7_yhJ1buqxh5RAwSEwGklfbp3k'
            },
            method: 'POST',
            body: JSON.stringify(form),
        }).then((response) => {
            if (response.ok) {
                getAllExperience()
                alert('Esperienza aggiunta con successo')
                setText('')
            } else {
                alert('Qualcosa è andato storto!')
            }
        })
    }

    return (
        <Row className='mt-4'>
            <Col xs={12} md={6} className="m-auto">
                <Form onSubmit={handleSubmit}>
                    <h3 className={styles.TextCenter}>
                        Inserisci un'esperienza lavorativa:
                    </h3>

                    {/* Ruolo */}
                    <Form.Group className='mb-3 mt-3' controlId="text">
                        <Form.Label>Ruolo:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Scrivi qui il tuo ruolo..."
                            value={text}
                            onChange={(event) => setText(event.target.value)}
                        />
                    </Form.Group>

                    {/* Azienda */}
                    <Form.Group className='mb-3' controlId="text">
                        <Form.Label>Azienda:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Scrivi qui il nome dell'azienda..."
                            value={text}
                            onChange={(event) => setText(event.target.value)}
                        />
                    </Form.Group>

                    {/* Data inizio DA CONTROLLARE COME SI INSERISCE LA DATA COL CALENDARIO*/}
                    <Form.Group className='mb-3' controlId="date">
                        <Form.Label>Data inizio:</Form.Label>
                        <Form.Control
                            type="date"
                            value={date}
                            onChange={(event) => setText(event.target.value)}
                        />
                    </Form.Group>

                    {/* Data fine DA CONTROLLARE COME SI INSERISCE LA DATA COL CALENDARIO*/}
                    <Form.Group className='mb-3' controlId="date">
                        <Form.Label>Data fine:</Form.Label>
                        <Form.Control
                            type="date"
                            value={date}
                            onChange={(event) => setText(event.target.value)}
                        />
                    </Form.Group>

                    {/* Descrizione*/}
                    <Form.Group className='mb-3' controlId="text">
                        <Form.Label>Occupazione:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Scrivi qui di cosa ti occupi/occupavi..."
                            value={text}
                            onChange={(event) => setText(event.target.value)}
                        />
                    </Form.Group>

                    {/* Luogo */}
                    <Form.Group className='mb-3' controlId="text">
                        <Form.Label>Luogo:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Scrivi qui il luogo dell'occupazione..."
                            value={text}
                            onChange={(event) => setText(event.target.value)}
                        />
                    </Form.Group>
                </Form>
            </Col>
        </Row>
    )
}