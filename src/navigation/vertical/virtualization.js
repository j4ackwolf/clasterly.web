export default [
  {
    header: 'Virtualization',
  },
  {
    title: 'Instances',
    icon: 'ActivityIcon',
    children: [
      {
        title: 'VMs',
        route: 'apps-invoice-list',
        icon: 'MonitorIcon',
      },
      {
        title: 'Services',
        route: { name: 'apps-invoice-preview', params: { id: 4987 } },
        icon: 'PackageIcon',
      },
    ],
  },
  {
    title: 'Templates',
    icon: 'BookIcon',
    children: [
      {
        title: 'VMs',
        route: 'apps-invoice-list',
        icon: 'MonitorIcon',
      },
      {
        title: 'Services',
        route: { name: 'apps-invoice-preview', params: { id: 4987 } },
        icon: 'PackageIcon',
      },
    ],
  },
  {
    title: 'Storage',
    icon: 'DatabaseIcon',
    children: [
      {
        title: 'Datastores',
        route: 'apps-invoice-list',
        icon: 'HardDriveIcon',
      },
      {
        title: 'Images',
        route: 'apps-invoice-list',
        icon: 'DiscIcon',
      },
    ],
  },
  {
    title: 'Network',
    icon: 'GlobeIcon',
    children: [
      {
        title: 'Virtual Networks',
        route: 'apps-invoice-list',
        icon: 'GlobeIcon',
      },
      {
        title: 'Network Topology',
        route: 'apps-invoice-list',
        icon: 'Share2Icon',
      },
      {
        title: 'Security Groups',
        route: 'apps-invoice-list',
        icon: 'ShieldIcon',
      },
      {
        title: 'Routes',
        route: 'apps-invoice-list',
        icon: 'CropIcon',
      },
    ],
  },
  {
    title: 'Infrastructure',
    icon: 'LayersIcon',
    children: [
      {
        title: 'Clusters',
        route: 'apps-invoice-list',
        icon: 'TriangleIcon',
      },
      {
        title: 'Hosts',
        route: { name: 'apps-invoice-preview', params: { id: 4987 } },
        icon: 'ServerIcon',
      },
    ],
  },
  {
    title: 'System',
    icon: 'SettingsIcon',
    children: [
      {
        title: 'Users',
        route: 'apps-invoice-list',
        icon: 'UserIcon',
      },
      {
        title: 'Groups',
        route: 'apps-invoice-list',
        icon: 'UsersIcon',
      },
      {
        title: 'VDCs',
        route: 'apps-invoice-list',
        icon: 'LayersIcon',
      },
      {
        title: 'ACLs',
        route: 'apps-invoice-list',
        icon: 'KeyIcon',
      },
    ],
  },
]
