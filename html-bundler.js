const fs = require('fs');
const concatHtmlFiles = (opt) => {

    const __defaultOpt = {
        pathToIndex:(opt && opt.pathToIndex) || './',
        pathToParts:(opt && opt.pathToParts) || './project'
    }

    let head = '',
        body = '',
        bottomScripts = '';

    const paths = fs.readdirSync(__defaultOpt.pathToParts);

    paths.map((file) => {
        // if file is .html extention
        if (file.indexOf('.html') !== -1) {
            if (file.indexOf('head') !== -1) {
                console.log(`merge ${file} into head`);
                head += fs.readFileSync(`${__defaultOpt.pathToParts}/${file}`).toString();
            }
            if (file.indexOf('body') !== -1) {
                console.log(`merge ${file} into body`)
                body += fs.readFileSync(`${__defaultOpt.pathToParts}/${file}`).toString();
            }
            if (file.indexOf('script') !== -1) {
                console.log(`merge ${file} into bottomScripts`)
                bottomScripts += fs.readFileSync(`${__defaultOpt.pathToParts}/${file}`).toString();
            }
        }
    });

    const pattern = `<!DOCTYPE><html><head>${head}</head><body>${body}${bottomScripts}</body></html><!-- index.maker made by Przemocny -->`;
    console.log('packing to index.html done');
    fs.writeFileSync(`${__defaultOpt.pathToIndex}/index.html`, pattern);
}
module.exports = concatHtmlFiles;
concatHtmlFiles();