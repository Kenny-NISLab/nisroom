import AWS from "aws-sdk";
import Consistant from "../../../consistant";

AWS.config.update({
  region: Consistant.aws_region,
  endpoint: Consistant.aws_dynamodb_endpoint,
  credentials: new AWS.Credentials(process.env.MY_AWS_ACCESS_KEY_ID, process.env.MY_AWS_SECRET_ACCESS_KEY),
});

const docClient = new AWS.DynamoDB.DocumentClient();

export default function handler(req, res) {
  const {
    query: { name },
  } = req;

  if (req.method === "GET") {
    const params = {
      TableName: Consistant.aws_dynamodb_tableName,
      ProjectionExpression: "#name, studentId, avatarImage, isStay",
      ExpressionAttributeNames: {
        "#name": "name",
      },
      Key: {
        name: name,
      },
    };

    docClient.get(params, (err, data) => {
      if (err) {
        res.status(404).json({ message: "Database connection error." });
        console.error(err);
      } else {
        if (data.Item) {
          res.status(200).json(data.Item);
        } else {
          res.status(200).json({ message: "Item not found." });
        }
      }
    });
  } else if (req.method === "PATCH") {
    if (req.body.isStay !== true && req.body.isStay !== false) {
      res.status(404).json({ message: "You need request body isStay(Boolean)." });
    } else {
      const params = {
        TableName: Consistant.aws_dynamodb_tableName,
        Key: {
          name: name,
        },
        UpdateExpression: "set isStay = :i",
        ExpressionAttributeValues: {
          ":i": req.body.isStay,
        },
        ReturnValues: "NONE",
      };

      docClient.update(params, (err, data) => {
        if (err) {
          res.status(404).json({ message: "Database connection error." });
        } else {
          res.status(200).json(data);
        }
      });
    }
  }
}
