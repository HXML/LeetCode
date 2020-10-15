//一、倒序倒置法
let rotate = (matrix) =>{
    for(let i = 0; i < matrix.length; i++){
        for (let j = i; j < matrix[i].length; j++){
            [matrix[i][j],matrix[j][i]] = [matrix[j][i],matrix[i][j]]
        }
    }
    matrix.forEach(row=> row.reverse())
};

