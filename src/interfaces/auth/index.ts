import {AccountInfo, Configuration, PublicClientApplication} from '@azure/msal-browser';


export const msalConfig: Configuration = {
    auth: {
        clientId: process?.env['REACT_APP_MSAL_CLIENT_ID']?.toString() ?? '',
        redirectUri: process.env['REACT_APP_REDIRECT_URI'],
        authority: 'https://login.microsoftonline.com/aa1c840f-3a2f-4d3d-9f45-6ee9082ae513',
        knownAuthorities: ['login.live.com'],
        navigateToLoginRequestUrl: true,
        postLogoutRedirectUri: '/'
    },
    cache: {
        cacheLocation: 'localStorage', // This configures where your cache will be stored
        storeAuthStateInCookie: false // Set this to "true" if you are having issues on IE11 or Edge
    }
};
const loginRequest = {
    scopes: ['User.Read']
};
export const tokenRequest = {
    scopes: [
        'api://2e72619e-ff60-4354-95a5-ec864d56dc76/access_as_user','User.Read'
    ]
};

export const msalInstance = new PublicClientApplication(msalConfig);

export const MsalAuthInstance = () => {
    return msalInstance;
};

export const login = (instance: { loginRedirect: (arg0: { scopes: string[]; }) => void; }) => {
    instance.loginRedirect(loginRequest);
};

export const logout = (instance: { logoutRedirect: () => Promise<void>; }) => {
    instance.logoutRedirect().catch(e => {
        console.error(e);
    });
};

export const acquireToken = async () => {
    const account = msalInstance.getActiveAccount() as AccountInfo;
    return await msalInstance.acquireTokenSilent( {
        ...tokenRequest,
        account: account
    });
};
