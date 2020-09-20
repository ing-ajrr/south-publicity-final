//Layouts
import LayoutWeb from "../layouts/LayoutWeb";

//pages
import Home from "../pages/Home";

import Error404 from "../pages/Error404";

const routes= [  
  {
    path: "/",
    component: LayoutWeb,
    exact: false,
    routes: [
      {
        path: "/",
        component: Home,
        exact: true
      },
      {
        component: Error404
      }
    ]
  },
  
]

export default routes;