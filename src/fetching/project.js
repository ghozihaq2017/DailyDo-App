import BASE_URL from '@/lib/baseUrl';
import { fetchWithToken } from '@/lib/fetchLib';

const getAllMyProject = async () => {
  try {
    const response = await fetchWithToken(`${BASE_URL}/projects`);
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

const getProjectById = async (id) => {
  try {
    const response = await fetchWithToken(`${BASE_URL}/projects/${id}`);
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

const addProject = async (title, description) => {
  try {
    const requestBody = {
      title,
      description
    };
    // console.log(productId, warehouseId, quantity);
    const response = await fetchWithToken(`${BASE_URL}/projects`, {
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
    console.error('Error create projects:', error.message);
    throw error;
  }
};

const editProject = async (id, title, description) => {
  try {
    const requestBody = {
      title,
      description
    };
    // console.log(productId, warehouseId, quantity);
    const response = await fetchWithToken(`${BASE_URL}/projects/${id}`, {
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

const deleteProjectById = async (id) => {
  try {
    const response = await fetchWithToken(`${BASE_URL}/projects/${id}`, {
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

export { getProjectById, getAllMyProject, addProject, editProject, deleteProjectById };
