import { apiConnector } from "../apiConnector";
import { booking } from "../apis"; // import booking here

export const createBookingAPI = async (payload, token) => {
  return apiConnector(
    "POST",
    booking.CREATE_BOOKING_API,
    payload,
    {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    }
  );
};
