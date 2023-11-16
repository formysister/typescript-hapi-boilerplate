import { Request, ResponseObject, ResponseToolkit } from '@hapi/hapi'
import { ResponsePayload } from '../../types'

class ResponseUtil {
    /**
     * 
     * @param request 
     * @param reply 
     * @param error 
     * @returns {Error}
     */
    static faileAction = async (request?: Request, reply?: ResponseToolkit, error?: Error) => {
        return error
    }

    /**
     * 
     * @param responsePayload 
     * @param reply 
     * @returns {ResponseObject}
     */
    static sendResponse = (responsePayload: ResponsePayload, reply: ResponseToolkit): ResponseObject => {
        if(responsePayload.code) {
            return reply.response(responsePayload).code(responsePayload.code)
        }
        else {
            return reply.response(responsePayload)
        }
    }

    /**
     * 
     * @param responsePayload 
     * @param reply 
     * @returns {ResponseObject}
     */
    static sendResponseWithCookie = (responsePayload: ResponsePayload, reply: ResponseToolkit): ResponseObject => {

        if(responsePayload.code) {
            return reply.response(responsePayload).code(responsePayload.code)
        }
        else {
            return reply.response(responsePayload)
        }
    }
}

export default ResponseUtil