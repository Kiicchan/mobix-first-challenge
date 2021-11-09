const entry = 20

function Hourglass(size) {
    const halfSize = Math.floor(size/2)
    const remainder = size%2

    this.size = size
    this.upperHalf = Array(halfSize)
    this.lowerHalf = Array(halfSize)

    const sandLine = (size, length) => {
        const sandLine = Array(size).fill(' ')
        
        return sandLine
    }
}

const hourglass = new Hourglass(entry)
console.log(hourglass)