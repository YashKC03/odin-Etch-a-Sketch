const sizeOfGrid = 16

const resetButton = document.querySelector('button')
const container = document.querySelector(".container")

const createGrid = (amountOfGrids) => {
    const wrapper = document.createElement("div")
    wrapper.classList.add("wrapper")


    for (let i = 0; i < amountOfGrids; i++){
        const row = document.createElement("div")
        row.classList.add("grid-row")

        for(let j = 0; j < amountOfGrids; j++){
            const widthAndHeight = 960 / amountOfGrids
            const gridBox = document.createElement("div")
            gridBox.classList.add("grid-box")
            gridBox.style.width = `${widthAndHeight}px`
            gridBox.style.height = `${widthAndHeight}px`

            gridBox.addEventListener("mouseenter", () => {
                gridBox.style.backgroundColor = "black"
            })
            row.appendChild(gridBox)
        }

        wrapper.appendChild(row)
    }
    container.appendChild(wrapper)
}

createGrid(sizeOfGrid)

resetButton.addEventListener("click", () => {
    let userSize = Number(prompt("What dimensions would you like for your new grid?"))

    while(userSize > 100){
    userSize = Number(prompt("Pick a smaller number and make sure its 100 or less!"))
    }
    const wrapper = document.querySelector(".wrapper")


    if(!wrapper){
    createGrid(userSize)
    } else{
    wrapper.remove()
    createGrid(userSize)
    }

    
})


