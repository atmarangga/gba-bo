import { _SESSION_EXPIRED, _TOKEN } from "../constants";
import endpoints from "./endpoints";


export default class ServiceClass {
    prefixUrl: string = endpoints.prefixUrl;
    protected async publicService(myUrl: string = '', method = "POST", body = {}) {
        try {
            const bodyData = JSON.stringify(body);
            const result = await fetch(`${this.prefixUrl}${myUrl}`, {
                method,
                mode: 'cors',
                body: bodyData,
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': "*"
                }
            });
            return await result.json();
        } catch (err) {
            console.log('err : ', err);
            return err;
        }
    }

    protected async callService(myUrl: string = '', method = "POST", body = {}) {
        const tokenJwt = localStorage.getItem(_TOKEN);
        try {
            if (!tokenJwt) throw _SESSION_EXPIRED;
            const bodyData = JSON.stringify(body);
            const result = await fetch(`${this.prefixUrl}${myUrl}`, {
                method,
                body: bodyData,
                headers: {
                    'Content-Type': 'application/json',
                    'token': tokenJwt,
                }
            })
            return result.json;
        } catch (err) {
            console.log('err : ', err);
            return err;
        }
    }
}