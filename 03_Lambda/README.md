# Step 01: AWS Lambda

**Goal:** Update an AWS Lambda function using the AWS console website.

In the AWS Console, go to the Lambda section:
https://eu-central-1.console.aws.amazon.com/lambda

<details>
<summary><b>Invoke a Lambda function</b></summary><p>

1. Log into the AWS Console, in the Lambda Dashboard

2. Click on `Functions` in the sidebar

3. Click on the function you created

4. In the top right, click on `Configure test event` > `Create new test event`

5. Select existing event `Amazon API Gateway AWS PROXY`

6. As event name, fill `TestEvent` & save

7. Click on `Test`

8. See the output and the logs in the dashboard

</p></details>

<details>
<summary><b>Modify a Lambda function</b></summary><p>

1. Modify the response body in the `Function code` section

2. Click `Save`

3. Click `Test`

4. See the output is different and reflects your change

</p></details>

<details>
<summary><b>Publish a new version</b></summary><p>

1. Click `Action`

2. Click `Publish new version`

3. Give the new version a description

4. Click `Publish`

</p></details>

<details>
<summary><b>Return an HTML page</b></summary><p>

1. Copy the content of the `02_Lambda/src/handler.js` file.

2. Paste it in the editor of the `Function code` section

3. Click `Save`

4. Refresh the url of our newly app... multiple times!

</p></details>
