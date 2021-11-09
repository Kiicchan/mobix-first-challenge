const entry = 21

function Hourglass(size) {
    const halfSize = Math.floor(size/2)
    const remainder = size%2
    const sandLine = (index) => {
        const sandLine = index === 0 ? Array(size).fill('#') : Array(size).fill(' ')
        sandLine[index] = '#'
        sandLine[size-index - 1] = '#'
        
        return sandLine.join('')
    }

    
    this.upperHalf = Array(halfSize)
    this.lowerHalf = Array(halfSize)

    for (let index = 0; index < halfSize; index++) {
        this.upperHalf[index] = sandLine(index) 
        this.lowerHalf[halfSize - index - 1] = sandLine(index)
    }

    /* métodos */
    
    this.print = () => {
        this.upperHalf.forEach((line) => {
            console.log(line)
        })
        remainder ? console.log(sandLine(halfSize)) : null
        this.lowerHalf.forEach((line) => {
            console.log(line)
        })
    }

}

const hourglass = new Hourglass(entry)
hourglass.print()
//console.log(hourglass.upperHalf)
//console.log(hourglass.lowerHalf)