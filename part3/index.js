const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.static('build'))
app.use(express.json());
morgan.token('data',(req,res) => {
    return JSON.stringify(req.body)
})

app.use(morgan('tiny'))

let contacts = [
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

app.get('/api/persons',(req, res) => res.json(contacts))

app.get('/api/info',(req, res) => {
    const numberOfContacts = contacts.length
    res.send(
        `<p>Phonebook has info for ${numberOfContacts} numbers.</p>
        <p>${new Date()}</p>`
        )
    }
)

app.get('/api/persons/:id',(req, res) => {
    const id = Number(req.params.id)
    const contact = contacts.find(contact=>contact.id===id)
    
    if (contact) {
        res.send(contact)
    } else {
        res.send("Contact does not exist")
        res.statusMessage = "Contact does not exist";
        res.status(404).end
    }}
    )

app.delete('/api/persons/:id',(req, res) => {
    const id = Number(req.params.id)
    contact = contacts.find(contact=>contact.id===id)
    contacts = contacts.filter(contact=>contact.id !==id)

    if (contact) {
        res.status(204).end()
    } else {
        res.statusMessage = "Contact does not exist";
        res.status(404).end()
    }}
    )

app.post('/api/persons/',(req, res) => {

    const body = req.body
    const generateID = Math.ceil(Math.random()*100)
    
    if (!body.name || !body.number) {
        return res.status(400).send(`Error: content missing`)
      }
    
    if (contacts.map(contact=>contact.name.toLowerCase()).includes(body.name.toLowerCase())) {
        return res.status(409).send(`Error: Name already exists`)
    }

    const newContact = {
        "id": generateID, 
        "name": body.name,
        "number": body.number
    }

    contacts = contacts.concat(newContact)
    res.json(contacts)
    app.use(morgan(':method :url :status :res[content-length] - :response-time ms :data'))

})

const PORT = process.env.PORT || 3001;
app.listen(PORT,()=> {
    console.log(`Server running on port ${PORT}`)
})