# node-sse

A repository to test out the server side events in Node.js. Server Side Events (SSE) is a method to stream data to the client from the server.

## How to run ?

- Start the server
- Visit http://localhost:8080/stream/{streamId}
- Open the inspect console

- Type :
- let sse = new EventSource("http://localhost:8080/stream/23");
- sse.onmessage = console.log

- The server will now start streaming the message to the client side

## Working

- Client first sends a GET text/event-stream request to the server.
- Now the server knows it has to establish a connection with that client and then keep on sending the data to it
- The server then sends chunks of data back to the clinet one by one

## SSE use cases

- Live Feed
- Showing client pogress
- Logging

## Pros

- Lightweight
- HTTP & HTTP/2 compatible
- Firewall friendly (standard)

## Cons

- Proxying in tricky
- L7 L/B challenging (timeouts)
- Stateful - Better to build in a stateless manner because if we send the request to another server and the states gets reset, there can be problems
- Difficult to horizontally scale ( since we are connected to a single server )
