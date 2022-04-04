import api from "./Api";

export default {
<<<<<<< HEAD
  create(data) {
    return api().post("/invoices", data, {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    });

    //  data: {
    //     "name": "email recipient: subject 3",
    //     "invoicenumber": "20918392905",
    //     "total": 200000,
    //     "po": "3820201",
    //     "vat": "6500",
    //     "datesubmited": "2020-08-09",
    //     "tabledata": {},
    //     "vendors": [
    //       "api submitted vendor"
    //     ],
    //     "user": "2",
    //     "comments": [
    //       ""
    //     ],
    //     "Type": "invoice",
    //     "created_by": "22/05/21",
    //     "updated_by": ""
    //   }
  },

  createWithToken(token, data) {
    return api().post("/invoices/?token=" + token, data);

    //    data:{
    //     "invoicenumber": "30156789",
    //     "total": 500000,
    //     "po": "po-034949403",
    //     "vat": "23904",
    //     "invoicetype": "invoice",
    //     "datesubmited": "2021-06-01",
    //     "subject": "subject of the invoice"
    //   }
  },

  get(userId) {
    return api().get(
      "/invoices/?user=" + userId,
      {},
      {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      }
    );
  },

  getAll(orgId) {
    return api().get("/invoices/org/" + orgId, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
  },
  getInvoice(id) {
    return api().get("/invoices/" + id, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
  },

  // delete(id) {
  //   return api().delete("/invoices/" + id, data, {
  //     headers: {
  //       authorization: localStorage.getItem("token"),
  //     },
  //   });
  // },
};
=======
    create(data) {
        return api().post("/invoices", data, {
            headers: {
                authorization: localStorage.getItem("token"),
            },
        });

        //  data: {
        //     "name": "email recipient: subject 3",
        //     "invoicenumber": "20918392905",
        //     "total": 200000,
        //     "po": "3820201",
        //     "vat": "6500",
        //     "datesubmited": "2020-08-09",
        //     "tabledata": {},
        //     "vendors": [
        //       "api submitted vendor"
        //     ],
        //     "user": "2",
        //     "comments": [
        //       ""
        //     ],
        //     "Type": "invoice",
        //     "created_by": "22/05/21",
        //     "updated_by": ""
        //   }
    },

    createWithToken(token, data) {
        return api().post("/invoices/?token=" + token, data);

        //    data:{
        //     "invoicenumber": "30156789",
        //     "total": 500000,
        //     "po": "po-034949403",
        //     "vat": "23904",
        //     "invoicetype": "invoice",
        //     "datesubmited": "2021-06-01",
        //     "subject": "subject of the invoice"
        //   }
    },

    get(userId) {
        return api().get(
            "/invoices/?user=" + userId, {}, {
                headers: {
                    authorization: localStorage.getItem("token"),
                },
            }
        );
    },

    getAll(orgId) {
        return api().get("/invoices/org/" + orgId, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        });
    },
    getInvoice(id) {
        return api().get("/invoices/" + id, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        });
    },

    // delete(id) {
    //   return api().delete("/invoices/" + id, data, {
    //     headers: {
    //       authorization: localStorage.getItem("token"),
    //     },
    //   });
    // },
};
>>>>>>> 0108695badfe21a4a8e1ab44c7bbbaefd364beff
