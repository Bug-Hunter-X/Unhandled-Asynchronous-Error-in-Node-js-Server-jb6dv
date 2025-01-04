# Unhandled Asynchronous Error in Node.js Server

This repository demonstrates a common issue in Node.js: unhandled errors within asynchronous operations.  The provided code simulates an asynchronous task that randomly fails. The initial implementation lacks proper error handling, leading to potential server crashes or unexpected behavior.

The `bug.js` file shows the flawed code, while `bugSolution.js` provides a corrected version with improved error handling.

## Problem

The original server code doesn't gracefully handle the rejection of the `asyncOperation` promise.  If the simulated task fails, the error isn't caught, and it is likely to cause the server to crash or behave unexpectedly. This is a typical scenario where insufficient error handling can cause serious problems in production environments.

## Solution

The solution in `bugSolution.js` utilizes a `try...catch` block within an `async` function to handle potential errors. This approach ensures that even if the asynchronous operation fails, the server remains operational, and an appropriate error response is sent to the client.