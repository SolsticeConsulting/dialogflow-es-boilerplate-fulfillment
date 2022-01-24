import { Router } from 'express'
import { WebhookClient } from 'dialogflow-fulfillment'
import * as methods from '../controllers/methods';

const dfRequestMapper = (request: Request, response: Response) => {
    const agent: WebhookClient = new WebhookClient({ request, response });
    const intentMap = new Map([
        ['Default Welcome Intent', () => methods.onWelcomeIntent(agent)],
        ['orders.get-order-status', () => methods.onGetOrderStatus(agent)],
        ['test.context', () => methods.onTestContextIntent(agent)]
    ]);
    agent.handleRequest(intentMap);
}

export const setFulfillmentRoutes = (app: Router) => {
    app.post('/fulfillment', dfRequestMapper as any)
}