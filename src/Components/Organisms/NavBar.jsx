import{useState}  from 'react'
import { AppstoreOutlined, MailOutlined, SettingOutlined ,FlagOutlined} from '@ant-design/icons';
import { Menu } from 'antd';

function NavBar() {
    const items = [
  {
    label: 'Countries',
    key: 'mail',
    icon: <FlagOutlined />,
  },
  {
    label: 'Navigation Two',
    key: 'app',
    icon: <AppstoreOutlined />,
    disabled: true,
  },
  {
    label: 'Navigation Three - Submenu',
    key: 'SubMenu',
    icon: <SettingOutlined />,
    children: [
      {
        type: 'group',
        label: 'Item 1',
        children: [
          { label: 'Option 1', key: 'setting:1' },
          { label: 'Option 2', key: 'setting:2' },
        ],
      },
      {
        type: 'group',
        label: 'Item 2',
        children: [
          { label: 'Option 3', key: 'setting:3' },
          { label: 'Option 4', key: 'setting:4' },
        ],
      },
    ],
  },
  {
    key: 'alipay',
    label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
        Navigation Four - Link
      </a>
    ),
  },
];

 const [current, setCurrent] = useState('mail');
 const onClick = e => {
    console.log('click ', e);
    setCurrent(e.key);
  };
    return (
        <>
        <div className=''>
 <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
        </div>
        </>
    )
}

export default NavBar
