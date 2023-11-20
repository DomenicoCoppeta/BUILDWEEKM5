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
            <Row xs={8} className={cn(styles.Head, 'mb-5')}>
                <Col>
                    <h3>Esperienze</h3>
                    {userId === myId && (
                        <>
                            <AddExperience userId={userId} show={show} setShow={setShow} />
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
        </Container>
    )
}