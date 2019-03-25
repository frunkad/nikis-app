export interface User {
    name: string;
    clubs: string[];
    password: string;
    username: string;
    email: string;
}

export const users = {
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
