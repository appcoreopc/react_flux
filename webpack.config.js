module.exports = { 
 entry : "./public/js/app.js",
 output : {
 	path : __dirname + "/public", 
    filename : "bundle.js"
 },
 module : { 
    loaders : [
      { test : /\.js$/ , loader : 'babel', query : {  presets : ['es2015', 'react'] } }
    ]
 }
}