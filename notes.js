const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNotes = notes.filter(note => note.title === title)
    const duplicateNote = notes.find(note => note.title === title)

    // if (duplicateNotes.length === 0){
    //     notes.push({
    //         title: title,
    //         body: body
    //     })
    //     saveNotes(notes)
    //     console.log(chalk.bgGreen("New note added!"))
    if (!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.bgGreen("New note added!"))
    } else {
        console.log(chalk.bgRed("Duplicate title"))
    }
    
}

const removeNote =  title => {
    
    const notes = loadNotes()
    const duplicateNotes = notes.filter(note => 
        note.title === title)
    if (duplicateNotes.length === 0){
        console.log(chalk.bgRed("No note found!"))
    } else{
        // const filteredArray = notes.filter(note => note.title !== title)
        const filteredArray = notes.filter(note =>
            note.title !== title)
        saveNotes(filteredArray)
        console.log(chalk.bgGreen("Note removed!"))
    }

}

const listNotes = () =>{
    console.log(chalk.bgBlue.bold.underline("Your notes"))
    const notes = loadNotes()
    notes.forEach(note =>
        console.log(note.title))
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

const readNotes = (title) => {
    const notes = loadNotes()
    const targetNote = notes.find(note => note.title === title)
    if (!targetNote){
        console.log(chalk.red("Error"))
    } else {
        console.log(chalk.bgBlue(targetNote.title))
        console.log(targetNote.body)
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNotes: readNotes
}