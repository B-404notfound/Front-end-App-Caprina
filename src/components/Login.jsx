import React,{useState} from 'react'
import {Form,Container} from 'react-bootstrap'
import axios from 'axios'
import Swal from 'sweetalert2'
import {useNavigate} from 'react-router-dom'

const Login = () => {

  const navigate = useNavigate();


 const [data, setData] = useState({email:"",password:""})

  const handleChange = ({target})=>{
     setData({
      ...data,
      [target.name]:target.value
     })
  }

  const URL = "http://localhost:4000/api/logins/add"

  const handleSubmit = async (e)=>{
     e.preventDefault();
      const response = await axios.post(URL,data);
      if(response.status===200){
        Swal.fire(
          'Felicidades!',
          'El Ingreso ha sido exitoso',
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
      <h1 className="text-center">LOGIN</h1>
      <Form
         onSubmit={handleSubmit}
        >
        <Form.Group className="mb-3">
           <Form.Control
              type="email"
              name="email"
              placeholder="Ingresa tu Email"
              value={data.email}
              onChange={handleChange}
              required
           />
        </Form.Group>
        <Form.Group className="mb-3">
           <Form.Control
              type="password"
              name="password"
              placeholder="Ingresa tu Contraseña"
              value={data.password}
              onChange={handleChange}
              required
           />
        </Form.Group>
        <button className="btn btn-success">Ingresar</button>
      </Form>
    </Container>
  )
}

export default Login