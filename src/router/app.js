export default {
    routes: [{
        path: '/login',
        name: 'Login',
        component: resolve => require(['modules/Login.vue'], resolve),
        meta: {
            tokenRequired: false
        }
    },
    {
        path: '/register',
        name: 'Register',
        component: resolve => require(['modules/Register.vue'], resolve),
        meta: {
            tokenRequired: false
        }
    }, {
        path: '/home',
        name: 'Home',
        component: resolve => require(['modules/Home.vue'], resolve),
        meta: {
            tokenRequired: true
        }
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: resolve => require(['modules/Dashboard.vue'], resolve),
        meta: {
            tokenRequired: true
        },

    }]
}
