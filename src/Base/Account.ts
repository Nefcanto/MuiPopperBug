// todo: redirect user to "403" page if his role is not equivalent to role in .env file
// https://keycloak.discourse.group/t/what-is-the-workflow-of-refreshing-the-token-in-an-api-client-scenario/12634/2
// https://github.com/dasniko/keycloak-reactjs-demo

const Account = {
    provider: () => {
        return {}
    },
    token: () => {
        return ''
    },
    user: () => {
        return 'user'
    },
    userGuid: () => {
        return 'use guid'
    },
    createLoginUrl: () => {
        return 'NA'
    },
    updateToken: (callback) => {

    },
    createAccountUrl: () => {
        return 'NA'
    },
    createLogoutUrl: () => {
        return 'NA'
    },
    logout: () => {

    },
    role: () => {
        return 'User'
    },
    roles: () => {
        return 'User'
    },
    isSuperAdmin: () => {
        return true
    },
    checkLogin: (callback) => {
        callback()
    }
}

export default Account;
