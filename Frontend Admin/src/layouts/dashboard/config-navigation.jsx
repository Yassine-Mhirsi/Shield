// import { useNavigate } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';

import SvgColor from 'src/components/svg-color';
// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [

  {
    title: 'Dashboard',
    path: '/',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Users',
    path: '/user',
    icon: icon('ic_user'),
  },
  {
    title: 'Products',
    path: '/products',
    icon: icon('ic_cart'),
  },
  {
    title: 'Requests',
    path: '/requests',
    icon: icon('ic_request'),
  },
  {
    title: 'Shops',
    path: '/shop',
    icon: icon('ic_shop'),
  },
  {
    title: 'Insurances',
    path: '/insurance',
    icon: icon('ic_insurance'),
  },
  {
    title: 'Repair Shops',
    path: '/repairshop',
    icon: icon('ic_repair'),
  },
  // {
  //   title: 'logout',
  //   path: '/login',
  //   icon: icon('ic_lock'),
  // },
  // {
  //   title: 'Not found',
  //   path: '/404',
  //   icon: icon('ic_disabled'),
  // },
];

// eslint-disable-next-line react-hooks/rules-of-hooks
// const navigate = useNavigate();
// const logoutHandler = () => {
//   localStorage.setItem('121211', 0);


//   navigate('/login');
// };

// const logoutHandler = () => {
//   // Clear localStorage
//   localStorage.setItem('121211', 0);

//   // eslint-disable-next-line react-hooks/rules-of-hooks
//   const history = useHistory();
//   history.push('/login');
// };

export default navConfig;
