import axios from 'axios';

const TestFetchUseCors_78 = async () => {
  const response = await fetch('http://localhost:5000');
  const data1 = await response.json();
  console.log('fetch data1', data1);

  const data2 = await axios.get('http://localhost:5000');
  console.log('axios data2', data2.data);

  const currentUser = {
    name: '鄭芷琳5',
    email: 'li201217n8@gmail.com',
    password: 'secret7',
  };

  try {
    const { data } = await axios.post(
      'http://localhost:5000/api/v1/auth_78/register_78',
      currentUser
    );
    console.log('register data', data);
  } catch (err) {
    console.log(err);
  }
};

export default TestFetchUseCors_78;
