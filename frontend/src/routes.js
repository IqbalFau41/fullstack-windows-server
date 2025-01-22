import React from 'react'

// Dashboard
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))

// Cikarang Plant
const AllCikarang = React.lazy(() => import('./views/cikarang/allcikarang/AllCikarang.js'))
const Algt = React.lazy(() => import('./views/cikarang/algt/Algt'))
const Balancer = React.lazy(() => import('./views/cikarang/balancer/Balancer'))
const Cashting = React.lazy(() => import('./views/cikarang/cashting/Cashting'))
const Finishing = React.lazy(() => import('./views/cikarang/finishing/Finishing'))
const Fas = React.lazy(() => import('./views/cikarang/fas/Fas'))
const Forging = React.lazy(() => import('./views/cikarang/forging/Forging.js'))
const Gss = React.lazy(() => import('./views/cikarang/gss/Gss'))
const Ht = React.lazy(() => import('./views/cikarang/ht/Ht'))
const Jsl = React.lazy(() => import('./views/cikarang/jsl/Jsl'))
const Mgs = React.lazy(() => import('./views/cikarang/mgs/Mgs'))
const Prhc = React.lazy(() => import('./views/cikarang/prhc/Prhc.js'))
const ShaftTransmision = React.lazy(
  () => import('./views/cikarang/shafttransmision/ShaftTransmision.js'),
)
const Ssm = React.lazy(() => import('./views/cikarang/ssm/Ssm.js'))

// Karawang Plant
const AllKarawang = React.lazy(() => import('./views/karawang/allkarawang/AllKarawang.js'))
const Sc_Camshaft = React.lazy(() => import('./views/karawang/sc_camshaft/Sc_Camshaft.js'))
const Transmisi_Cam_Fin_Assy = React.lazy(
  () => import('./views/karawang/transmisi_cam_fin_assy/Transmisi_Cam_Fin_Assy.js'),
)
const Sc_Finishing_Assy_M_Cvt = React.lazy(
  () => import('./views/karawang/sc_finishing_assy_m_cvt/Sc_Finishing_Assy_M_Cvt.js'),
)
const Fc_Forging = React.lazy(() => import('./views/karawang/sc_forging/Fc_Forging.js'))
const Sc_Mach_M_Cvt_Edps = React.lazy(
  () => import('./views/karawang/sc_mach_m_cvt_edps/Sc_Mach_M_Cvt_Edps.js'),
)
const Sc_Machining_4R = React.lazy(
  () => import('./views/karawang/sc_machining_4r/Sc_Machining_4R.js'),
)

// Tool Control
const Tool_Control = React.lazy(() => import('./views/tool_control/Tool_Control.js'))

// Kanagata
const Kanagata = React.lazy(() => import('./views/kanagata/Kanagata.js'))

// Maintenance
const FormControl = React.lazy(() => import('./views/maintenance/form-control/FormControl'))
const Select = React.lazy(() => import('./views/maintenance/select/Select'))

// Timeline Project
const Charts = React.lazy(() => import('./views/charts/Charts'))

// MachineDetail
const MachineDetail = React.lazy(() => import('./views/cikarang/machineDetail/MachineDetail.js'))

const routes = [
  // Dashboard
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  //Cikarang
  { path: '/cikarang/allcikarang', name: 'AllCikarang', element: AllCikarang },
  { path: '/cikarang/algt', name: 'Algt', element: Algt },
  { path: '/cikarang/balancer', name: 'Balancer', element: Balancer },
  { path: '/cikarang/cashting', name: 'Cashting', element: Cashting },
  { path: '/cikarang/finishing', name: 'Finishing', element: Finishing },
  { path: '/cikarang/fas', name: 'Fas', element: Fas },
  { path: '/cikarang/forging', name: 'Forging', element: Forging },
  { path: '/cikarang/gss', name: 'Gss', element: Gss },
  { path: '/cikarang/ht', name: 'Ht', element: Ht },
  { path: '/cikarang/jsl', name: 'Jsl', element: Jsl },
  { path: '/cikarang/mgs', name: 'Mgs', element: Mgs },
  { path: '/cikarang/prhc', name: 'Prhc', element: Prhc },
  { path: '/cikarang/shafttransmision', name: 'ShaftTransmision', element: ShaftTransmision },
  { path: '/cikarang/ssm', name: 'Ssm', element: Ssm },
  //Karawang
  { path: '/karawang/allkarawang', name: 'AllKarawang', element: AllKarawang },
  { path: '/karawang/sc_camshaft', name: 'Sc_Camshaft', element: Sc_Camshaft },
  {
    path: '/karawang/transmisi_cam_fin_assy',
    name: 'Transmisi_Cam_Fin_Assy',
    element: Transmisi_Cam_Fin_Assy,
  },
  {
    path: '/karawang/sc_finishing_assy_m_cvt',
    name: 'Sc_Finishing_Assy_M_Cvt',
    element: Sc_Finishing_Assy_M_Cvt,
  },
  { path: '/karawang/sc_forging', name: 'Fc_Forging', element: Fc_Forging },
  { path: '/karawang/sc_mach_m_cvt_edps', name: 'Sc_Mach_M_Cvt_Edps', element: Sc_Mach_M_Cvt_Edps },
  { path: '/karawang/sc_machining_4r', name: 'Sc_Machining_4R', element: Sc_Machining_4R },
  //Tool Control
  { path: '/tool_control', name: 'Tool_Control', element: Tool_Control },
  //Kanagata
  { path: '/kanagata', name: 'Kanagata', element: Kanagata },
  //Manufakturing Eng
  { path: '/maintenance', name: 'Maintenance', element: FormControl, exact: true },
  { path: '/maintenance/form-control', name: 'Form Control', element: FormControl },
  { path: '/maintenance/select', name: 'Select', element: Select },

  //Timeline Project
  { path: '/charts', name: 'Charts', element: Charts },

  //Detail Machine
  { path: '/cikarang/machine/:name', name: 'MachineDetail', element: MachineDetail },
]

export default routes
