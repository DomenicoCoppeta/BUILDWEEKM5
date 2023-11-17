import { Container, Row, Button, Image, Col } from "react-bootstrap";
import Cover from '../../assets/linkedin-cover.png';
import cn from "classnames";
import styles from "./styles.module.scss";


export default function MyProfile(){

    return (
        <Container className="container-fluid overflow-hidden relative ">
          <Row>
           <Col sm={8} className="d-flex flex-column overflow-hidden border rounded px-0"> 
            <div className={cn(styles.profileCover, 'rounded-top overflow-hidden')}>
              <Image src={Cover} fluid/>
            </div>
            <div className={cn(styles.profileInfo, "p-3 rounded-bottom")}>
              <h4 className="mt-5 mb-1">Nome Cognome</h4>
              <h6>Qualifica Professionale</h6>
              <p>Bologna, Emilia Romagna, Italia.<a href="#">Informazioni di contatto</a></p>
              <Button variant='primary' className='rounded-pill me-2' size="sm">Disponibile per</Button>
              <Button variant='outline-primary' className='rounded-pill  me-2' size="sm">Aggiungi sezione del profilo</Button>
              <Button variant='outline-secondary' className='rounded-pill  me-2' size="sm">Altro</Button>
            </div>
            <div className="position-absolute">
              <Image src="#" width="100px" height="100px" className={cn(styles.profileImg)} fluid/>
            </div> 
           </Col>    
          </Row>
        </Container>
    )
}