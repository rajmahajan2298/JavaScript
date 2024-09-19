// Event loop has only one thing to do it need to keep an eye on Call Stack once it is Empty
// It will Push the Data From Microtask Queue and Call BAck Queue

// Microtask Queue Will be given Priority over CallBack Queue
//Promises, Mutation observer all will go to MicroTask Queue

//Starvation Occurs when Any Item Take soo Long to Execute and Other Task are wating for it in Microtask queue

//SetTimeout is a Web API not a Javascript function it is given by Browser same as DOM.

//Callback Function in JS Helps to Make JS Behave Asyn. 
