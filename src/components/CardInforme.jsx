import React from 'react'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'

const CardInforme = ({informe}) => {
  return (
     <div className="col-4 mb-3">
        <Card>
          <Card.Body>
            <Card.Title className="text-center">INFORME</Card.Title>
            <ListGroup className="mb-2">
              <ListGroupItem><strong>Especie Animal:</strong>{informe.specie}</ListGroupItem>
              <ListGroupItem><strong>Produccion:</strong>{informe.production}</ListGroupItem>
              <ListGroupItem><strong>Animales Afectados:</strong>{informe.affectedAnimals}</ListGroupItem>
              <ListGroupItem><strong>Enfermedad:</strong>{informe.illness}</ListGroupItem>
              <ListGroupItem><strong>Sintomas:</strong>{informe.symptom}</ListGroupItem>
              <ListGroupItem><strong>Grado de Dolor:</strong>{informe.painGrade}</ListGroupItem>
              <ListGroupItem><strong>Nivel de Dolor:</strong>{informe.painLevel}</ListGroupItem>
            </ListGroup>
          </Card.Body>
          </Card>
    </div>
  )
}

export default CardInforme
