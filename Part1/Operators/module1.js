let moduleVariable= 12;

function moduleFunction(){
    console.log("hello Rakesh from module1! ");
}

// it is part of commonjs for exporting files
// export default moduleFunction;

// This is the part of module part for exporting files
module.exports={moduleFunction, moduleVariable};