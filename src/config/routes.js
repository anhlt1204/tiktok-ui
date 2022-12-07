import { search } from '~/apiServices/searchServices';

const routes = {
    home: '/',
    following: '/following',
    profile: '/@:nickname',
    upload: '/upload',
    search: '/search',
};

export default routes;
