let routes = [
    {
        // path: '/',
        // name: 'layout',
        redirect: { name: 'index' },
        component: 'layout',
        children: [
            {
                // path: '/index',
                // name: 'index',
                component: 'index/index'
            },
            {
                component: 'shop/goods/list'
            }
        ]
    },
    {
        // path: '/login',
        // name: 'login',
        component: 'login/index'
    },
    {
        path: '*',
        redirect: { name: 'index' },
    }
]

//Get Route Info Fuc
let getRoutes = function () {
    creatRoute(routes);
    return routes
}

//auto generate routes
function creatRoute(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (!arr[i].component) return;

        let val = getValue(arr[i].component);

        arr[i].name = arr[i].name || val.replace(/\//g, '_');
        
        arr[i].path = arr[i].path || `/${val}`
        
        let componentFun = import(`../../views/${arr[i].component}.vue`);

        arr[i].component = () => componentFun;
        
        if (arr[i].children && arr[i].children.length > 0) {
            creatRoute(arr[i].children);
        }
    }
}

function getValue(str) {
    let index = str.lastIndexOf('/');
    
    let val = str.substring(index + 1, str.length);
    
    if (val === 'index') {
        // console.log(str.substring(index,-1));
        // console.log(str.substring(index,0));
        return str.substring(index, -1);
    }
    return str;
}

export default getRoutes();