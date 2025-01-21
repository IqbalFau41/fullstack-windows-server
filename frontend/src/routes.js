import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))


// Tool
const Accordion = React.lazy(() => import('./views/tool/accordion/Accordion'))
const Breadcrumbs = React.lazy(() => import('./views/tool/breadcrumbs/Breadcrumbs'))
const Cards = React.lazy(() => import('./views/tool/cards/Cards'))
const Carousels = React.lazy(() => import('./views/tool/carousels/Carousels'))
const Collapses = React.lazy(() => import('./views/tool/collapses/Collapses'))
const ListGroups = React.lazy(() => import('./views/tool/list-groups/ListGroups'))
const Navs = React.lazy(() => import('./views/tool/navs/Navs'))
const Paginations = React.lazy(() => import('./views/tool/paginations/Paginations'))
const Placeholders = React.lazy(() => import('./views/tool/placeholders/Placeholders'))
const Popovers = React.lazy(() => import('./views/tool/popovers/Popovers'))
const Progress = React.lazy(() => import('./views/tool/progress/Progress'))
const Spinners = React.lazy(() => import('./views/tool/spinners/Spinners'))
const Tabs = React.lazy(() => import('./views/tool/tabs/Tabs'))
const Tables = React.lazy(() => import('./views/tool/tables/Tables'))
const Tooltips = React.lazy(() => import('./views/tool/tooltips/Tooltips'))

// Buttons
const Buttons = React.lazy(() => import('./views/buttons/buttons/Buttons'))
const ButtonGroups = React.lazy(() => import('./views/buttons/button-groups/ButtonGroups'))
const Dropdowns = React.lazy(() => import('./views/buttons/dropdowns/Dropdowns'))
const Tool_Control = React.lazy(() => import('./views/factory/tool_control/Tool_Control.js'))
const Kanagata = React.lazy(() => import('./views/factory/kanagata/Kanagata.js'))

// Cikarang
const AllCikarang = React.lazy(() => import('./views/cikarang/allcikarang/AllCikarang.js'))
const Algt = React.lazy(() => import('./views/cikarang/algt/Algt'))
const Balancer = React.lazy(() => import('./views/cikarang/balancer/Balancer'))
const Balancer1 = React.lazy(() => import('./views/cikarang/balancer1/Balancer1.js'))
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

// Karawang
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

//Maintenance
const ChecksRadios = React.lazy(() => import('./views/maintenance/checks-radios/ChecksRadios'))
const FloatingLabels = React.lazy(
  () => import('./views/maintenance/floating-labels/FloatingLabels'),
)
const FormControl = React.lazy(() => import('./views/maintenance/form-control/FormControl'))
const InputGroup = React.lazy(() => import('./views/maintenance/input-group/InputGroup'))
const Layout = React.lazy(() => import('./views/maintenance/layout/Layout'))
const Range = React.lazy(() => import('./views/maintenance/range/Range'))
const Select = React.lazy(() => import('./views/maintenance/select/Select'))
const Validation = React.lazy(() => import('./views/maintenance/validation/Validation'))

const Charts = React.lazy(() => import('./views/charts/Charts'))

// Icons
const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'))
const Flags = React.lazy(() => import('./views/icons/flags/Flags'))
const Brands = React.lazy(() => import('./views/icons/brands/Brands'))

// Notifications
const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'))
const Badges = React.lazy(() => import('./views/notifications/badges/Badges'))
const Modals = React.lazy(() => import('./views/notifications/modals/Modals'))
const Toasts = React.lazy(() => import('./views/notifications/toasts/Toasts'))

const Widgets = React.lazy(() => import('./views/widgets/Widgets'))

const MachineDetail = React.lazy(() => import('./views/cikarang/machineDetail/MachineDetail.js')) // Import komponen detail mesin

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },


  { path: '/tool', name: 'Tool', element: Cards, exact: true },
  { path: '/tool/accordion', name: 'Accordion', element: Accordion },
  { path: '/tool/breadcrumbs', name: 'Breadcrumbs', element: Breadcrumbs },
  { path: '/tool/cards', name: 'Cards', element: Cards },
  { path: '/tool/carousels', name: 'Carousel', element: Carousels },
  { path: '/tool/collapses', name: 'Collapse', element: Collapses },
  { path: '/tool/list-groups', name: 'List Groups', element: ListGroups },
  { path: '/tool/navs', name: 'Navs', element: Navs },
  { path: '/tool/paginations', name: 'Paginations', element: Paginations },
  { path: '/tool/placeholders', name: 'Placeholders', element: Placeholders },
  { path: '/tool/popovers', name: 'Popovers', element: Popovers },
  { path: '/tool/progress', name: 'Progress', element: Progress },
  { path: '/tool/spinners', name: 'Spinners', element: Spinners },
  { path: '/tool/tabs', name: 'Tabs', element: Tabs },
  { path: '/tool/tables', name: 'Tables', element: Tables },
  { path: '/tool/tooltips', name: 'Tooltips', element: Tooltips },
  { path: '/buttons', name: 'Buttons', element: Buttons, exact: true },
  { path: '/buttons/buttons', name: 'Buttons', element: Buttons },
  { path: '/buttons/dropdowns', name: 'Dropdowns', element: Dropdowns },
  { path: '/buttons/button-groups', name: 'Button Groups', element: ButtonGroups },

  { path: '/tool_control', name: 'Tool_Control', element: Tool_Control },
  { path: '/kanagata', name: 'Kanagata', element: Kanagata },
  { path: '/cikarang/allcikarang', name: 'AllCikarang', element: AllCikarang },
  { path: '/karawang/allkarawang', name: 'AllKarawang', element: AllKarawang },
  { path: '/cikarang', name: 'Cikarang', element: Balancer, exact: true },
  { path: '/cikarang/algt', name: 'Algt', element: Algt },
  { path: '/cikarang/balancer', name: 'Balancer', element: Balancer },
  { path: '/cikarang/balancer1', name: 'Balancer1', element: Balancer1 },
  { path: '/cikarang/cashting', name: 'Cashting', element: Cashting },
  { path: '/cikarang/finishing', name: 'Collapse', element: Finishing },
  { path: '/cikarang/fas', name: 'Fas', element: Fas },
  { path: '/cikarang/forging', name: 'Forging', element: Forging },
  { path: '/cikarang/gss', name: 'Gss', element: Gss },
  { path: '/cikarang/ht', name: 'Ht', element: Ht },
  { path: '/cikarang/jsl', name: 'Jsl', element: Jsl },
  { path: '/cikarang/mgs', name: 'Mgs', element: Mgs },
  { path: '/cikarang/prhc', name: 'Prhc', element: Prhc },
  { path: '/cikarang/shafttransmision', name: 'ShaftTransmision', element: ShaftTransmision },
  { path: '/cikarang/tables', name: 'Ssm', element: Ssm },

  //Karawang
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

  { path: '/charts', name: 'Charts', element: Charts },
  { path: '/maintenance', name: 'Maintenance', element: FormControl, exact: true },
  { path: '/maintenance/form-control', name: 'Form Control', element: FormControl },
  { path: '/maintenance/select', name: 'Select', element: Select },
  { path: '/maintenance/checks-radios', name: 'Checks & Radios', element: ChecksRadios },
  { path: '/maintenance/range', name: 'Range', element: Range },
  { path: '/maintenance/input-group', name: 'Input Group', element: InputGroup },
  { path: '/maintenance/floating-labels', name: 'Floating Labels', element: FloatingLabels },
  { path: '/maintenance/layout', name: 'Layout', element: Layout },
  { path: '/maintenance/validation', name: 'Validation', element: Validation },
  { path: '/icons', exact: true, name: 'Icons', element: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', element: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', element: Flags },
  { path: '/icons/brands', name: 'Brands', element: Brands },
  { path: '/notifications', name: 'Notifications', element: Alerts, exact: true },
  { path: '/notifications/alerts', name: 'Alerts', element: Alerts },
  { path: '/notifications/badges', name: 'Badges', element: Badges },
  { path: '/notifications/modals', name: 'Modals', element: Modals },
  { path: '/notifications/toasts', name: 'Toasts', element: Toasts },
  { path: '/widgets', name: 'Widgets', element: Widgets },

  { path: '/cikarang/machine/:name', name: 'MachineDetail', element: MachineDetail },
]

export default routes
