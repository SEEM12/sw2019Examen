var express = require('expess');
var router = express.Router();

var uuid = require('uuid/v4');

var recetaCollection =[];

var recetaStruct = {
    id:0,
    nombre:'',
    correo:'',
    telefono:'',
    nota:''
}

recetaCollection.push(
    object.assign(
        {},
        recetaStruct,
        {
            id:uuid(),
            receta:'Medica',
            precio:'200',
            tipo:'nutrición',
            observacion:'cualquiera',
            estado: 'cuanquiera'

        }

        )

);



router.get('/',(req,res,next)=>{
  
   res.status(200).json(recetaCollection);

});

router.post('/',(req,res,next)=>{
   var newReceta = Object.assign(
       {},
       {id:uuid()}
       );

       res.status(403).json({msg:"not implemented"});
  
   
});//post

router.put('/:id',(req,res,next)=>{
    res.status(403).json({msg:"not implemented"});
});//put


router.delete('/:id', (req,res,next)=>{
    var id= req.params.id;
    var deleteReceta = {};
    recetaCollection = recetaCollection.filter((e,i)=>{

    });
    res.status(403).json({msg:"not implemented"});

});//delete

module.exports =router;


