import React from "react"
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

export default function MyFooter(){ 
return (
<footer className="page-footer bg-gray font-small blue pt-4 mt-5 mb-0 px-5" fixed="bottom">
    <div className="container-fluid text-md-left mt-5 {theme === 'light' ? 'bg-light' : 'bg-dark'}">
        <div className="row">
            <div className="col-md-2 mb-md-0 mb-3 ps-0 ms-2">
                <ul className="list-unstyled ps-0">
                    <li className=''>Informazioni</li>
                    <li className=''>Linee guida della community</li>
                    <li className=''>Privacy e condizioni</li>
                    <li className=''>Sales Solutions</li>
                    <li className=''>Centro Sicurezza</li>
                </ul>
            </div>

            <div className="col-md-2 mb-md-0 mb-3 ps-0">
                <ul className="list-unstyled ps-0">
                    <li className=''>Accessibilità</li>
                    <li className=''>Carriera</li>
                    <li className=''>Opzioni per gli annunci pubblicitari</li>
                    <li className=''>Mobile</li>
                </ul>
            </div>

            <div className="col-md-2 mb-md-0 mb-3 ps-0">
                <ul className="list-unstyled ps-0">
                    <li className=''>Talent Solutions</li>
                    <li className=''>Soluzioni di marketing</li>
                    <li className=''>Pubblicità</li>
                    <li className=''>Piccole Imprese</li>
                </ul>
            </div>

            <div className="col-md-2 mb-md-0 mb-3">
                <ul className="list-unstyled">
                    <li>Domande?</li>
                    <li>Gestisci il tuo account e la tua privaci</li>
                    <li>Trasparenza sui contenuti consigliati</li>
                </ul>
            </div>
            <div className="col-md-2 mb-md-0 mb-3">
                <DropdownButton className='col-md-4' id="dropdown-item-button" title="Dropdown button">
                    <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
                        <Dropdown.Item as="button">Action</Dropdown.Item>
                        <Dropdown.Item as="button">Another action</Dropdown.Item>
                        <Dropdown.Item as="button">Something else</Dropdown.Item>
                </DropdownButton>
                </div>
        </div>
    </div>

    <div className="footer-copyright mt-3 pt-3 mb-0">LinkedIn Corporation © 2023
    </div>

</footer>
)
}