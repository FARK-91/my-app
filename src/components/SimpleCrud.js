import React, { Fragment, useState } from 'react';
import { useForm } from 'react-hook-form';

const SimpleCrud = (e) => {

    const [tarea, setTarea] = useState('')
    const [tareas, setTareas] = useState([])
    const [modoEdicion, setModoEdicion] = React.useState(false)
    const [id, setId] = React.useState('')
    const [error, setError] = React.useState(null)

    const shortid = require("shortid")

    const agregarTarea = (e) =>{
        e.preventDefault()
        if(!tarea.trim()){
            console.log('Campo vacio')
            setError('El campo no puede estar Vacío')
            return
          }
          
        setError(null)

        setTareas([
            ...tareas,
            {tarea, id: shortid.generate()}
        ])
        console.log(tareas)

        // limpiar campos
        e.target.reset();
        setTarea('')
    }

    // onClick={() => eliminarTarea(item.id)}
    const eliminarTarea = id => {
        const arrayFiltrado = tareas.filter(item => item.id !== id)
        setTareas(arrayFiltrado)
    }

    // onClick={() => editar(item)}
    const editar = item => {
        setModoEdicion(true)
        setTarea(item.tarea)
        setId(item.id)
    }

    const editarTarea = e => {
        e.preventDefault()
        if(!tarea.trim()){
        console.log('Campo vacio')
        setError('El campo no puede estar Vacío')
        return
        }

        setError(null)
      
        const arrayEditado = tareas.map(item => item.id === id ? {id, tarea} : item)
        setTareas(arrayEditado)
        setModoEdicion(false)
        setTarea('')
        setId('')
    }

    return(
        <Fragment>
            <div className="container mt-5">
                <h1 className="text-center">CRUD APP</h1>
                <hr/>
                <div className="row">

                    <div className="col-8">
                    <ul className="list-group">
                    {
                        tareas.length === 0 ? (
                        <li className="list-group-item">Sin Tareas</li>
                        ) : (
                        tareas.map(item => (
                            <li className="list-group-item" key={item.id}>
                            <span className="lead">{item.tarea}</span>
                            <button 
                                className="btn btn-sm btn-danger float-right mx-2"
                                onClick={() => eliminarTarea(item.id)}
                            >Eliminar</button>
                            <button 
                                className="btn btn-sm btn-warning float-right"
                                onClick={() => editar(item)}
                            >Editar</button>
                            </li>
                        ))
                        )
                    }
                    </ul>
                    </div>

                    <div className="col-4">
                    <h4 className="text-center">
                        {
                        modoEdicion ? 'Editar Tarea' : 'Agregar Tarea'
                        }
                    </h4>
                    <form onSubmit={modoEdicion ? editarTarea : agregarTarea}>
                        {
                            error ? <span className="text-danger">{error}</span> : null
                        }
                        <input 
                        type="text" 
                        className="form-control mb-2"
                        placeholder="Ingrese Tarea"
                        onChange={e => setTarea(e.target.value)}
                        value={tarea}
                        />
                        {
                            modoEdicion ? (
                                <button className="btn btn-warning btn-block" type="submit">Editar</button>
                            ) : (
                                <button className="btn btn-dark btn-block" type="submit">Agregar</button>
                            )
                        }
                    </form>
                    </div>

                </div>
                </div>
        </Fragment>
    );
        
}

export default SimpleCrud;