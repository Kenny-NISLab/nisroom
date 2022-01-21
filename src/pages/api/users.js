import AWS from "aws-sdk";
import Consistant from "../../consistant";

AWS.config.update({
  region: Consistant.aws_region,
  endpoint: Consistant.aws_dynamodb_endpoint,
  credentials: new AWS.Credentials(process.env.MY_AWS_ACCESS_KEY_ID, process.env.MY_AWS_SECRET_ACCESS_KEY),
});

const docClient = new AWS.DynamoDB.DocumentClient();

export default function handler(req, res) {
  if (req.method === "GET") {
    const params = {
      TableName: Consistant.aws_dynamodb_tableName,
      ProjectionExpression: "#name, studentId, avatarImage, isStay",
      FilterExpression: "#archive = :archive",
      ExpressionAttributeNames: {
        "#archive": "archive",
        "#name": "name",
      },
      ExpressionAttributeValues: {
        ":archive": false,
      },
    };

    docClient.scan(params, (err, data) => {
      if (err) {
        res.status(404).json({ message: "Database connection error." });
        console.error(err);
      } else {
        if (data.Items.length) {
          data.Items.sort((a, b) => a.studentId - b.studentId);
          res.status(200).json(data.Items);
        } else {
          res.status(200).json({ message: "Item not found." });
        }
      }
    });
  }
}
