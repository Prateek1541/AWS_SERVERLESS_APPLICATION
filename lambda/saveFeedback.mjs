import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { PutItemCommand } from "@aws-sdk/client-dynamodb";

const client = new DynamoDBClient({});

export const handler = async (event) => {
    try {
        const body = JSON.parse(event.body);

        const params = {
            TableName: "feedback",
            Item: {
                id: { S: Date.now().toString() },
                name: { S: body.name },
                message: { S: body.msg }
            }
        };

        await client.send(new PutItemCommand(params));

        return {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify({ message: "Success" })
        };

    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message })
        };
    }
};