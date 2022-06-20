import SignIn from '@/pages/SignIn';
import SignUp from '@/pages/SignUp';
import Home from '@/pages/Home';
import Dashboard from '@/pages/Dashboard';

export default [{
  path: '/',
  component: SignIn,
}, {
  path: '/signup',
  component: SignUp,
}, {
  path: '/home',
  component: Home,
  redirect: '/dashboard',
  children: [{
    path: '/dashboard',
    component: Dashboard,
  }],
}];
