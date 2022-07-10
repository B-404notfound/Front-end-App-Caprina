import React,{useState} from 'react'
import {Form,Container} from 'react-bootstrap'
import axios from 'axios'
import Swal from 'sweetalert2'
import {useNavigate,Link} from 'react-router-dom'

const NewInforme = () => {

  const navigate = useNavigate();


 const [data, setData] = useState({specie:"",production:"",affectedAnimals:"",illness:"",symptom:"",painGrade:"",painLevel:""})

  const handleChange = ({target})=>{
     setData({
      ...data,
      [target.name]:target.value
     })
  }

  const URL = "http://localhost:4000/api/forms/add"

  const handleSubmit = async (e)=>{
     e.preventDefault();
      const response = await axios.post(URL,data);
      if(response.status===200){
        Swal.fire(
          'Guardado!',
          'El informe ha sido guardado exitosamente',
          'success'
        )
        navigate("/menu")
      }else{
        Swal.fire(
          'Error!',
          'Hubo un problema al crear el informe',
          'error'
        )
      }
  }


  return (
    <Container>
      <h1 className="text-center">Nuevo Informe</h1>
      <Form
         onSubmit={handleSubmit}
        >
        <Form.Group className="mb-3">
           <select
              className="form-control"
              name="specie"
              onChange={handleChange}
              required
           >
            <option value="">Tipo de Especie Animal</option>
            <option value="Caprina">Caprina</option>
           </select>
        </Form.Group>
        <Form.Group className="mb-3">
           <select
              className="form-control"
              name="production"
              onChange={handleChange}
              required
           >
            <option value="">Tipo de Produccion Animal</option>
            <option value="INTERNA">INTERNA</option>
            <option value="EXTERNA">EXTERNA</option>
            <option value="MIXTA">MIXTA</option>
           </select>
        </Form.Group>
        <Form.Group className="mb-3">
           <Form.Control
              type="number"
              name="affectedAnimals"
              placeholder="Animales Afectados"
              value={data.affectedAnimals}
              onChange={handleChange}
              required
           />
        </Form.Group>
        <Form.Group className="mb-3">
           <Form.Control
              type="text"
              name="illness"
              placeholder="Enfermedad"
              value={data.illness}
              onChange={handleChange}
              required
           />
        </Form.Group>
        <Form.Group className="mb-3">
           <Form.Control
              type="text"
              name="symptom"
              placeholder="Sintomas"
              value={data.symptom}
              onChange={handleChange}
              required
           />
        </Form.Group>
        <Form.Group className="mb-3">
           <select 
             className="form-control"
              name="painGrade"
              onChange={handleChange}
              required
           >
            <option value="">GRADO DE DOLOR</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
           </select>
        </Form.Group>
        <Form.Group className="mb-3">
           <select
              className="form-control"
              name="painLevel"
              onChange={handleChange}
              required
           >
            <option value="">NIVEL DE DOLOR</option>
            <option value="ALTO">ALTO</option>
            <option value="MEDIO">MEDIO</option>
            <option value="BAJO">BAJO</option>
           </select>
        </Form.Group>
        <button className="btn btn-success me-2">Guardar</button>
        <Link to="/menu">
        <button className="btn btn-success me-2">Volver</button>
        </Link>
     
      </Form>
    </Container>
  )
}

export default NewInforme
