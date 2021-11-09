const entry = 20

function Hourglass(size) {
    this.size = size
    this.upperHalf = Array(size/2)
    this.lowerHalf = Array(size/2)
}

const hourglass = new Hourglass(entry)
console.log(hourglass)