import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getServicesByFilterAPI,
  getServiceByIdAPI,
  createServiceAPI,
  updateServiceAPI,
  deleteServiceAPI,
} from "../api/servicesAPI";


// Fetch all services (by filter)
export const fetchServices = createAsyncThunk(
  "service/fetchServices",
  async (filters = {}, { rejectWithValue }) => {
    try {
      const data = await getServicesByFilterAPI(filters);
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || error.message || "Failed to fetch services"
      );
    }
  }
);

// Fetch single service by ID
export const fetchServiceById = createAsyncThunk(
  "service/fetchById",
  async (serviceId, { rejectWithValue }) => {
    try {
      const data = await getServiceByIdAPI(serviceId);
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || error.message || "Failed to fetch service"
      );
    }
  }
);

// Create new service
export const createService = createAsyncThunk(
  "service/create",
  async (serviceData) => {
    return await createServiceAPI(serviceData);
  }
);

// Update service
export const updateService = createAsyncThunk(
  "service/update",
  async ({ serviceId, updateData }) => {
    return await updateServiceAPI({ serviceId, updateData });
  }
);

// Delete service
export const deleteService = createAsyncThunk(
  "service/delete",
  async ({ serviceId, indexes }) => {
    return await deleteServiceAPI({ serviceId, indexes });
  }
);
