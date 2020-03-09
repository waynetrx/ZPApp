Implementation:
Q) What libraries did you add to the frontend? What are they used for?
A) 
* Material UI is used to arrange ui components in grid. 
* Typescript to give it types for better readability.
* Chart JS to display bar chart
* Axios for HTTP Get Call
* Create a server side app to pull the data from the api as a proxy to bypass CORS policy for local development
Q) What's the command to start the application locally?
A) (Default) yarn start

General:
Q) If you had more time, what further improvements or new features would you add?
A) Further improvements such as seperating the logic codes into their respective file such as css styling, HTTP GET request, functions that handle data and provide typing for the incoming data from the api
Q) Which parts are you most proud of? And why?
A) Functional components. That is because in earlier React versions, using component functions are straight forward. However the challenge is that it is inflexible and has no access to state, ref and lifecycle methods when the need arise. Having React Hooks helps to achieve that with functional components.
Q) Which parts did you spend the most time with? What did you find most difficult?
A) Calling the api through localhost was blocked due to the presence of the requested resource No 'Access-Control-Allow-Origin' header. Css styling is different from VueJS and Angular which have their own declarative css <style> element. Functional component syntax and React Hook are unfamiliar and more time is needed to get used to it.
Q) How did you find the test overall? Did you have any issues or have difficulties completing?If you have any suggestions on how we can improve the test, we'd love to hear them.
A) The test instruction was comprehensive and clear.