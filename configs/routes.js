export default {
    home: {
        path: '/',
        method: 'get',
        page: 'home',
        title: 'Ylr - Refine Travel',
        handler: require('../components/Home')
    },
    about: {
        path: '/about',
        method: 'get',
        page: 'about',
        title: 'Ylr - About',
        handler: require('../components/About')
    },
    account: {
        path: '/account',
        method: 'get',
        page: 'account',
        title: 'Ylr - Account Page',
        handler: require('../components/account')
    },
    blog: {
        path: '/blog',
        method: 'get',
        page: 'account',
        title: 'Ylr - Blog',
        handler: require('../components/blog')
    }
};
