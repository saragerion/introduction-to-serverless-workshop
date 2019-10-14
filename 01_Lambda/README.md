# Module 01: AWS Lambda

**Goal:** Create an AWS Lambda function using the Lambda console.

<details>
<summary><b>Create a Lambda function</b></summary><p>

1. Log into the AWS Console

2. Go to the Lambda console

3. Click `Create function`

4. Select `Author from scratch`

5. Use the name `intro-to-sl-` followed by your name - e.g. `intro-to-sl-sara-gerion`

6. Select the runtime as `Node.js 10`

7. Under `Role*`, choose `Create new role from template(s)`

8. Use the role name `intro-to-sl-` followed by your name - e.g. `intro-to-sl-sara-gerion`

9. Use the policy template `Test Harness permissions`

10. Click `Create function`

</p></details>

<details>
<summary><b>Invoke a Lambda function</b></summary><p>

1. Click `Test`

2. Choose any name for `Event name`

3. Click `Create`

4. Click `Test` one more time

5. See the output and log in the Cloud9 console

</p></details>

<details>
<summary><b>Modify a Lambda function</b></summary><p>

1. Modify the callback value

2. Click `Save`

3. Click `Test`

5. See the output is different and reflects your change

</p></details>

<details>
<summary><b>Publish a new version</b></summary><p>

1. Click `Action`

2. Click `Publish new version`

3. Give the new version a description

5. Click `Publish`

</p></details>

<details>
<summary><b>Create a new alias</b></summary><p>

1. Click `Action`

2. Click `Create alias`

3. Give it a name and description

4. Select a version from the `Version*` drop down

5. Click `Create`

</p></details>
