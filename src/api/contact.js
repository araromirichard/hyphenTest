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
    //TODO: Check if these are the correct endpointsfor customers

    // getAllCustomers(orgId) {
    //     return api().get(`organizations/${orgId}/customers`, {
    //         headers: {
    //             Authorization: "Bearer " + localStorage.getItem("token"),
    //         },
    //     });
    // },

    // getCustomerById(customerId) {
    //     return api().get(`vendors/${customerId}`, {
    //         headers: {
    //             Authorization: "Bearer " + localStorage.getItem("token"),
    //         },
    //     });
    // },
    // updateCustomerById(customerId, payload) {
    //     return api().put(`vendors/${customerId}`, payload, {
    //         headers: {
    //             Authorization: "Bearer " + localStorage.getItem("token"),
    //         },
    //     });
};