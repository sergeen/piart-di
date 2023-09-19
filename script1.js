const machMedia = window.matchMedia("(prefers-color-scheme: dark)");

if (machMedia.matches) {
    document.getElementById("root").classList.add("dark");
} else {
    document.getElementById("root").classList.add("light");
}

/*
Next : corregir el error que hace que pox-x y pos-y esten mal.
Estan saliendo en la columna.
*/

const svgDrawer = {

    createPixelGrid(width, height) {
        let container = new Array();
        for (i = 0; i < height; i++) {
            container.push(new Array(width));
        }
        return container;
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
                editSinglePixelInGrid(x,y)
            });
        }
    },

    editSinglePixelInGrid(x,y) {
        grid[x][y] = "#asdwex"
    }

};

const grid = svgDrawer.createPixelGrid(10, 10);
const divElements = svgDrawer.createGridofDivElements(grid);

document.getElementById("root").appendChild(divElements);

const editSinglePixelInGrid = svgDrawer.editSinglePixelInGrid;
svgDrawer.addEventListenersToPixelDivs();
