/* eslint-disable react/display-name */
import {
  Table, Space, Row, Col,
} from 'antd';
import { useEffect, useState } from 'react';
import { getConnects } from 'services/connects';
import Link from 'next/link';

const columns = [
  {
    title: 'First Name',
    dataIndex: 'first_name',
    key: 'first_name',
    render: (text: string, record: any) => (
      <Link href={`/connect/${record.connect_id}`}>
        {/* {JSON.stringify(record)} */}
        <a>{text}</a>
      </Link>
    ),
  },
  {
    title: 'Last Name',
    dataIndex: 'last_name',
    key: 'last_name',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Frequency',
    dataIndex: 'frequency',
    key: 'frequency',
  },
  {
    title: 'Action',
    key: 'action',
    render: (record: any) => (
      <Space size="middle">
        <Link href={`/connects/edit-connect/${record.connect_id}`}><a>Edit</a></Link>
        <a>Delete</a>
      </Space>
    ),
  },
];

const ConnectsComp: React.FC = () => {
  const [connects, setConnects] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      // setIsLoading(true);

      try {
        const { data } = await getConnects();
        console.log('DATA: ', data);
        if (data.errors) {
          console.log('SOMETHING WENT WRONG: ', data.errors);
        } else {
          setConnects(data.data.connects);
        }
      } catch (error) {
        console.log('SOMETHING WENT WRONG,', error);
        // setIsError(true);
      }

      // setIsLoading(false);
    };

    // Temporary hack to fix axios default header on nextjs direct call to server page
    setTimeout(() => fetchData(), 500);
    // fetchData();
  }, []);

  return (
    <Row>
      <Col md={{ span: 20, offset: 2 }}>
        <h3>My Connects</h3>
        <Table rowKey="connect_id" columns={columns} dataSource={connects} />
      </Col>
    </Row>
  );
};
export default ConnectsComp;
