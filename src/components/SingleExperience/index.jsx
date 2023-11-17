import styles from './styles.module.scss'
import { Row, Col, Button } from 'react-bootstrap'
import AddExperience from '../AddExperience'
import { useState } from 'react'

export default function SingleExperience({ userId, myId, Experience, getAllExperiences }) {
    const dataInizio = new Date(Experience.startDate)
    const dataFine = Experience.endDate === null ? new Date() : new Date(Experience.endDate)
    const [show, setShow] = useState(false)

    const deleteExperience = async (experienceId, userId) => {
        try {
            let response = await fetch(
                `https://striveschool-api.herokuapp.com/api/profile/:${userId}/experiences/:${experienceId}`,
                {
                    headers: {
                        Authorization:
                            'Bearer ' + process.env.REACT_APP_TOKEN
                    },
                    method: 'DELETE'
                },
            )
            if (response.ok) {
                alert('Esperienza lavorativa eliminata');
                getAllExperiences()
            } else {
                alert('Qualcosa è andato storto')
            }

        } catch (error) {
            alert(error.message)
        }
    }

    return (
        <Row className='d-flex justify-content-between align-items-start mx-auto pt-2 my-1'>
            <Col xs={12}>
                <div className='d-flex justify-content-between mb-2'>
                    <p className='m-0 fw-bolder'>Ruolo:</p>
                    <p className='m-0 fw-bolder'>{Experience.role}</p>
                </div>
                <div className='d-flex justify-content-between mb-2'>
                    <p className='m-0 fw-bolder'>Azienda:</p>
                    <p className='m-0 fw-bolder'>{Experience.company}</p>
                </div>
                <div className='d-flex justify-content-between mb-2'>
                    <p>{dataInizio.toLocaleDateString()} - {dataFine.toLocaleDateString()}{' '}</p>
                </div>
                <div className='d-flex justify-content-between mb-2'>
                    <p className='m-0 fw-bolder'>Luogo:</p>
                    <p className='m-0 fw-bolder'>{Experience.area}</p>
                </div>
                <div>
                    <p>{Experience.description}</p>
                </div>
            </Col>
            <Button
                variant='outline-danger'
                onClick={() => deleteExperience(Experience._id, userId)}
                className='me-3'
            >
                Elimina
            </Button>
            <AddExperience
                userId={userId}
                show={show}
                setShow={setShow}
                experienceId={Experience._id}
            />
            <Button variant='light' onClick={() => setShow(true)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
                    <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                </svg>
            </Button>
        </Row>
    )
}