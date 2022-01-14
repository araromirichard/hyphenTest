import api from "./Api";

export default {
  sendInvoice(invoice) {
    return api.post("/ocrs/?token=" + localStorage.getItem("token"), invoice);
    // invoice:{
    //     "pbot_id": "pbot_1629927139503",
    //     "status": "successful",
    //     "exception": 0,
    //     "request": "t855r2kh7l43b23ej3ucug5cjdt3rj9sf51d5r01",
    //     "message": "Invoice extracted successfully",
    //     "data": {
    //         "source": "email",
    //         "due_date": "none",
    //         "total": "73,000.00",
    //         "subtotal": "70,000.00",
    //         "sender": "samson.aligba@gmail.com",
    //         "sender_name": "Samson Aligba ",
    //         "subject": "Fwd: Invoice",
    //         "receiver": "mulaa@process.finance",
    //         "invoicenumber": "ADE/ZARON/250118004",
    //         "vat": "3,000",
    //         "vendorname": "ADE Digital Media Ltd.",
    //         "exception_fields": {},
    //         "image": "dvnm,dbvjhbvhbdvbjhdjhbdvjhdhjddhdvbhdvjhksdvhjdhksv hvj......"
    // }
  },
};
