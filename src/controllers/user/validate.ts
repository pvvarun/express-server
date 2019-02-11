const validaterObject = {
  create: {
    id: {
      custom: (value) => {
        console.log('Value', value);
        return true;
      },
      in: ['body'],
      required: true,
      string: true,
    },
    name: {
      errorMessage: 'Name is required',
      in: ['body'],
      regex: '[A-Z][a-zA-Z][^#&<>\"~;$^%{}?0-9]{1,20}$',
      required: true,
    },
  },
  delete: {
    id: {
      errorMessage: 'Id is required',
      in: ['params'],
      regex: '[A-Z][a-zA-Z][^#&<>\"~;$^%{}?0-9]{1,20}$',
      required: true,
    },
  },
  get: {
    limit: {
      default: 10,
      errorMessage: 'Limit is invalid',
      in: ['query'],
      number: true,
      required: false,
    },
    skip: {
      default: 0,
      errorMessage: 'Skip is invalid',
      in: ['query'],
      number: true,
      required: false,
    },
  },
  update: {
    dataToUpdate: {
      custom: (dataToUpdate) => {
        throw ({ error: 'Error Occured', statusCode: 200 });
      },
      in: ['body'],
      isObject: true,
      required: true,
    },
    id: {
      in: ['body'],
      required: true,
      string: true,
    },
    },
  };
export default validaterObject;
