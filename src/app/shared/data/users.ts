export interface User {
    name: string;
    clubs: string[];
    password: string;
    username: string;
    email: string;
}
let ux;
if (localStorage.getItem('users')) {
    ux = JSON.parse(localStorage.getItem('users'));
} else {
    ux = {
        'nikhil': <User>{
            name: 'Nikhil Saini',
            clubs: [
                'Creative (Design Club)',
                'CamCircle (Photography Club)'
            ],
            password: 'nikhil123',
            username: 'nikhil',
            email: 'nikis123@gmail.com'
        }
    };
}

export const users = ux;
