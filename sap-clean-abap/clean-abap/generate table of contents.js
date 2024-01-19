var fs = require('fs');
var toc = require('markdown-toc');

// Read the file into a string
fs.readFile('../clean-abap/RAP.md', 'utf8', function(err, data) {
    if (err) throw err;

    // Generate the table of contents
    var result = toc.insert(data);

    // Write the result back to the file
    fs.writeFile('../clean-abap/RAP.md', result, function(err) {
        if (err) throw err;
        console.log("The file was updated!");
    });
});