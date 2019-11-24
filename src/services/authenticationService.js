const AuthenticationService = {
    saveToken: (token) => {
        let date = new Date();
        const days = 1;
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        document.cookie = `token=${token}; expires=${date.toUTCString}; path=/`;
    },

    getToken: () => {
        const token = 'token';
        if (document.cookie.length > 0) {
            let c_start = document.cookie.indexOf(token + '=');
            if (c_start !== -1) {
                c_start = c_start + token.length + 1;
                let c_end = document.cookie.indexOf(';', c_start);
                if (c_end === -1) {
                    c_end = document.cookie.length;
                }
                return unescape(document.cookie.substring(c_start, c_end));
            }
        }
        return '';
    },

    isAuthenticated: () => {
        console.log('AuthenticationService.getToken()', AuthenticationService.getToken());
        console.log('result', !(!AuthenticationService.getToken() || 0 === AuthenticationService.getToken().length));
        return !(!AuthenticationService.getToken() || 0 === AuthenticationService.getToken().length);
    },

    logout: () => {
        document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }
};

export default AuthenticationService;