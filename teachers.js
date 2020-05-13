const fs = require('fs')
const data = require('./data.json')

exports.post = function (req, res) {
    
    const keys = Object.keys(req.body)
    
    for(key of keys){
        if(req.body[key] == ""){
            return res.send('Todos os campos tem que ser preeenchidos')
        }
    }
    
    const id = Number(data.teachers.length + 1)
    const created_at = Date.now()

    let {avatar_url, name, birth, gender, graduation, class_type, subjects} = req.body
    
    birth = Date.parse(birth)

    data.teachers.push({
        id,
        avatar_url,
        name,
        birth,
        gender,
        graduation,
        class_type,
        subjects,
        created_at
    })
    
    fs.writeFile("data.json", JSON.stringify(data, null, 2), function (error){
        if(error) return res.send('Erro no banco de dados')
        
        return res.redirect('/teachers')
    })

}