const url = require('url');
// instantiate new url object
const myUrl = new URL('http://mywebsite.com:8000/hello.html?id=100&status=active');
// Serialized URL
console.log(myUrl.href);
console.log(myUrl.toString());
// Host
console.log(myUrl.host);
// Host name (doesn't include port)
console.log(myUrl.hostname);
// Pathname
console.log(myUrl.pathname);
// Serialized query
console.log(myUrl.search);
// Params object
console.log(myUrl.searchParams);
// Add param
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);
console.log(myUrl.search);
// Loop through params
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));