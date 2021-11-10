const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

function Hourglass(size) {
    const halfSize = Math.floor(size/2)
    const remainder = size%2 ? createSandLine(halfSize) : null

    /* inicialização */
    const upperHalf = Array(halfSize)
    const lowerHalf = Array(halfSize)

    for (let index = 0; index < halfSize; index++) {
        upperHalf[index] = createSandLine(index, true)
        lowerHalf[halfSize - index - 1] = createSandLine(index)
    }
    var sandLevel = 1

    /* métodos */
    
    this.print = () => {
        console.clear()
        upperHalf.forEach((line) => {
            console.log(line)
        })
        remainder ? console.log(remainder) : null //linha do meio, se existir
        lowerHalf.forEach((line) => {
            console.log(line)
        })
    }

    this.moveSand = () => { 
        if (sandLevel >= halfSize) {
            this.finish()
            return
        }      
        let upperLineString = upperHalf[sandLevel]
        let lowerLineString = lowerHalf[halfSize - sandLevel - 1]
        if (upperLineString.split('#').length - 1 > 4) {
            let sandIndex = upperLineString.indexOf('#', sandLevel + 1)
            let upperLineArray = upperLineString.split('')
            upperLineArray[sandIndex] = ' '
            upperLineString = upperLineArray.join('')
            upperHalf[sandLevel] = upperLineString
            
            let spaceIndex = lowerLineString.indexOf(' ', sandLevel + 1)
            let lowerLineArray = lowerLineString.split('')
            lowerLineArray[spaceIndex] = '#'
            lowerLineString = lowerLineArray.join('')
            lowerHalf[halfSize - sandLevel - 1] = lowerLineString
        } else {
            sandLevel += 1
            this.moveSand()
        }
    }
    var intervalObj
    this.initiate = () => {
        intervalObj = setInterval(() => {
            this.moveSand()
            this.print()
        }, 100)
    }

    this.finish = () => {
        clearInterval(intervalObj)
        console.log(process.stdin.read());  //impedir que o programa feche ao fim
    }

    function createSandLine(index, full) {
        const sandLine = index === 0 ? Array(size).fill('#') : Array(size).fill(' ')
        const initial = index
        const last = size - index - 1

        sandLine[0] = '#'   //Pontos da estrutura
        sandLine[size - 1] = '#'
        sandLine[initial] = '#'
        sandLine[last] = '#'

        if (full && index > 0) {
            sandLine.fill('#', initial +1, last)    //completar a linha com areia ou não
        }
        
        return sandLine.join('')
    }
}

function askRecursively() {
    readline.question('Qual o tamanho da Ampulheta? ', (entry) => {
        const size = Number(entry)
        if (size >= 20) {
            const hourglass = new Hourglass(size)            
            hourglass.print()
            readline.question('Pressione qualquer tecla para iniciar animação', () => {
                hourglass.initiate()
                readline.close()                    
            })
        } else {
            console.log('Digite um número maior ou igual a 20')
            askRecursively()
        }
    })
}

askRecursively();