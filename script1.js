const machMedia = window.matchMedia("(prefers-color-scheme: dark)");

if (machMedia.matches) {
    document.getElementById("root").classList.add("dark");
} else {
    document.getElementById("root").classList.add("dark");
}

// [x] Creation of the object
// [x] 

// Create a object that represents the grid of pixels. It shoud take h, w as parameter

const svgDrawer = {
    createPixelGrid(width, height) {
        let container = new Array();
        for (i = 0; i < height; i++) {
            container.push(new Array(width));
        }
        return container;
    },

    editValueOfSinglePixelInGrid(
        newPixelValue,
        pixelPositionX,
        pixelPositionY,
        pixelGrid
    ) {
        pixelGrid[pixelPositionX][pixelPositionY] = newPixelValue;
        return pixelGrid;
    },

    createGridofDivElements(pixelGrid) {
        const containerDiv = document.createElement("div");
        containerDiv.className = "container-div";
        for (row = 0; row < pixelGrid.length; row++) {
            const rowDiv = document.createElement("div");
            rowDiv.className = "row-div";
            for (column = 0; column < pixelGrid[row].length; column++) {
                const columnDiv = document.createElement("div");
                columnDiv.className = "pixel-div";
                columnDiv.setAttribute("pos-x", column);
                columnDiv.setAttribute("pos-y", row);

                rowDiv.appendChild(columnDiv);
            }
            containerDiv.appendChild(rowDiv);
        }
        return containerDiv;
    },

    addEventListenersToPixelDivs() {
        const pixelDivs = document.getElementsByClassName("pixel-div");
        for (i = 0; i < pixelDivs.length; i++) {
            pixelDivs[i].addEventListener("click", function () {
                const x = this.getAttribute("pos-x");
                const y = this.getAttribute("pos-y");
                grid[y][x] = "as"
                return {"x" : x, "y" : y};
            });
        }
    },

    returnGrid() {
        grid[2][3] = "as"
        return grid
    }
};

/*
TODO: no me convence manipular la variable grid, tendría que ser
algo que me aseguro de que es creado de esta manera. Puedo almacenar
el estado dentro del mismo objeto? Puedo hacerlo en una base de datos?
un local storage con opción de guardar en base de datos o un JSON?

Voy a tener que crear algún tipo de reconciliación, cada vez que se cambie
el grid llamar esa reconciliación que analiza el estado previo del grid y el nuevo
y crea una operación de actualización que ajusta el elemento que es afectado y ningún otro

El estado podría ser como un json en una variable

Como persiste el estado de una app de react? donde es "temporalmente almacenado?"

Donde almacena el estado REDUX? Es una varibale en memoria, es un local storage, una especie de caché?
*/
const grid = svgDrawer.createPixelGrid(10, 10);
const divElements = svgDrawer.createGridofDivElements(grid);
document.getElementById("root").appendChild(divElements);
svgDrawer.addEventListenersToPixelDivs();
