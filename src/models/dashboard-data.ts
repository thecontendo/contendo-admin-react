import feedback from 'assets/svgs/feedback.svg';
import challenges from 'assets/svgs/challenges.svg';
import roles from 'assets/svgs/roles.svg';
import resolution from 'assets/svgs/resolution.svg';
import users from 'assets/svgs/users.svg';

// @ts-ignore
import {v4 as uuid} from 'uuid/dist';
import {IMenu} from "../interfaces/global/IDashboard";

export const dashboardMenu : Array<IMenu>=  [
        {
            id:uuid(),
            title: 'Users',
            description:'User management',
            icon: users
        },
        {
            id:uuid(),
            title: 'Roles',
            description:'Role Management',
            icon: roles
        },
        {
            id:uuid(),
            title: 'Challenges',
            description:'Manage challenges',
            icon: challenges
        },
        {
            id:uuid(),
            title: 'Resolution Center',
            description:'Most critical issues',
            icon: resolution
        },
        {
            id:uuid(),
            title: 'Feedback',
            description:'Feedback / Improvements',
            icon: feedback
        }
    ];

