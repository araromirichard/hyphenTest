import api from "./Api";
export default {
    getAllVendors(orgId) {
        return api().get(`organizations/${orgId}/vendors`, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        });
    },

    getVendorById(vendorId) {
        return api().get(`vendors/${vendorId}`, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        });
    },
    updateVendorById(vendorId, payload) {
        return api().put(`vendors/${vendorId}`, payload, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        });
    },


};