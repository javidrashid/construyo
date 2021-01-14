# Construyo App

The App is build using ReactJS powered by NextJS for server side rendering and Tailwind CSS for UI componnets, Highlevel Overview of the APP.


1. Clinet Side Framework is REACT.JS
2. Server Side Rendering Acheived using Next.JS, A ReactJS Framework
3. Backend Services provided by Firebase
4. Authentication and Authorization via Google and Github. (Google Auth verification is pending, I kept it pending on purpsose.)
5. Registration via Simple Email and Password.
6. Tests use jest and react-testing-library
7. Form Validation by React-Hook-Form
8. Deployment on Netlify


# How to run the App.

STEP 1 : `npm install` <br />
STEP 2 : `npm run dev`  //For dev version

#  Notes
If you want to configure it with a different set of keys of Firebase, update .env.local file at the root of the project.

When you run `npm run test` Jest will kick to run the tests, there are few tests but they may fail since we are reading API key values from environment variables. If the API keys were to be hard coded then tests should pass.  

You can try running the code either from `master` branch or submission branch. siubmission branch has the latest up to date code. Alternatively there is a typescript version of the App available in typescript branch. But `submission` branch can be treated as most updated with API keys provided by you.
# Backend
I haven't build a seperate backend as it was not really needed since Firebase provides Realtime DB as well as FireStore out of the box, when you use authentication services of Firebase.

# Live Demo of the App

Live Demo is also available at 

https://construyo-orders.netlify.app/

Try `hellouser@test.com` and `Test@123` as a demo login, You can always try registering yourself as well. Also Github can be used to login. Google can be used too if you ignore the Verification warning.

I have also added some screnshots for your handy reference.