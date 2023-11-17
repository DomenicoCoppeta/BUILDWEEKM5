import { useState } from "react";
import { Form, Row, Col, Button } from 'react-bootstrap'
import styles from './styles.module.scss'

export default function AddExperience({ id, getAllExperience }) {
    const [text, setText] = useState('')
    const [date, setDate] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = {
            role: '',
            company: '',
            startDate: '',
            endDate: '',  //null se ancora in corso
            description: '',
            area: '',
        };

        fetch(`https://striveschool-api.herokuapp.com/api/profile/:${id}/experiences`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization:
                    'Bearer ' + process.env.REACT_APP_TOKEN
            },
            method: 'POST',
            body: JSON.stringify(form),
        }).then((response) => {
            if (response.ok) {
                getAllExperience()
                alert('Esperienza aggiunta con successo')
                setText('')
                setDate('')
            } else {
                alert('Qualcosa è andato storto!')
            }
        })
    }

    return (
        <Row className='mt-4'>
            <Col xs={12} className="m-auto">
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

                    {/* Data inizio */}
                    <Form.Group className='mb-3' controlId="date">
                        <Form.Label>Data inizio:</Form.Label>
                        <Form.Control
                            type="date"
                            placeholder='role'
                            autoFocus
                        />
                    </Form.Group>

                    {/* Data fine */}
                    <Form.Group className='mb-3' controlId="date">
                        <Form.Label>Data fine:</Form.Label>
                        <Form.Control
                            type="date"
                            placeholder='role'
                            autoFocus
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
                    <Button className="rounded-2 py-3 w-100 btn-blue" type='submit'>
                        Aggiungi esperienza
                    </Button>
                </Form>
            </Col>
        </Row>
    )
}