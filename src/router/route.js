export default [
    {
        path: '/',  
        name: 'layout',
        redirect: '/index',
        component: () => import('../views/Layout.vue'),
        children: [
            {
                path: '/index',
                name: 'index',
                meta: {
                    title: '组件'
                },
                component: () => import('@/views/components/Index.vue'),
                children: [
                    {
                        path: 'button',
                        name: 'button',
                        meta: {
                            title: '按钮'
                        },
                        component: () => import('@/views/components/Button.vue')
                    },
                    {
                        path: 'input',
                        name: 'input',
                        meta: {
                            title: '输入框'
                        },
                        component: () => import('@/views/components/Input.vue')
                    }
                ]
            },
            {
                path: '/pageDesign',
                name: 'pageDesign',
                meta: {
                    title: '页面设计'
                },
                component: () => import('@/views/PageDesign.vue')
            },
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/Login.vue')
    }
]