/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/display-name */
import {
  Table, Space, Row, Col,
} from 'antd';
import { useEffect, useState } from 'react';
import { getConnects, deleteConnect } from 'services/connects';
import Link from 'next/link';
import { Connect } from 'types/connect';

const ConnectsComp: React.FC = () => {
  const [connects, setConnects] = useState<Connect[]>([]);
  // const [isLoading, setIsLoading] = useState(false);

  const handleDelete = async (connectId: string) => {
    console.log('HANDLE DELETE,', connectId);
    try {
      const { data } = await deleteConnect(connectId);
      console.log('DATA: ', data);
      if (data.errors) {
        console.log('SOMETHING WENT WRONG: ', data.errors);
      } else {
        const updatedConnects = connects.filter((item) => item.connect_id !== connectId);
        setConnects(updatedConnects);
        // setConnects(data.data.connects);
      }
    } catch (error) {
      console.log('SOMETHING WENT WRONG,', error);
      // setIsError(true);
    }
  };

  const columns = [
    {
      title: 'First Name',
      dataIndex: 'first_name',
      key: 'first_name',
      render: (text: string, record: any) => (
        <Link href={`/connect/${record.connect_id}`}>
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
          <a onClick={() => handleDelete(record.connect_id)}>Delete</a>
        </Space>
      ),
    },
  ];

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
    setTimeout(() => fetchData(), 100);
    // fetchData();
  }, []);

  return (
    <Row>
      <Col md={{ span: 20, offset: 2 }}>
        <h3>
          My Connects -
          {' '}
          <Link href="/connects/add-connect"><a>Add New</a></Link>
        </h3>
        <Table rowKey="connect_id" columns={columns} dataSource={connects} />
      </Col>
    </Row>
  );
};

export default ConnectsComp;
