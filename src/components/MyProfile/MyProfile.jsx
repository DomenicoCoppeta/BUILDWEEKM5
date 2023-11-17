import { Container } from "react-bootstrap";

export default function MyProfile(){

    return (
        <div>
        <Row className="col-8">
          <Container className="d-flex flex-column container-fluid overflow-hidden relative">
            <div className="profileCover rounded-top"></div>
            <div className="profileInfo p-3 p rounded-bottom">
              <h5 className="mt-2">Nome Cognome</h5>
              <h6>Qualifica Professionale</h6>
              <p>Bologna, Emilia Romagna, Italia.<a href="#">Informazioni di contatto</a></p>
              <Button variant='primary' className='rounded-pill mr-2' size="sm">Disponibile per</Button>
              <Button variant='outline-primary' className='rounded-pill  mr-2' size="sm">Aggiungi sezione del profilo</Button>
              <Button variant='outline-secondary' className='rounded-pill  mr-2' size="sm">Altro</Button>
            </div>
            <div className="position-absolute">
              <Image src="#" width="100px" height="100px" id="profileImg" fluid/>
            </div>    
          </Container>
        </Row>
        </div>

    )
}