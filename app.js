// const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

// Customise yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder:{
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title, argv.body)
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Removes a note',
    builder:{
        title:{
            describe: 'Note title to remove',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'Lists your notes',
    handler(){
        notes.listNotes()
    }
})

yargs.command({
    command: 'read',
    describe: 'Reads a note',
    builder:{
        title:{
            describe: 'Title whose content is to be read',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readNotes(argv.title)
    }
})

yargs.parse()
// console.log(yargs.argv)
// const command = process.argv[2]

// if (command === 'add'){
//     console.log('Adding note!')
// } else if (command === 'remove'){
//     console.log('Removing note!')
// }


// const notes = getNotes()
// console.log(notes)

// // console.log(validator.isURL('https://d.io'))
// console.log(chalk.green.inverse.bold('Success!'))

// const fs = require('fs')
// fs.writeFileSync('notes.txt', 'My name is Andrew.')
// fs.appendFileSync('notes.txt', ' I am depressed.')
// const add = require('./utils.js')
// const sum = add(4, -2)
// console.log(sum)
