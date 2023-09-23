exports.handler = async function(event) {
    console.log('Request:', JSON.stringify(event, undefined, 2));
    return {
        statusCode: 200,
        headers: {
            'Content-Type': 'text/plain'
        },
        body: `Hey CDK im doing a deployment with cdk watch and now im testing if it works:  ${event.path} \n`
    };
};