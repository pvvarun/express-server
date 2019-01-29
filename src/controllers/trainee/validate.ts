const validaterObject = {
  create: {
    name: {
      required: true,
      regex: '[A-Z][a-zA-Z][^#&<>\"~;$^%{}?0-9]{1,20}$',
      in: ['body'],
      errorMessage: 'Name is required',
      },
  id: {
  required: true,
  string: true,
  in:['body'],
  custom: function(value) {
  console.log('Value', value);
  throw { error: 'Error Occured', statusCode : 200 }
  }
  }
  },
  delete: {
  id: {
  required: true,
  regex: '[A-Z][a-zA-Z][^#&<>\"~;$^%{}?0-9]{1,20}$',
  errorMessage: 'Id is required',
  in: ['params']
  }
  },
  get: {
  skip: {
  required: false,
  default: 0,
  number: true,
  in: ['query'],
  errorMessage: 'Skip is invalid',
  },
  limit: {
  required: false,
  default: 10,
  number: true,
  in: ['query'],
  errorMessage: 'Limit is invalid',
  }
  },
  update: {
      id: {
          required: true,
          string: true,
          in:['body']
      },
      dataToUpdate: {
          in: ['body'],
          required: true,
          isObject: true,
          custom: function(dataToUpdate) {},
      }
  }
}
export default validaterObject;
