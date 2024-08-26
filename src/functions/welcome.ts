import { APIGatewayProxyEventV2 } from "aws-lambda";

interface Params{
    identifier: string
}

export async function handler(event: APIGatewayProxyEventV2) {    
    const { pathParameters } = event
    
    if (!pathParameters?.identifier) {
        return {
            message: "Hello, stranger!"
        }
    }

    return {
        message: `Hello, ${pathParameters.identifier}!`
    }
}