import axios from 'axios';

const API_URL = 'http://52.168.1.54:8080/api/v1/userActivities';

export const fetchUserActivities = async () => {
  try {
    const response = await axios.get(
      'http://52.168.1.54:8080/api/v1/userActivities'
    );
    console.log('API Response:', response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
