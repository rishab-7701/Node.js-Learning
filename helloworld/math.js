// This is a module which deals with only math functions

function add(a,b){
    return a+b;
}

//this is a private function until it is exported

function sub(a,b){
    return a-b;
}


module.exports = {
    add,
    sub,
};
