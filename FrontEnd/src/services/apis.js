// const BASE_URL = import.meta.env.VITE_BASE_URL;
const BASE_URL =  "http://localhost:9000/api";

export const employee = {
  LOGIN_API: `${BASE_URL}/employees/login`,
  CREATE_EMPLOYEE_API: `${BASE_URL}/employees/createEmployee`,
};

export const customer = {
  CREATE_CUSTOMER_API: `${BASE_URL}/customers`,
  GET_CUSTOMER_BY_EMAIL: `${BASE_URL}/customers`, // we'll append /:email dynamically
}

export const booking = {
  CREATE_BOOKING_API: `${BASE_URL}/bookings`,
}