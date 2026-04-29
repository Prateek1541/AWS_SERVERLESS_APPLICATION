# 🚀 AWS Serverless Feedback Application

A fully serverless web application built using AWS services to collect, store, and manage user feedback in real-time.

---

## 📌 📖 Project Overview

This project demonstrates how to build a **scalable, secure, and cost-efficient serverless application** without managing any servers.

Users can:

* Submit feedback
* View all feedback
* Delete feedback

All operations are handled through AWS-managed services.

---

## 🏗️ 🔥 Architecture Diagram

![Image](https://images.openai.com/static-rsc-4/vsqW_4o6fpkouqQaiKrdjtMNAYZrHfVQeiKKDN6kwu5tI45E1SMIoxCnBVJtZrcA9T3faqzCgn6LWZDMuEwa5cqme2n1nkQpz7qhT1kQhz_4u65LaU47ROdkttZatY7sIKv6EIl3haKoqPCbFzKbzu05fS9UalU_q9BtAOft9ktGEQcdB7mfgvExNTeyXSVJ?purpose=fullsize)

<!-- ![Image](https://images.openai.com/static-rsc-4/vsN1RTiG9VUCzslI_23A7wIb5aABaZG-QtKmazhL-6GBVkQuxM-f9AdP8MTi3E2LwKmWGAQi55wj4Eg7TgdaXW3oemdZPwPK7B1uM3LuZ2czAhguhzByOr4U9fwhlJdls4gg82J7tqjtwpEtMx2NT3NEeSK2R6oE5H4EYFxrioBKwgJr19dk0X45a_5HoYaA?purpose=fullsize) -->

![Image](https://images.openai.com/static-rsc-4/t8D7gKFRaca6fasNdixdo1bHhuBdnllKkSUX3OSfk78Pp1ED6sLcR2i0bWP3PaXX5imy2B7GCptgeDPdBTrS4WOTewBWDb9RzMXVgANbUX5BdscSJeZ4sJAFiCXL2_an-qZ6Je0ZXQnv4UcRGinlDV04z5sIwZzQdOVUGO4DKFZN4cnJYt5KRl2fUccb2lTS?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/kkQ0lZfoRbpjz7v271g2unyic19RvR_B7U7wv2OxFJ7xvX1pRe4DmFNBSN67o1ZVK6NpkAEsyHXo8JBi-FU9nTaDzUho5j5pi7H-Icue7hXdOrvt4jaYN_bCniqWwZAN0nahZKK3ZHALInLB9vRZHwVYnIE0g9hRPAPGGeNxROvdKVrL5iJPLTvJg5SjyacO?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/A1h-eTu1sIS6z8oznh_jQ00tQbIs9UX8Bn2P1z_TbgSYAjMwYisLJaE2tiHL4H35fJ_f4kp8gNF9QQ7MjDxYc7jXB2vuJcWQhVGQxqj2dJ8nB9zkAA1tLOezGVoMlS0GZNTpY7eov8foeHB0xWd9LbXQaLYiMBwDWiAD5GDrGM6ugcK74uDB4Z_oMsFefxI7?purpose=fullsize)

<!-- ![Image](https://images.openai.com/static-rsc-4/-T68eyykLf7FHixXLeisELeDfmOhQLUxUap4DYYIz_XGMpfwB8DdLPzGAFnkkizO0nxMnm2sUGUWvi3qg8T_n7HCz7XgRNgEZcxXxrpyv4eRloH-CA-_52j8-JGjzmz9xfiFeVlsxCGU1E88z6WFnmsU4c2zdR6-sBNm0UGQPEUXMV04v2jrW1yMWJeCeQHT?purpose=fullsize) -->

![Image](https://images.openai.com/static-rsc-4/ROUUi8DCYRbcKi0ZgcbupeaT5m65UeS-YcVKVUK2K5LQxTEd5T68uXB2FlTL7zQbh8xlggyXEIUHLwYiBYM4V4ZIIvff3Joj7F_7sUtIQ1WNncFJt1NrZgzCg2WHhkGIUnosDSEXfMf8oeQX-e5nkeem9g1QlXEEr8PbfWnUu6Yolgv5rpPn7Vz52TUpZSn5?purpose=fullsize)

### 📊 Flow Explanation

User (Browser)
<br>
      ↓
      <br>
CloudFront (HTTPS + CDN)
<br>
      ↓
      <br>
S3 (Frontend Hosting)
<br>
      ↓
      <br>
API Gateway (REST API)
<br>
      ↓
      <br>
Lambda (Backend Logic)
<br>
      ↓
      <br>
DynamoDB (Database)
<br>
      ↓
      <br>
Response back to User

Step-by-step:
1. User opens website → served via CloudFront
2. CloudFront fetches frontend from S3
3. User submits feedback
4. Request goes to API Gateway
5. API Gateway triggers Lambda
6. Lambda stores/retrieves data from DynamoDB
7. Response sent back to frontend

---

## ⚙️ 🛠️ Tech Stack

| Layer       | Service               |
| ----------- | --------------------- |
| Frontend    | HTML, CSS, JavaScript |
| Hosting     | Amazon S3             |
| CDN + HTTPS | Amazon CloudFront     |
| API Layer   | API Gateway           |
| Backend     | AWS Lambda            |
| Database    | DynamoDB              |

---

## 📁 📂 Project Structure

```bash
AWS_SERVERLESS_APPLICATION/
│
├── frontend/
│   └── index.html        # UI of application
│
├── lambda/
│   └── saveFeedback.mjs  # Backend logic
│
├── docs/
│   └── db-setup.md       # Database documentation
│
└── README.md
```

---

## 🔧 🔥 Features

### ✅ 1. Submit Feedback

* Users enter name and message
* Stored in DynamoDB using Lambda

---

### ✅ 2. View Feedback

* Fetches all records using GET API
* Displays dynamically on UI

---

### ✅ 3. Delete Feedback

* Removes item from database
* Uses DELETE API endpoint

---

### ✅ 4. Timestamp Tracking

* Each feedback has creation time
* Helps in sorting and tracking

---

## ☁️ 🔥 AWS Services Used

---

### 🔹 Amazon S3 (Static Hosting)

![Image](https://images.openai.com/static-rsc-4/zA_fhb3kLeqFZjXLrOpCRhP_lKIIjKRLc2CN8a3r2_EYL2lMI1XzWury3VQbtVurVt8ph6Bx7NKImKyDwwzJHHmImTROkW5a2BbRTBsWD5UJmEaUgkdDfR5GUrxIm3w9Jjj1N_7kBpWW0HwGyuWXTLiXi8OyKEwKF1DTPWTBSpXqTUANdQ-_1JQr4g4a9nDp?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/iBUFya3V1jAadem-TGblIoQlkaHodJzzjJNnpfJVTOppouqLJroG94_EDif7krY28hMh1d-F8pfVr43IM03VgcDJ9bdIksBOUaKEK68N5UlEN0k5DyauPP27teO9FBdV0Af15klLVSdzS0HLuUCJCj2al5Z3Cwxg28k1iindZePnZbqkuYZS-KwnGhbJjLJk?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/07vzwjgVF-RluSS3htwHaG_iSXi__f1UOHmKvl69DgXijf_JY7j9jraZ34i8nrH__3-4ejrsOMCBvdyAv9zKQUecbiBywI48e7SCD6MzmSujDIdRdf5eTsTigZuRpL9V1PY2MEz4GR9uDKpRbZ8GLb0K-FhSC3OdyztR__4H2-43wGnOO8LwlHc-ZroRsNII?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/p1JVTjydukAGBnWL2jRTK1GZcR4ce6svpGAqIN5_Tg8gWbWgQJ_7vz8jqVpPBVupVgK3eE7jYxtzULqxKyGagQXcElk-j302Ba_aaQAFgurOsrVN2r7fQBG2z-bCinxgl7KBy6LdLAJs0EvlxqCt_SQFGRGfUPdvhz1vw8xYxiSgSy-zukTM2b7DBVkzJng5?purpose=fullsize)


* Hosts frontend files (HTML, JS)
* Provides public access to website
* Integrated with CloudFront

---

### 🔹 AWS Lambda (Backend)

![Image](https://images.openai.com/static-rsc-4/t8D7gKFRaca6fasNdixdo1bHhuBdnllKkSUX3OSfk78Pp1ED6sLcR2i0bWP3PaXX5imy2B7GCptgeDPdBTrS4WOTewBWDb9RzMXVgANbUX5BdscSJeZ4sJAFiCXL2_an-qZ6Je0ZXQnv4UcRGinlDV04z5sIwZzQdOVUGO4DKFZN4cnJYt5KRl2fUccb2lTS?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/AW4imU_piI_yEn3a3eJGk5ZxF7uDYgl0j81L7eLCZaQTEs0E1UP33UB5GZ7h9XUOPjOHS1rN6Cja_JgfxX225sWYbpcfQkRqi6zj25Ff7EbZgc4E67CLRXz3A1eeDkGWSt29e58TqCUO8oOPI4Td_kInHi8naK-Pdni7LAodrQet-j34jekQoVYrP8c_sMsE?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/tTqfYfs9Fx95UCLtb1dB-EyYw3bBTf7V-A3iASvhOCnwszwgVLCmdW_DA1fM1_Mlfxxw4pR9JECTY1_63b1zSbVeCKVuY3Mt4H5SsTSblSxsrELerfmJM4BnQ6bUdQk1DbibKkuHBjg3EUaaw7BMZtQswNh1_OasJwUfstcNkqKeYXc4D5v2DvwayxdtwvQZ?purpose=fullsize)

* Executes backend logic
* No server management required
* Handles:

  * Save feedback
  * Get feedback
  * Delete feedback

---

### 🔹 API Gateway

![Image](https://images.openai.com/static-rsc-4/5RC-7xcWNE80QIF7T19jFaf1wYPIWUW56L-SN4XxCZiFMqjagVb4XaHIcmlf9v3hIxsY1sTdfUTG_v91nU1lcxodEtMq7FNHo7uQi5neYM2B3Qg9QBepRPxOHYcIqwa7VxQt7R_aeIZ0A66DST_vMi1lXPO_vrMojydlmSWowL4e_qMdZww1H9e7_pOaHrtU?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/ccrK9KrJohfytwdKnwYA7L3cNSMW7Dr_Duu96aZzc2ZLngILxXfw5y4Lp9df6dms8WbpUO7HguY1V4nSm3q0UP09debA7oCNSYdDErVip6l-EaP9Ki7wbaCDFuhsKX5cx1eEi0nWyu45_ra48geoR6nu-OSQRy1suFJcwgUfVdnBYipfO-hRNfKZflblZjkU?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/N7N7LlVvwigISBr5DkvuNqYZ2FdbPP_SS0BNwth2hW97iLY47YB_2tIw0N9cDWPfm0dpVsBeJXiRaNrDICC_geMXQM2Yr1BiWaqGizs9apECiPcoeTV5V-NkHmYUPQDo1mnaPxk7IiZsvG1RirOTJrOsike0d-GAzAadELZqI5eHZ-Y54Wxm7e6En2Mb8K7C?purpose=fullsize)

* Acts as entry point for API requests
* Routes requests to Lambda
* Handles:

  * POST → Save
  * GET → Fetch
  * DELETE → Remove

---

### 🔹 DynamoDB (Database)

* NoSQL database
* Stores feedback data
* Schema-less and scalable

---

### 🔹 CloudFront (CDN + HTTPS)

![Image](https://images.openai.com/static-rsc-4/NJ0hUI4JP2unWvR1GaDR3QNM3H1yd3lfK8tEgykIaNyy0CSePf85bYQyOKSNtuHk6r3M8EepVPvi7RwdX0xNw52p2C8kiKb3jLBy2wOjS8Q5IFHaZZL1ClyCt6sScoQKd0y1QHJleejvw7fiR3N0Phvy7sBrSfy_nP6UU5jVnvxeDMn1cUL3_RxeTPyuxdJ6?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/2LaFjAAhvjVIlf8gatsIyE0YlwG-hidEdH5ngU9CW0ca9rXGhebwO_OcjXgfiqH5FNt9U3EpTAVyw_buSIgXP3IkLkxRj_x7Wx2eIGUDGdAok6qPuKC2Ej_TMmxmPzq3dFfVi9miDuGvIecfCec3Q_K9ipR9oyRQNMuhCmcJhZDwL5Y0ffLjXt0nyT3gxvGW?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/VeAAfuJtJSH2yZ9FQIJSLIv6VZNZmkTJ-C5TNJ96b-yxvypsuq3AjL5p3yHlSTCl3DgoahEBApXubRrAqsjXi0jzlTDZ2QovfQHfbo0Hvzdyguppnm5bRTqtjt2MgHeKfvB6HwQ7WVp1x55sPODS7XA-H6nQl6hUOcwXq9DeunF1qrnbkZYCZ9fFrN6PIIdO?purpose=fullsize)

* Provides HTTPS (secure connection 🔒)
* Improves performance using caching
* Delivers content globally

---

## 🔐 🔒 Security Features

* HTTPS enabled via CloudFront
* IAM roles for controlled access
* CORS configured for API communication

---

## 💸 Cost Optimization

* Uses AWS Free Tier
* No server cost (serverless)
* S3 lifecycle rules for storage management

---

## 🚀 Deployment Steps (Summary)

1. Created DynamoDB table
2. Developed Lambda function
3. Integrated API Gateway
4. Built frontend UI
5. Hosted on S3
6. Enabled HTTPS via CloudFront

---

## 🌐 Live Demo

👉 https://d3prio6exfhqvd.cloudfront.net

---

## 📚 Key Learnings

* Serverless architecture design
* API integration
* Cloud deployment
* IAM roles and permissions
* Debugging real-world issues
* CDN and HTTPS setup

---

## 🎯 Use Cases

* Feedback systems
* Contact forms
* Survey applications
* Lightweight backend systems

---

## 🧠 Future Improvements

* Add authentication (Cognito)
* Pagination for large data
* Search/filter functionality
* Analytics dashboard

---

## 🏆 Conclusion

This project demonstrates how modern applications can be built using **fully managed cloud services**, ensuring scalability, reliability, and cost efficiency without maintaining servers.

---

⭐ If you found this useful, consider giving it a star!
