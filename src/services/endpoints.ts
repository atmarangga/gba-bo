export default {
    prefixUrl: 'http://167.71.194.152:8080',
    login: {
        login: '/login/admin'
    },
    masterCountry: {
        getAll: '/country/getAll',
        add: '/country/add',
        delete: '/country/delete',
        edit: '/country/update'
    },
    masterBranch: {
        getAll: '/branch/getAll',
        add: '/branch/add',
        edit: '/branch/edit',
        delete: '/branch/delete'
    },
    masterAddress: {
        getAll: '/address/getAll',
        add: '/address/add',
        edit: '/address/edit',
        delete: '/address/delete'
    },
    masterChurch: {
        getAll: '/church/getAll',
        add: '/church/add',
        edit: '/church/edit',
        delete: '/church/delete'
    },
    masterAdmin: {
        add: '/admin/add'
    },
    masterGroup: {
        getAll: '/groups',
        save: '/groups'
    },
    masterReadingPlan: {
        getAll: '/readingPlan',
        save: '/readingPlan',
        delete: '/readingPlan/'
    },
    masterUser: {
        getAll: '/userregister',
        activate: '/userregister'
    }

}