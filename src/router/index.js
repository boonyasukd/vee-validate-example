import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/components/Login';
// import DoubleLogin from '@/components/DoubleLogin';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'main',
            component: Login,
        },
    ],
});
