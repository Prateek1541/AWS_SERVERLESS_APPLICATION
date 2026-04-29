import { DynamoDBClient, ScanCommand, PutItemCommand } from "@aws-sdk/client-dynamodb";

const client = new DynamoDBClient({});

export const handler = async (event) => {
    try {
        if (event.requestContext.http.method === "POST") {
            const body = JSON.parse(event.body);

            await client.send(new PutItemCommand({
                TableName: "feedback",
                Item: {
                    id: { S: Date.now().toString() },
                    name: { S: body.name },
                    message: { S: body.msg }
                }
            }));

            return {
                statusCode: 200,
                headers: { "Access-Control-Allow-Origin": "*" },
                body: JSON.stringify({ message: "Saved" })
            };
        }

        if (event.requestContext.http.method === "GET") {
            const data = await client.send(new ScanCommand({
                TableName: "feedback"
            }));

            return {
                statusCode: 200,
                headers: { "Access-Control-Allow-Origin": "*" },
                body: JSON.stringify(data.Items)
            };
        }

    } catch (err) {
        return {
            statusCode: 500,
            body: JSON.stringify(err.message)
        };
    }
};