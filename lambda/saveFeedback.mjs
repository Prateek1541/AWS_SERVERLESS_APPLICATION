import { DynamoDBClient, ScanCommand, PutItemCommand, DeleteItemCommand } from "@aws-sdk/client-dynamodb";

const client = new DynamoDBClient({});

export const handler = async (event) => {
    try {
        const method = event.requestContext.http.method;

        // ➤ CREATE (POST)
        if (method === "POST") {
            const body = JSON.parse(event.body);

            await client.send(new PutItemCommand({
                TableName: "feedback",
                Item: {
                    id: { S: Date.now().toString() + "-" + Math.random().toString(36).substring(2) },
                    name: { S: body.name },
                    message: { S: body.msg },
                    timestamp: { S: new Date().toISOString() }
                }
            }));

            return {
                statusCode: 200,
                headers: { "Access-Control-Allow-Origin": "*" },
                body: JSON.stringify({ message: "Saved" })
            };
        }

        // ➤ READ (GET)
        if (method === "GET") {
            const data = await client.send(new ScanCommand({
                TableName: "feedback"
            }));

            return {
                statusCode: 200,
                headers: { "Access-Control-Allow-Origin": "*" },
                body: JSON.stringify(data.Items)
            };
        }

        // ➤ DELETE
        if (method === "DELETE") {
            const body = JSON.parse(event.body);

            await client.send(new DeleteItemCommand({
                TableName: "feedback",
                Key: {
                    id: { S: body.id }
                }
            }));

            return {
                statusCode: 200,
                headers: { "Access-Control-Allow-Origin": "*" },
                body: JSON.stringify({ message: "Deleted" })
            };
        }

    } catch (err) {
        return {
            statusCode: 500,
            body: JSON.stringify(err.message)
        };
    }
};