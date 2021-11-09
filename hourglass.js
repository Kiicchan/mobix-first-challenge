const entry = 21

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
    this.upperHalf = Array(halfSize)
    this.lowerHalf = Array(halfSize)

    for (let index = 0; index < halfSize; index++) {
        this.upperHalf[index] = createSandLine(index, true)
        this.lowerHalf[halfSize - index - 1] = createSandLine(index)
    }

    /* métodos */
    
    this.print = () => {
        this.upperHalf.forEach((line) => {
            console.log(line)
        })
        remainder ? console.log(createSandLine(halfSize)) : null //linha do meio, se existir
        this.lowerHalf.forEach((line) => {
            console.log(line)
        })
    }

}

const hourglass = new Hourglass(entry)
hourglass.print()