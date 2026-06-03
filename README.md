# amazon-connect-lex-chatbot
Amazon Connect and Amazon Lex integration for customer self-service automation.

# Amazon Connect Lex Chatbot

This project demonstrates how Amazon Lex can be integrated with Amazon Connect to automate customer interactions.

## Services Used

- Amazon Connect
- Amazon Lex
- AWS Lambda
- Node.js
- CloudWatch

## Flow

Customer Call
→ Amazon Connect
→ Amazon Lex Bot
→ Lambda Function
→ Response to Customer
→ Agent Transfer (if required)

## Use Case

The chatbot handles common queries such as account status, service requests, and basic FAQs. If the bot cannot resolve the query, the call is transferred to a live agent.
