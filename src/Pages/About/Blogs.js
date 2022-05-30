import React from 'react';

const Blogs = () => {
    return (
        <div id=''>
            <h3 className='text-center text-primary my-2'>Theory Part</h3>
            <h5>Question 1:How will you improve the performance of a React Application? </h5>
            <p>Ans: When we create a rendered component, React creates a virtual DOM for its element tree in the component.React uses the concept of a virtual DOM to minimize the performance cost of re-rendering a webpage because the actual DOM is expensive to manipulate.    </p>

            <h5>Question 2: What are the different ways to manage a state in a React application? </h5>
            <p>Ans:we build our applications with functional components. Components are themselves JavaScript functions, independent and reusable bits of code.The state is an object that holds information about a certain component.The purpose of building the application with components is to have a modular architecture, with a clear separation of concerns.  </p>

            <h5>Question 3: What is a unit test? Why should write unit tests?  </h5>
            <p>Ans:Unit Testing is important because software developers sometimes try saving time doing minimal unit testing and this is myth because inappropriate unit testing leads to high cost Defect fixing during System Testing, Integration Testing and even Beta Testing after application is built.  </p>

        </div>
    );
};

export default Blogs;