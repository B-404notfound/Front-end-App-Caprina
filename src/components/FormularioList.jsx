import React ,{useEffect,useState} from 'react'
import axios from 'axios'
import CardInforme from './CardInforme'
import { Container, Row } from 'react-bootstrap'
import {Link} from 'react-router-dom'

const FormularioList = () => {

  const URL ="http://localhost:4000/api/forms/all"

  const getData = async ()=>{
    const response = axios.get(URL);
    return response;
  }

  const [list, setList] = useState([])
   
  useEffect(() => {
    getData().then((response)=>{
      setList(response.data);
    })
  }, [])
 
 

  return (
    
    <Container className="mb-5">
       <Link to="/menu">
       <button className="btn btn-success me-2">Volver al Inicio</button>
       </Link>
        
      <Row>
        <h1>Lista de Informes</h1>
        {
          list.map((informe,index)=>(
            <CardInforme
                key={index}
                informe={informe}
            
            />
          ))
        }
      </Row>
    </Container>
  )
}

export default FormularioList
