// import axiosInstance from "../../../services/axiosInstance";

// // GET all services by filter
// export const getServicesByFilterAPI = async (filterData = {}) => {
//   const res = await axiosInstance.get("/admin/getServiceByFilter", filterData);
//     console.log("API response:", res.data);
//   return res.data.data.serviceDetailModel; //  Fix: access actual array
// };

// // GET service by ID
// export const getServiceByIdAPI = async (serviceId) => {
//   const res = await axiosInstance.get(`/admin/getServiceById?serviceId=${serviceId}`);
//   return res.data.data; //  This is fine (single object)
// };

// // CREATE a new service
// export const createServiceAPI = async (serviceData) => {
//   const res = await axiosInstance.post("/admin/createService", serviceData);
//   return res.data.data;
// };

// // UPDATE service
// export const updateServiceAPI = async ({ serviceId, updateData }) => {
//   const res = await axiosInstance.put(`/admin/updateService?serviceId=${serviceId}`, updateData);
//   return res.data.data;
// };

// // DELETE service
// export const deleteServiceAPI = async ({ serviceId, indexes }) => {
//   const res = await axiosInstance.delete(
//     `/admin/deleteService?serviceId=${serviceId}&indexes=${JSON.stringify(indexes)}`
//   );
//   return res.data.data;
// };


//--------------------------------------------------------------------------------------------------

import axiosInstance from "../../../services/axiosInstance";

// GET all services by filter
export const getServicesByFilterAPI = async (filterData = {}) => {
  const res = await axiosInstance.get("/admin/getServiceDetailByFilter", {
    params: filterData,
  });
  console.log("API response:", res.data);
  return res.data.data; // Fixed: return the array of services
};

// GET service by ID
export const getServiceByIdAPI = async (serviceDetailId) => {
  const res = await axiosInstance.get(
    `/admin/getServiceDetailById?serviceDetailId=${serviceDetailId}`
  );
  return res.data.data;
};

// CREATE a new service (handle form-data)
export const createServiceAPI = async (serviceData) => {
  const formData = new FormData();
  Object.keys(serviceData).forEach((key) => {
    if (key === "banners" || key === "image" || key === "video") {
      if (Array.isArray(serviceData[key])) {
        serviceData[key].forEach((file, index) => {
          formData.append(`${key}[${index}]`, file);
        });
      } else if (serviceData[key]) {
        formData.append(key, serviceData[key]);
      }
    } else {
      formData.append(key, serviceData[key]);
    }
  });
  const res = await axiosInstance.post("/admin/createServiceDetail", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return res.data.data;
};

// UPDATE service (handle form-data and additional fields)
export const updateServiceAPI = async ({ serviceDetailId, updateData }) => {
  const formData = new FormData();
  formData.append("serviceDetailId", serviceDetailId);
  if (updateData.bannerIndexes)
    formData.append("bannerIndexes", JSON.stringify(updateData.bannerIndexes));
  if (updateData.imageIndexes)
    formData.append("imageIndexes", JSON.stringify(updateData.imageIndexes));
  Object.keys(updateData).forEach((key) => {
    if (
      key !== "bannerIndexes" &&
      key !== "imageIndexes" &&
      key !== "serviceDetailId"
    ) {
      if (key === "banners" || key === "image" || key === "video") {
        if (Array.isArray(updateData[key])) {
          updateData[key].forEach((file, index) => {
            formData.append(`${key}[${index}]`, file);
          });
        } else if (updateData[key]) {
          formData.append(key, updateData[key]);
        }
      } else {
        formData.append(key, updateData[key]);
      }
    }
  });
  const res = await axiosInstance.put("/admin/updateServiceDetail", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return res.data.data;
};

// DELETE service
export const deleteServiceAPI = async ({ serviceDetailId, indexes }) => {
  const res = await axiosInstance.delete(
    `/admin/deleteServiceDetail?serviceDetailId=${serviceDetailId}&indexes=${JSON.stringify(
      indexes
    )}`
  );
  return res.data.data;
};
