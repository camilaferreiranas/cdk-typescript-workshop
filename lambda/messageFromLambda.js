exports.sayHelloHandler = async function(event) {
    console.log('Calling a lambda with event', JSON.stringify(event, undefined, 2));
    return {
        statusCode: 202,
        headers:  {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: 'Camila Ferreira',
            age: 26
        })
    }
}