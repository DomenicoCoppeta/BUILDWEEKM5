import styles from './styles.module.scss'

export default function SingleExperience({ getAllExperiences, ...experiences }) {
    const deleteExperience = () => {
        fetch(
            `https://striveschool-api.herokuapp.com/api/profile/:${_id}/experiences/:${exp_id}`,
            {
                headers: {
                    Authorization:
                    'Bearer ' + process.env.REACT_APP_TOKEN
                },
                method: 'DELETE'
            },
        ).then((response) => {
            if(response.ok){
                alert('Esperienza lavorativa eliminata');
                getAllExperiences()
            } else{
                alert('Qualcosa è andato storto')
            }
        })
    }

    return(
        <Row className='d-flex justify-content-between align-items-start mx-auto pt-2 my-1'>
            <Col xs={10}>
                <div className='d-flex justify-content-between mb-2'>
                    <p className='m-0 fw-bolder'>Ruolo:</p>
                    <p className='m-0 fw-bolder'>{experiences.role}</p>
                </div>
                <div className='d-flex justify-content-between mb-2'>
                    <p className='m-0 fw-bolder'>Azienda:</p>
                    <p className='m-0 fw-bolder'>{experiences.company}</p>
                </div>
                <div className='d-flex justify-content-between mb-2'>
                    <p className='m-0 fw-bolder'>Data inizio:</p>
                    <p className='m-0 fw-bolder'>{experiences.dateStart}</p>
                </div>
                <div className='d-flex justify-content-between mb-2'>
                    <p className='m-0 fw-bolder'>Data fine:</p>
                    <p className='m-0 fw-bolder'>{experiences.dateEnd}</p>
                </div>
                <div className='d-flex justify-content-between mb-2'>
                    <p className='m-0 fw-bolder'>Luogo:</p>
                    <p className='m-0 fw-bolder'>{experiences.area}</p>
                </div>
            </Col>
            <Button variant='outline-danger' onClick={deleteExperience} className='me-3'>Elimina</Button>
        </Row>
    )
}