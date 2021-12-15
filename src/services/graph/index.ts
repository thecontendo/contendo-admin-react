import { msalInstance, tokenRequest } from '../../interfaces/auth';
import {AccountInfo} from "@azure/msal-browser";

const graphConfig = {
    graphMeEndpoint: 'https://graph.microsoft.com/v1.0/me',
    graphMePhoto: 'https://graph.microsoft.com/v1.0/me/photo/$value',
    graphUsers: 'https://graph.microsoft.com/v1.0/users'
};

export const callMsGraphPhoto = async () => {
    try {
        const headers = new Headers();
        /* let token = localStorage.getItem('accessToken');
         const bearer = `Bearer ${token}`;*/

        const account = msalInstance.getActiveAccount() as AccountInfo;
        if (!account) {
            console.log('No account found');
        }

        const response = await msalInstance.acquireTokenSilent({
            ...tokenRequest,
            account: account
        });
        const bearer = `Bearer ${response.accessToken}`;

        headers.append('Authorization', bearer);
        headers.append('Content-Type', 'image/*');

        const options = {
            method: 'GET',
            headers: headers,
            responseType: 'arraybuffer'
        };

        return fetch(graphConfig.graphMePhoto, options)
            .then(response => response)
            .catch(error => console.log(error));
    } catch (e) {}
};

export const callMsGraph = async (type: any) => {
    const headers = new Headers();
    let token = localStorage.getItem('accessToken');
    const bearer = `Bearer ${token}`;

    headers.append('Authorization', bearer);

    const options = {
        method: 'GET',
        headers: headers
    };

    let config = graphConfig.graphMeEndpoint;
    // eslint-disable-next-line default-case
    switch (type) {
        case 'profile':
            config = graphConfig.graphMeEndpoint;
            break;
        case 'Users':
            config = graphConfig.graphUsers;
            break;
    }

    return fetch(config, options)
        .then(response => response.json())
        .catch(error => console.log(error));
};

/*import { dispatchServer } from '../api';

export const getUserList = () => {
    return dispatchServer('https://graph.microsoft.com/v1.0/users');
};*/
