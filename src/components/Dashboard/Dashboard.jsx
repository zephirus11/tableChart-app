import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchDataRequest,
  setFilter,
} from '../../redux/actions/dashboardAction';
import { Table, Button, Radio, Input, Form } from 'antd';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  LinearScale,
} from 'chart.js';

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  LinearScale
);

const Dashboard = () => {
  const dispatch = useDispatch();
  const { data, filter } = useSelector((state) => state);
  const [view, setView] = useState('table');

  useEffect(() => {
    dispatch(fetchDataRequest());
  }, [dispatch]);

  const handleFilterChange = (values) => {
    dispatch(setFilter(values));
  };

  const filteredData = data.filter(
    (item) =>
      (!filter.user || item.user === filter.user) &&
      (!filter.category || item.category === filter.category)
  );

  const tableColumns = [
    { title: 'User', dataIndex: 'user', key: 'user' },
    { title: 'Category', dataIndex: 'category', key: 'category' },
    // { title: 'Activity', dataIndex: 'activity', key: 'activity' },
  ];

  const pieData = {
    labels: [...new Set(filteredData.map((item) => item.category))],
    datasets: [
      {
        data: [...new Set(filteredData.map((item) => item.category))].map(
          (category) =>
            filteredData.filter((item) => item.category === category).length
        ),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  return (
    <div style={{ padding: '20px' }}>
      <Form layout="inline" onFinish={handleFilterChange}>
        <Form.Item name="user" label="User">
          <Input placeholder="Filter by user" />
        </Form.Item>
        <Form.Item name="category" label="Category">
          <Input placeholder="Filter by category" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Apply Filters
          </Button>
        </Form.Item>
      </Form>

      <Radio.Group
        onChange={(e) => setView(e.target.value)}
        value={view}
        style={{ margin: '20px 0' }}
      >
        <Radio.Button value="table">Table</Radio.Button>
        <Radio.Button value="pie">Pie Chart</Radio.Button>
      </Radio.Group>

      {view === 'table' ? (
        <Table dataSource={filteredData} columns={tableColumns} rowKey="id" />
      ) : (
        <Pie data={pieData} />
      )}
    </div>
  );
};

export default Dashboard;
