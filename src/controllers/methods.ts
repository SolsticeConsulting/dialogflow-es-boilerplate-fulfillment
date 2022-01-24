import { WebhookClient } from "dialogflow-fulfillment"
import { AxiosResponse, AxiosError } from "axios"
import { BOT_CONTEXT, BOT_MESSAGE_CONSTANTS } from '../constants/df-response-constants'
import { getOrders } from '../services/http-service'
import { createContext, formatDummyData } from './../utils/utils';

export const onWelcomeIntent = (agent: WebhookClient) => {
    agent.add(BOT_MESSAGE_CONSTANTS.WELCOME_MESSAGE)
}

export const onGetOrderStatus = (agent: WebhookClient) => {
    const userId = 'test_dummy_id'
    agent.add("Retrieving your info for the object.");
    return new Promise<void>((resolve, reject) => {
        getOrders(userId).then((response: AxiosResponse) => {
            const {data} = response
            agent.add('Data retrieved -')
            const stringToOutput = formatDummyData(data)
            agent.add(stringToOutput)
            console.log(`returning - ${stringToOutput}`)
            resolve();
        }).catch((err: AxiosError) => {
            console.log(`
                ${err.code} error received. \n
                Message: ${err.message}. \n`)
            agent.add('Sorry - an error occured.')
            resolve()
        })
    })
}

export const onTestContextIntent = (agent: WebhookClient) => {
    agent.setContext(createContext(BOT_CONTEXT.SESSION, {test: 'testing testing, one two three'}, 50))
    const context = agent.getContext(BOT_CONTEXT.SESSION);
    if (!context) {
        return;
    }
    const parameters = (context.parameters as any);
    agent.add(parameters.test)
}
