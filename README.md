
# Overview
  * Application brief
  * Wire framing and workflow diagram
  * User Stories
  * Entity relationship diagram
  * configuration steps
  * Whats needs improvement
____
### 1) Application Brief ###  
ELS is an easy to use app that allows DownerEDI employees to log hours spent on 
projects mobily across their sites. ELS looks to shorten the time spent on report 
generating for admins.
___
### 2) WireFraming and Workflow Diagram ###

Balsamiq was used for wireframing as we have used it on previous projects.
![Wireframes](Documentaion/wireframe/admin-report-page.png)
to see more navigate to documantation/wireframe to see the rest.
____
#### User flow ###
![Userflow](documentation/UX_Flow.png)
___
### 3) User Stories ###
* Project managers
  * should be able to...
  * Sign in using my credentials so that the app knows it's me.
  * Be able to press a button to log my hours
  * Be able to pick from a dropdown what projet I am working on
  * Pick from a dropdown what kind of hours I'm working, travel, leave etc...
  * Press a button and check out of work
  * Sign out of the app
  * Leave comments for an admin about the project

* Admin 
  * Should be able to...
  * Sign in using my credentials so that the app knows it's me
  * Create new project managers/engineers
  * To create new project numbers
  * Export the monthly data to .csv file, to merge it with ms excel
  * See a screen with all managers hours for the month
  * See a screen with all project hours for the month
  * Edit managers
  * Edit projects
  * Delete managers
  * Delete projects

* Developers
  * Should be able to...
  * Store databases online so that I can access it through the web
___

# Built with
  * Built using ReactJS, Express and mongoDB.
  * Hosted on Mlabs and Heroku.

___
### 4) Entity Relationship Diagram ###
![ERD](public/images/erd.png?raw=true)

___
### 5) Configuration steps

make an env file into the root of the  folder. add htier secret and api url. 


  * Clone the repo
  * Set up a dot env file and set all these up
    * S3_BUCKET_NAME=yourS3BucketName(will need t be done as photos are hosted in development)
    * AWS_ACCESS_KEY_ID=YourAWSAccessKEy
    * AWS_SECRET_ACCESS_KEY=YourAwsSecretAccess_key
    * AWS_REGION=AwsRegion
    * MAIL_HOST=localhost:3000
    * SENDMAIL_USERNAME=yoursendMailUserName
    * SENDMAIL_PASSWORD=SendmailPassword
    * SENDGRID_API=SendGridApi
    * SENDGRID_API_NAME=SendGridName
    * STRIPE_PUBLISHABLE_KEY=YourStripePublishableKey
    * STRIPE_SECRET_KEY=YourStripeSecretKey
    links for [sendgrid](https://app.sendgrid.com), [Stripe](https://dashboard.stripe.com), and [Amazon](https://signin.aws.amazon.com).



 To set up the app to run in the browser.
```
npm install
```


and then

```
npm start
```

navigate to http://localhost:3000/adminseed
and login with the credentials provided in the seeds.rb file yay your an admin
      ___
### 6) What needs improvement ###

  - Managers
  Managers can edit hours, edit and delete projects, ability to create multiple projects while staying ont he same screen, 