import BASE_URL from '@/lib/baseUrl';
import { fetchWithToken } from '@/lib/fetchLib';

const getTaskById = async (id) => {
  try {
    const response = await fetchWithToken(`${BASE_URL}/tasks/${id}`);
    const responseJson = await response.json();
    const { status, message } = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }
    const { data } = responseJson;
    return data;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error fetching data:', error.message);
    throw error;
  }
};

const addTask = async (name, description, priority, dueDate, projectId) => {
  try {
    const requestBody = {
      name,
      description,
      priority,
      dueDate,
      projectId
    };
    // console.log(productId, warehouseId, quantity);
    const response = await fetchWithToken(`${BASE_URL}/tasks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    });
    const responseJson = await response.json();
    const { status, message } = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }
    const { data } = responseJson;
    return data;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error create tasks:', error.message);
    throw error;
  }
};

const editTask = async (id, name, description, priority, dueDate, projectId) => {
  try {
    const requestBody = {
      name,
      description,
      priority,
      dueDate,
      projectId
    };
    // console.log(productId, warehouseId, quantity);
    const response = await fetchWithToken(`${BASE_URL}/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    });
    const responseJson = await response.json();
    const { status, message } = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }
    const { data } = responseJson;
    return data;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error PUT data:', error.message);
    throw error;
  }
};

const deleteTaskById = async (id) => {
  try {
    const response = await fetchWithToken(`${BASE_URL}/tasks/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const responseJson = await response.json();
    const { status, message } = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }

    return responseJson;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error DELETE data:', error.message);
    throw error;
  }
};

export { getTaskById, addTask, editTask, deleteTaskById };
