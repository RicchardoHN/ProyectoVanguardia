const Persona = require('../model/persona');

//Insertar
function crear(req, res){
    const person = new Persona({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        edad: req.body.edad
    })
    person.save().them(
        res.redirect('/')
    ).catch(err=>res.status(500).send({err}))
}

//Mostrar
function visualizar(req, res){
    Persona.find({}).then(Persona=>{
        if(Persona.length) return res.render('index', {Persona:Persona})
            return res.status(204).send({message: 'NO CONTENT'});

    }).catch(err=>res.status(500).send({err}))
}

function editar(req, res){
    const id = req.body.id_editar
    const nombre = req.body.nombre_editar
    const apellido = req.body.apellido_editar
    const edad = req.body.edad_editar
    Persona.findByIdAndUpdate(id, {nombre:nombre, apellido:apellido, edad:edad}).then(
        res.redirect('/')
    ).catch(err => res.status(500).send({err}))
}

function eliminar(req, res){
    const id = req.params.id
    Persona.findByIdAndDelete(id).then(
        res.redirect('/')
    ).catch(err => res.status(500).send({err}))

}
module.exports = {
    visualizar,
    crear,
    editar,
    eliminar
}