// const { default: mongoose } = require("mongoose")

// module.exports = {
//     multipleMongooseToObject: (mongooses) => {
//         return mongooses.map(mongoose => mongoose.toObject())
//     },
//     mongooseToObject: (mongoose) => {
//         return mongoose ? mongoose.toObject() : mongoose
//     },
//     formatDate: (date) => {
//         const day = date.getDate();
//         const month = date.getMonth() + 1;
//         const year = date.getFullYear();
//         const hours = date.getHours();
//         const minutes = date.getMinutes();
//         const seconds = date.getSeconds();
//         return `${hours}:${minutes}:${seconds} - ${day}/${month}/${year}`;
//     },
//     pageLeft(page){
//         const distance = 5;
//         if(page>1 && page <6) return 1;
//         else if(page > 3) return page - distance;
//         else return 0;
//     },
//     pageRight(page){
//         const distance = 5;
//         return page + distance;
//     },
//     sortTable(field ,page, sort){
//         const icons = {
//             default : 'fa-solid fa-sort',
//             asc : 'fa-solid fa-sort-down',
//             desc : 'fa-solid fa-sort-up'
//         }

//         const orders = {
//             default : 'desc',
//             desc : 'asc',
//             asc : 'desc'
//         }

//         const sortType = field === sort.column ? sort.order: 'default';
//         const icon =  icons[sortType];
//         const order = orders[sortType];

//         return `<a href="?_sort&page=${page}&column=${field}&order=${order}">
//                     <i class="${icon}"></i>
//                 </a>`;
//     }
// }
