import SignIn from '@/pages/SignIn';

import Home from '@/pages/Home';
import Dashboard from '@/pages/Dashboard';

export default [{
  path: '/',
  component: SignIn,
}, {
  path: '/home',
  component: Home,
  redirect: '/dashboard',
  children: [{
    path: '/dashboard',
    component: Dashboard,
  }],
}];
