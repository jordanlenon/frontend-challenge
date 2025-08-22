import axios from 'axios';

export const useHttp = () => {
  /**
   * Create axios instance
   */
  const axiosInstance = axios.create({
    headers: {
      'Content-Type': 'application/json',
    },
    timeout: 30000,
  });

  /**
   * Handle error messages
   * @param {Object} error - Axios error object
   * @returns {string} - Error message
   */
  const handleErrorMessages = (error) => {
    if (error.code === 'ERR_NETWORK' || error.message?.includes('CORS')) {
      console.log('Erro de CORS: Verifique se a API está acessível e se o CORS está configurado corretamente.')
      return 'Ocorreu um erro inesperado. Por favor, tente novamente mais tarde.'
    }

    if (error?.response?.status === 401) {
      return 'Sessão expirada, faça login novamente.'
    }

    if (error.response?.data) {
      const { message, detail } = error.response.data;

      if (typeof message === 'string' && typeof detail === 'string') {
        return `${message} - ${detail}`;
      } else {
        return 'Ocorreu um erro inesperado';
      }
    }

    return 'Ocorreu um erro inesperado';
  }

  /**
   * Check if the server returned an error
   * @param {number} status - HTTP status code
   * @returns {string} - Error message
   */
  const checkServerError = (status) => {
    if (status >= 500) {
      return 'Erro interno do servidor. Tente novamente mais tarde.'
    }
  }

  /**
   * Setup axios interceptors
   */
  const setupInterceptors = () => {
    axiosInstance.interceptors.request.use((config) => {
      if (!config.url?.includes('http')) {
        config.url = `/api${config.url}`;
      }

      config.headers = {
        ...config.headers
      };

      return config;
    }, (error) => {
      return Promise.reject(error);
    });

    axiosInstance.interceptors.response.use(
      (response) => {
        const customResponse = response;
        customResponse.ok = response.status >= 200 && response.status < 300;

        if (response.data) {
          customResponse.body = response.data;
        } else if (!response.data && customResponse.body) {
          response.data = customResponse.body;
        }

        return customResponse;
      },
      async (error) => {
        return Promise.reject({ ...error, message: handleErrorMessages(error) });
      }
    );
  }

  /**
   * Get request
   * @param {string} resource - Resource URL
   * @param {Object} config - Axios config
   * @returns {Promise} - Axios response
   */
  const get = (resource, config = {}) => {
    return axiosInstance.get(resource, {
      ...config,
      validateStatus: (status) => {
        checkServerError(status)
        return (status < 300);
      }
    });
  }

  /**
   * Post request
   * @param {string} resource - Resource URL
   * @param {Object} data - Request data
   * @param {Object} config - Axios config
   * @returns {Promise} - Axios response
   */
  const post = (resource, data, config = {}) => {
    return axiosInstance.post(resource, data, {
      ...config,
      validateStatus: (status) => {
        checkServerError(status)
        return (status < 300);
      }
    });
  }

  /**
   * Put request
   * @param {string} resource - Resource URL
   * @param {Object} data - Request data
   * @param {Object} config - Axios config
   * @returns {Promise} - Axios response
   */
  const put = (resource, data, config = {}) => {
    return axiosInstance.put(resource, data, {
      ...config,
      validateStatus: (status) => {
        checkServerError(status)
        return (status < 300);
      }
    });
  }

  /**
   * Patch request
   * @param {string} resource - Resource URL
   * @param {Object} data - Request data
   * @param {Object} config - Axios config
   * @returns {Promise} - Axios response
   */
  const patch = (resource, data, config = {}) => {
    return axiosInstance.patch(resource, data, {
      ...config,
      validateStatus: (status) => {
        checkServerError(status)
        return (status < 300);
      }
    });
  }

  /**
   * Delete request
   * @param {string} resource - Resource URL
   * @param {Object} config - Axios config
   * @returns {Promise} - Axios response
   */
  const remove = (resource, config = {}) => {
    return axiosInstance.delete(resource, {
      ...config,
      validateStatus: (status) => {
        checkServerError(status)
        return (status < 300);
      }
    });
  }

  setupInterceptors();

  return {
    get,
    post,
    put,
    patch,
    remove
  }
}