// Create a function to transform decimal to binary.

const decimalToBinary = (decimal) => {
    return (decimal >>> 0).toString(2);
}
