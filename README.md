200	OK	Everything worked as expected.
400	Bad Request	The request was unacceptable, often due to missing a required parameter.
401	Unauthorized	No valid API key provided.
402	Request Failed	The parameters were valid but the request failed.
403	Forbidden	The API key doesn’t have permissions to perform the request.
404	Not Found	The requested resource doesn’t exist.
409	Conflict	The request conflicts with another request (perhaps due to using the same idempotent key).
424	External Dependency Failed	The request couldn’t be completed due to a failure in a dependency external to Stripe.
429	Too Many Requests	Too many requests hit the API too quickly. We recommend an exponential backoff of your requests.
500, 502, 503, 504#   c r e a t e - w e b - b a c k e n d  
 