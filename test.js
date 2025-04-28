let filenames = ['photo1.jpg', 'photo2.png', 'photo3.gif'];

let filetypes = []
let names = []
filenames.forEach((filename) => {
    let parts = filename.split('.');
    filetypes.push(parts.pop());
    names.push(parts.join('.'));
})

console.log('File types:' + filetypes.join(','));
console.log('Names:', names);
