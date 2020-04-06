# Step 01: AWS CloudFormation

**Goal:** Create AWS services in the cloud using CloudFormation

<details>
<summary><b>Create a stack with API Gateway and Lambda</b></summary><p>

(If you cloned the repository locally, skip the the next 2 points)

1. Go to link:
https://github.com/saragerion/introduction-to-serverless-workshop/blob/master/02_CloudFormation/stack-template.yml

2. Click on `Raw`, right click the page, and save it on you computer

3. In the AWS Console, go to the CloudFormation section: https://eu-central-1.console.aws.amazon.com/cloudformation

4. In the top right, click on `Create stack`

5. Select: `Template is ready`, and `Upload template file`

6. Upload the template you just downloaded 

7. Click on `Next`

8. For both fields `Stack name` and `AppName` insert the same value `intro-to-serverless-` followed by your name - for example `intro-to-serverless-john-smith`

9. Click on `Next`

10. Skip everything and click on `Next`

11. Click on the warning checkbox related to `AWS::IAM::Role`

12. Click on `Create stack`

13. Wait for the stack progress to be `COMPLETED`
</details>
