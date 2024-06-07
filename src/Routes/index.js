import Home from '~/Pages/Home';
import Following from '~/Pages/Following';
import Profile from '~/Pages/Profile';
import Upload from '~/Pages/Upload';
import Search from '~/Pages/Search';
import { HeaderOnly } from '~/components/Layout';

const publicRoutes = [
    {
        path: '/',
        components: Home,
    },
    {
        path: '/following',
        components: Following,
    },
    {
        path: '/profile',
        components: Profile,
    },
    {
        path: '/upload',
        components: Upload,
        layout: HeaderOnly,
    },
    {
        path: '/search',
        components: Search,
        layout: null,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
