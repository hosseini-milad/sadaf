const menutrans ={
    title:{
        english:"SadafHa",
        persian:"سامانه پارک",
        icon:"fa-eercast",
        href:"https://qomstp.ir"
        
    },
    menu:[
        {
            english: "OverView",
            persian: "OverView",
            index:0,
            icon:"fa-dashboard",
            href:"#",
            children:[
            {
                english: "Dashboard",
                persian: "داشبورد",
                index:0,
                icon:"fa-dashboard",
                href:"/",
                url:""
            },
            {
                english: "reports",
                persian: "گزارشات",
                index:1,
                icon:"fa-bar-chart",
                href:"/data",
                url:"data"
            },
            {
                english: "new data",
                persian: "افزودن داده",
                index:1,
                icon:"fa-bar-chart",
                href:"/new-data",
                url:"new-data"
            }],
        },
        {
            english: "Request",
            persian: "تقاضای فناوری",
            index:0,
            icon:"fa-dashboard",
            href:"#",
            children:[
            {
                english: "Requests",
                persian: "لیست تقاضای فناوری",
                index:0,
                icon:"fa-dashboard",
                href:"/request",
                url:"request"
            },
            {
                english: "Request Mehvar",
                persian: "محور",
                index:0,
                icon:"fa-dashboard",
                href:"/mehvar",
                url:"mehvar"
            },
            {
                english: "Request Cat",
                persian: "دسته بندی تقاضا",
                index:0,
                icon:"fa-dashboard",
                href:"/req-cat",
                url:"req-cat"
            }
        ]},
        {
            english: "Clients",
            persian: "کاربران",
            index:0,
            icon:"fa-dashboard",
            href:"#",
            children:[
            {
                english: "Client Lists",
                persian: "لیست کاربران",
                index:0,
                icon:"fa-dashboard",
                href:"/clients",
                url:"clients"
            }
            ]},
        {
            english: "Company",
            persian: "شرکت ها",
            index:0,
            icon:"fa-dashboard",
            href:"#",
            children:[
            {
                english: "Company Lists",
                persian: "لیست شرکت ها",
                index:0,
                icon:"fa-dashboard",
                href:"/company",
                url:"company"
            },
            {
                english: "Category",
                persian: "دسته بندی ها",
                index:0,
                icon:"fa-dashboard",
                href:"/category",
                url:"category"
            },
            {
                english: "Unit Lists",
                persian: "لیست واحدها",
                index:0,
                icon:"fa-dashboard",
                href:"/unit",
                url:"unit"
            },
            {
                english: "Licence Lists",
                persian: "مجوزها",
                index:0,
                icon:"fa-dashboard",
                href:"/licence",
                url:"licence"
            }
            ]},
        {
            english: "Reserve",
            persian: "رزروها",
            index:0,
            icon:"fa-dashboard",
            href:"#",
            children:[
            {
                english: "CoWork Seat",
                persian: "صندلی های اشتراکی",
                index:0,
                icon:"fa-dashboard",
                href:"/cowork",
                url:"cowork"
            },
            {
                english: "Share Room",
                persian: "سالن جلسات",
                index:0,
                icon:"fa-dashboard",
                href:"/share-room",
                url:"share-room"
            },
            {
                english: "Transactions",
                persian: "تراکنش ها",
                index:0,
                icon:"fa-dashboard",
                href:"/transactions",
                url:"transactions"
            }
            ]}
            ],
        
    setting:[
        {
            english: "Access",
            persian: "دسترسی ها",
            index:0,
            icon:"fa-key",
            href:"/access",
            url:"access"
        },
        {       
            english: "User Management",
            persian: "مدیریت کاربران",
            index:0,
            icon:"fa-user",
            href:"/users",
            url:"users"
        },
        {
            english: "Documents",
            persian: "مستندات",
            index:1,
            icon:"fa-learn",
            href:"/documents/list",
            url:"documents"
        }
    ]
    }
    export default menutrans