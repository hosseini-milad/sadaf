const menutrans ={
    title:{
        english:"SadafHa",
        persian:"سامانه صدف ها",
        icon:"fa-eercast",
        href:"https://sadaf.ac.ir"
        
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
            },
            ]
        }
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
            english: "Filters",
            persian: "فیلترها",
            index:1,
            icon:"fa-key",
            href:"/filter",
            url:"filter"
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