import axios from 'axios';
import IForm from '../models/IForm';
import { getApiError } from '../utils/getApiError';

const PluginService = {
  createEntry: async (body: IForm) => {
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/create`,
        body
      );
      return data;
    } catch (err: any) {
      const message = getApiError(err);
      throw new Error(message);
    }
  },
};

export default PluginService;
