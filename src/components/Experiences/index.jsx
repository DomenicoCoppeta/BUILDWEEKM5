import { useState, useEffect } from 'react'
import styles from './styles.module.scss'
import { Container, Row, Col, Button } from 'react-bootstrap'
import cn from 'classnames'
import AddExperience from '../AddExperience'
import SingleExperience from '../SingleExperience'

export default function Experiences({ userId, myId }) {
    const [show, setShow] = useState(false)
    const [experience, setExperience] = useState([])

    //Fetch per recuperare le esperienze lavorative
    useEffect(() => {
        fetch(
            `https://striveschool-api.herikuapp.com/api/profile/${userId}/experiences`, {
            headers: {
                Authorization: 'Bearer ' + process.env.REACT_APP_TOKEN,
            },
        }
        )
            .then((response) => response.json())
            .then(setExperience)
    }, [userId])

    return (
        <Container className={cn(styles.Exp, 'bg-white border rounded-3 p-3 mt-3')}>
            <Row className={cn(styles.Head, 'mb-5')}>
                <Col xs={12} className='d-flex justify-content-between'>
                    <h3>Esperienze</h3>
                    {userId === myId && (
                        <>
                            <AddExperience userId={userId} show={show} setShow={setShow} />
                            <Button onClick={() => setShow(true)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
                                </svg>
                            </Button>
                        </>
                    )}
                </Col>
            </Row>

            <Row className='mt-2'>
                {experience.map((e) => (
                    <Col xs={12} className='mb-3' key={e._id}>
                        <SingleExperience Experience={e} userId={userId} myId={myId}/>
                    </Col>
                ))}
            </Row>
            <AddExperience userId={userId} show={show} setShow={setShow}/>
        </Container>
    )
}