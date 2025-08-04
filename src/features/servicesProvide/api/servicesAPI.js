import axiosInstance from "../../../services/axiosInstance";

// GET all services by filter
export const getServicesByFilterAPI = async (filterData = {}) => {
  const res = await axiosInstance.get("/admin/getServiceByFilter", filterData);
    console.log("API response:", res.data); 
  return res.data.data.serviceDetailModel; //  Fix: access actual array
};

// GET service by ID
export const getServiceByIdAPI = async (serviceId) => {
  const res = await axiosInstance.get(`/admin/getServiceById?serviceId=${serviceId}`);
  return res.data.data; //  This is fine (single object)
};


// CREATE a new service
export const createServiceAPI = async (serviceData) => {
  const res = await axiosInstance.post("/admin/createService", serviceData);
  return res.data.data;
};

// UPDATE service
export const updateServiceAPI = async ({ serviceId, updateData }) => {
  const res = await axiosInstance.put(`/admin/updateService?serviceId=${serviceId}`, updateData);
  return res.data.data;
};

// DELETE service
export const deleteServiceAPI = async ({ serviceId, indexes }) => {
  const res = await axiosInstance.delete(
    `/admin/deleteService?serviceId=${serviceId}&indexes=${JSON.stringify(indexes)}`
  );
  return res.data.data;
};
