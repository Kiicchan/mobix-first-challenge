const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})


function Hourglass(size) {
    const halfSize = Math.floor(size/2)
    const remainder = size%2
    const createSandLine = (index, full) => {
        const sandLine = index === 0 ? Array(size).fill('#') : Array(size).fill(' ')
        const initial = index
        const last = size - index - 1
        sandLine[initial] = '#'
        sandLine[last] = '#'

        if (full) {
            sandLine.fill('#', initial, last)
        }
        
        return sandLine.join('')
    }

    /* inicialização */
    const upperHalf = Array(halfSize)
    const lowerHalf = Array(halfSize)

    for (let index = 0; index < halfSize; index++) {
        upperHalf[index] = createSandLine(index, true)
        lowerHalf[halfSize - index - 1] = createSandLine(index)
    }

    /* métodos */
    
    this.print = () => {
        upperHalf.forEach((line) => {
            console.log(line)
        })
        remainder ? console.log(createSandLine(halfSize)) : null //linha do meio, se existir
        lowerHalf.forEach((line) => {
            console.log(line)
        })
    }
}

function askRecursively() {
    readline.question('Qual o tamanho da Ampulheta? ', (entry) => {
        const size = Number(entry)
        if (size >= 20) {
            const hourglass = new Hourglass(size)
            hourglass.print()
            readline.close()            
        } else {
            console.log('Digite um número maior ou igual a 20')
            askRecursively()
        }
    })
}

askRecursively();