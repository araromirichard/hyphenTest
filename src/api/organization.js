import api from "./Api";

export default {
    create(organization) {
        return api().post("/organizations", organization, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        });

        // organization:{
        //     "orgname": "Mulaa 44 Ltd",  //required
        //     "members": [
        //       "9"
        //     ],
        //     "multitenant": false,
        //     "bank": [
        //       {
        //         "account_name": "Mulaa Analytics",
        //         "bank_name": "GTB",
        //         "routing_number": "",
        //         "account_type": "current",
        //         "account_number": "9030303033",
        //         "authid": ""
        //       }
        //     ],
        //     "company": {
        //       "company_name": "Mulaa Analytics",
        //       "registration_number": "293303033",
        //       "country": "Nigeria"
        //     },
        //     "office": [
        //       {
        //         "address": "18 cooper road ",
        //         "state": "Lagos",
        //         "city": "Ikoyi",
        //         "country": "Nigeria",
        //         "postcode": 102105
        //       }
        //     ],
        //     "leadership": [
        //       {
        //         "first_name": "Samson",
        //         "last_name": "Aligba",
        //         "percentage": "30",
        //         "email": "sa@mulaa.me",
        //         "phone": "08029735939",
        //         "position": "MD"
        //       }
        //     ]
        //   }
    },

    update(orgId, credentials) {
        return api().put("/organizations/" + orgId, credentials, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        });

        // credentials:{
        //     "orgname": "Mulaa 44 Ltd",
        //     "members": [
        //       "9"
        //     ],
        //     "multitenant": false,
        //     "bank": [
        //       {
        //         "account_name": "Mulaa Analytics",
        //         "bank_name": "GTB",
        //         "routing_number": "",
        //         "account_type": "current",
        //         "account_number": "9030303033",
        //         "authid": ""
        //       }
        //     ],
        //     "company": {
        //       "company_name": "Mulaa Analytics",
        //       "registration_number": "293303033",
        //       "country": "Nigeria"
        //     },
        //     "office": [
        //       {
        //         "address": "18 cooper road ",
        //         "state": "Lagos",
        //         "city": "Ikoyi",
        //         "country": "Nigeria",
        //         "postcode": 102105
        //       }
        //     ],
        //     "leadership": [
        //       {
        //         "first_name": "Samson",
        //         "last_name": "Aligba",
        //         "percentage": "30",
        //         "email": "sa@mulaa.me",
        //         "phone": "08029735939",
        //         "position": "MD"
        //       }
        //     ]
        //   }
    },

    get(organizationId) {
        return api().get("/organizations/" + organizationId, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        });
    },
    async getOrganizationToken(organizationId) {
        return await api().get(`/organizations/${organizationId}/token`, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        });
    },
    async uploadOrganCac(payload) {
        return await api().post(`/upload`, payload, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
                "Content-Type": "multipart/form-data",
            },
        });
    },
    async uploadIdCard(payload) {
        return await api().post(`/upload`, payload, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
                "Content-Type": "multipart/form-data",
            },
        });
    },
    async uploadOrganizationLogo(payload) {
        return await api().post(`/upload`, payload, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
                "Content-Type": "multipart/form-data",
            },
        });
    },

    addBankAccount(organizationId, bankCode) {
        return api().put("/organizations/" + organizationId + "/addBank", bankCode);
        //bankCode: {"code":"code_gtqXeDkGMQ9CvTYAgQRS"}
    },

    getBankAccounts(organizationId) {
        return api().get("/organizations/" + organizationId + "/bankAccounts");
    },
    inviteCoWorker(organizationId, payload) {
        return api().post(`organizations/${organizationId}/addmember`, payload, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        });
    },
    sendEmail(email) {
        return api().post("/organizations/email", email);
        //   email:{
        //     "to": "sa@mulaa.me",
        //     "sender": "mtn@process.finance",
        //     "subject": "This is the subject",
        //     "orgid": 12,
        //     "text": "The body text and message",
        //     "key": "key-here-id",
        //     "template": "template-id"
        // }
    },
};