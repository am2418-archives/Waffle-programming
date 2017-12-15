//this is the code to create blocks
var waffleBlocks={
blocks:[],
functions:[],
txt: [],
types: [],
newBlock: function(name,code,text,typecode) {
waffleBlocks.blocks.push(name);
waffleBlocks.functions.push(code);
waffleBlocks.txt.push(text);
waffleBlocks.types.push(typecode);
},
runBlock: function(name) {
var a=waffleBlocks.blocks.indexOf(name);
waffleBlocks.functions[a]();
}
};
//Note: rendering still needs to be done
