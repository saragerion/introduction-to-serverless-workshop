# Step 01: AWS API Gateway

**Goal:** Create an HTTP endpoint via AWS API Gateway using the AWS console website.

<details>
<summary><b>Create an API </b></summary><p>

1. Log into the AWS Console

2. Go to the API Gateway service section

3. Click `Create API`

4. Choose the protocol `REST`

5. Choose the voice `New API`

6. Under `API name`, fill `intro-to-sl`

7. Under `Endpoint Type`, choose `Regional`

8. Click `Create API`

</p></details>

<details>
<summary><b>Create an API Resource</b></summary><p>

1. In the API Gateway section, make sure you selected the API `Introduction to serverless` on the left sidebar

2. Select the voice `Resources` on the left

3. Click `Actions`

4. Click `Create Resource`

5. Select the checkbox `Configure as proxy resource`

6. Leave the rest of the form as it is

7. Click on `Create Resource`

</p></details>

<details>
<summary><b>Modify a the PROXY resource</b></summary><p>

1. Select the voice `ANY`

2. Select the Lambda region `eu-central-1`

3. In the `Lambda Function` voice, select the auto-completed voice `intro-to-sl-*`

4. Click on `Save`

</p></details>
