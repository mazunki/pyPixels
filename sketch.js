let map;
const board_rows=8, board_cols=8, boards=2;

function setup(){
	my_area = createCanvas(
                boards*board_cols*tile_size+border_size,
                board_rows*tile_size);
	my_area.mousePressed(clickListener);

	background(gray);
	map = new Array(boards);
    for (let b=0; b<boards; b++){
        map[b] = new Array(board_cols);
    	for (let i=0; i<board_cols; i++){
    		map[b][i] = new Array(board_rows);
    		for (let j=0; j<board_rows; j++)
    			map[b][i][j] = new Tile(b, i, j);
    	}
    }
	draw();
}

function draw() {
	for (let board of map) {
    	for (let row of board) {
    		for (let tile of row) {
    			tile.draw();
    		}
    	}
    }
}

function clickListener(){
	let estimateX, estimateY;
    let b = 0;
	index_x = floor((mouseX-b*border_size)/tile_size);
    while (index_x >= board_cols) {
        b++;
        index_x = floor((mouseX-b*border_size)/tile_size) - b*board_cols;
    }
	index_y = floor(mouseY/tile_size);

	map[b][index_x][index_y].mouseClicked();
}

function keyPressed(){
    if (key == "c") {
        let r = document.getElementsByName('rgb_red')[0].value;
        let g = document.getElementsByName('rgb_green')[0].value;
        let b = document.getElementsByName('rgb_blue')[0].value;
		brush_color = [r, g, b];
        console.log("new color!", brush_color)
	}
}
