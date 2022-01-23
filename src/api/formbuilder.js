import axios from "axios";

const apiClient = axios.create({
    baseURL: "https://my-test-json-server.herokuapp.com/",

    withCredentials: false,
    Headers: {
        Accept: "application.json",
        "content-type": "application.json",
    },
});
export default {
    postForm(dataPayload) {
        return apiClient.post("/organID", dataPayload);
    },
};


// data: {
//     "form_title": "Purchase Request Form",
//     "data": {
//         "formConfig": {
//             "headline": "",
//             "subHeadline": "",
//             "isShowHeadline": false,
//             "renderFormTag": false,
//             "formActionURL": "",
//             "formMethod": "POST",
//             "enableServerSideValidation": false,
//             "serverSideValidationEndpoint": ""
//         },
//         "sections": {
//             "section-e22cb6b8-54a5-42f5-bff4-c29149859fa6": {
//                 "uniqueId": "section-e22cb6b8-54a5-42f5-bff4-c29149859fa6",
//                 "headline": "Purchase Request Form",
//                 "headlineAdditionalClass": "",
//                 "subHeadline": "",
//                 "subHeadlineAdditionalClass": "",
//                 "isShowHeadline": true,
//                 "sortOrder": 1,
//                 "type": "normal",
//                 "rows": [],
//                 "controls": [
//                     "control-534cb29a-bf28-4ae3-a5cd-4403eda62240",
//                     "control-4d77fb7c-2d89-480b-8768-d4990ef3b185",
//                     "control-8753a146-78c2-47ab-9d6a-bd38b96dd886",
//                     "control-6a1a40dc-9034-4ae2-8735-0cd52829714b",
//                     "control-0f4247c6-cfc7-4935-9b99-d113bafd6e1a",
//                     "control-22e38019-8d1a-4efb-bca7-484cd5477709",
//                     "control-b27c7a4f-b105-481e-bc09-c2ee1a8bce74",
//                     "control-e28db2dc-d77d-46c9-ab12-54b1aff23a80",
//                     "control-e9f42d91-369b-415e-9edf-6f0e85cc6174",
//                     "control-890437b9-71cf-465f-b1bf-be34a269ad4f",
//                     "control-ba36b738-49a4-4154-9bc3-64fec97c0b45",
//                     "control-901f59d0-12d4-49a9-b22a-bcf00d1e99fd"
//                 ]
//             }
//         },
//         "rows": {},
//         "controls": {
//             "control-534cb29a-bf28-4ae3-a5cd-4403eda62240": {
//                 "uniqueId": "control-534cb29a-bf28-4ae3-a5cd-4403eda62240",
//                 "type": "date",
//                 "name": "Date",
//                 "label": "Date",
//                 "subLabel": "",
//                 "isShowLabel": true,
//                 "placeholderText": "dd-mm-yyyy",
//                 "containerClass": "col-md-12 md-layout-item md-size-100",
//                 "additionalContainerClass": "",
//                 "additionalFieldClass": "",
//                 "additionalLabelClass": "",
//                 "defaultValue": "",
//                 "validations": [],
//                 "format": "DD/MM/YYYY",
//                 "firstDay": 0,
//                 "numberOfMonths": 1,
//                 "numberOfColumns": 1,
//                 "minDate": null,
//                 "maxDate": null,
//                 "singleMode": true,
//                 "minDays": 0,
//                 "maxDays": 0,
//                 "returnType": "format"
//             },
//             "control-4d77fb7c-2d89-480b-8768-d4990ef3b185": {
//                 "uniqueId": "control-4d77fb7c-2d89-480b-8768-d4990ef3b185",
//                 "type": "input",
//                 "name": "vendorName",
//                 "label": "Vendor Name",
//                 "subLabel": "",
//                 "isShowLabel": true,
//                 "placeholderText": "Vendor Name",
//                 "containerClass": "col-md-12 md-layout-item md-size-100",
//                 "additionalContainerClass": "",
//                 "additionalFieldClass": "",
//                 "additionalLabelClass": "",
//                 "defaultValue": "",
//                 "validations": [],
//                 "typeAttribute": "text"
//             },
//             "control-8753a146-78c2-47ab-9d6a-bd38b96dd886": {
//                 "uniqueId": "control-8753a146-78c2-47ab-9d6a-bd38b96dd886",
//                 "type": "input",
//                 "name": "vendorAddress",
//                 "label": "Vendor Address",
//                 "subLabel": "",
//                 "isShowLabel": true,
//                 "placeholderText": "Street Address",
//                 "containerClass": "col-md-12 md-layout-item md-size-100",
//                 "additionalContainerClass": "",
//                 "additionalFieldClass": "",
//                 "additionalLabelClass": "",
//                 "defaultValue": "",
//                 "validations": [],
//                 "typeAttribute": "text"
//             },
//             "control-0f4247c6-cfc7-4935-9b99-d113bafd6e1a": {
//                 "uniqueId": "control-0f4247c6-cfc7-4935-9b99-d113bafd6e1a",
//                 "type": "input",
//                 "name": "vendorEmail",
//                 "label": "Vendor Email",
//                 "subLabel": "",
//                 "isShowLabel": true,
//                 "placeholderText": "Enter  Vendor Email",
//                 "containerClass": "col-md-12 md-layout-item md-size-100",
//                 "additionalContainerClass": "",
//                 "additionalFieldClass": "",
//                 "additionalLabelClass": "",
//                 "defaultValue": "",
//                 "validations": [{
//                     "ruleType": "isEmail",
//                     "errorMessage": "Wrong email address format",
//                     "additionalValue": ""
//                 }],
//                 "typeAttribute": "text"
//             },
//             "control-6a1a40dc-9034-4ae2-8735-0cd52829714b": {
//                 "uniqueId": "control-6a1a40dc-9034-4ae2-8735-0cd52829714b",
//                 "type": "input",
//                 "name": "vendorPhoneNumber",
//                 "label": "Vendor Phone Number",
//                 "subLabel": "",
//                 "isShowLabel": true,
//                 "placeholderText": "+23470000000000",
//                 "containerClass": "col-md-12 md-layout-item md-size-100",
//                 "additionalContainerClass": "",
//                 "additionalFieldClass": "",
//                 "additionalLabelClass": "",
//                 "defaultValue": "",
//                 "validations": [],
//                 "typeAttribute": "text"
//             },
//             "control-b27c7a4f-b105-481e-bc09-c2ee1a8bce74": {
//                 "uniqueId": "control-b27c7a4f-b105-481e-bc09-c2ee1a8bce74",
//                 "type": "input",
//                 "name": "shipToAddress",
//                 "label": "Ship To Address",
//                 "subLabel": "",
//                 "isShowLabel": true,
//                 "placeholderText": "Ship To Address",
//                 "containerClass": "col-md-12 md-layout-item md-size-100",
//                 "additionalContainerClass": "",
//                 "additionalFieldClass": "",
//                 "additionalLabelClass": "",
//                 "defaultValue": "",
//                 "validations": [],
//                 "typeAttribute": "text"
//             },
//             "control-901f59d0-12d4-49a9-b22a-bcf00d1e99fd": {
//                 "uniqueId": "control-901f59d0-12d4-49a9-b22a-bcf00d1e99fd",
//                 "type": "button",
//                 "name": "",
//                 "label": "Submit",
//                 "subLabel": "",
//                 "isShowLabel": false,
//                 "placeholderText": "",
//                 "containerClass": "col-md-12 md-layout-item md-size-100",
//                 "additionalContainerClass": "",
//                 "additionalFieldClass": "",
//                 "additionalLabelClass": "",
//                 "defaultValue": "",
//                 "validations": [],
//                 "buttonClass": "btn btn-success md-button md-raised md-success md-theme-default",
//                 "buttonType": "button",
//                 "emitEventCode": "",
//                 "emitEventData": "",
//                 "isRunValidation": false
//             },
//             "control-22e38019-8d1a-4efb-bca7-484cd5477709": {
//                 "uniqueId": "control-22e38019-8d1a-4efb-bca7-484cd5477709",
//                 "type": "input",
//                 "name": "contactPerson",
//                 "label": "Contact Person",
//                 "subLabel": "",
//                 "isShowLabel": true,
//                 "placeholderText": "Contact Person",
//                 "containerClass": "col-md-12 md-layout-item md-size-100",
//                 "additionalContainerClass": "",
//                 "additionalFieldClass": "",
//                 "additionalLabelClass": "",
//                 "defaultValue": "",
//                 "validations": [],
//                 "typeAttribute": "text"
//             },
//             "control-e28db2dc-d77d-46c9-ab12-54b1aff23a80": {
//                 "uniqueId": "control-e28db2dc-d77d-46c9-ab12-54b1aff23a80",
//                 "type": "input",
//                 "name": "contactEmail",
//                 "label": "Contact Email",
//                 "subLabel": "",
//                 "isShowLabel": true,
//                 "placeholderText": "Contact Email",
//                 "containerClass": "col-md-12 md-layout-item md-size-100",
//                 "additionalContainerClass": "",
//                 "additionalFieldClass": "",
//                 "additionalLabelClass": "",
//                 "defaultValue": "",
//                 "validations": [{
//                     "ruleType": "isEmail",
//                     "errorMessage": "Wrong email address format",
//                     "additionalValue": ""
//                 }],
//                 "typeAttribute": "text"
//             },
//             "control-e9f42d91-369b-415e-9edf-6f0e85cc6174": {
//                 "uniqueId": "control-e9f42d91-369b-415e-9edf-6f0e85cc6174",
//                 "type": "input",
//                 "name": "contactNumber",
//                 "label": "Contact Number",
//                 "subLabel": "",
//                 "isShowLabel": true,
//                 "placeholderText": "+234700000000",
//                 "containerClass": "col-md-12 md-layout-item md-size-100",
//                 "additionalContainerClass": "",
//                 "additionalFieldClass": "",
//                 "additionalLabelClass": "",
//                 "defaultValue": "",
//                 "validations": [],
//                 "typeAttribute": "text"
//             },
//             "control-890437b9-71cf-465f-b1bf-be34a269ad4f": {
//                 "uniqueId": "control-890437b9-71cf-465f-b1bf-be34a269ad4f",
//                 "type": "input",
//                 "name": "courier",
//                 "label": "Courier",
//                 "subLabel": "",
//                 "isShowLabel": true,
//                 "placeholderText": "",
//                 "containerClass": "col-md-12 md-layout-item md-size-100",
//                 "additionalContainerClass": "",
//                 "additionalFieldClass": "",
//                 "additionalLabelClass": "",
//                 "defaultValue": "",
//                 "validations": [],
//                 "typeAttribute": "text"
//             },
//             "control-ba36b738-49a4-4154-9bc3-64fec97c0b45": {
//                 "uniqueId": "control-ba36b738-49a4-4154-9bc3-64fec97c0b45",
//                 "type": "input",
//                 "name": "shipping",
//                 "label": "Shipping Via",
//                 "subLabel": "",
//                 "isShowLabel": true,
//                 "placeholderText": "",
//                 "containerClass": "col-md-12 md-layout-item md-size-100",
//                 "additionalContainerClass": "",
//                 "additionalFieldClass": "",
//                 "additionalLabelClass": "",
//                 "defaultValue": "",
//                 "validations": [],
//                 "typeAttribute": "text"
//             }
//         }
//     },
//     "is_private": true,
//     "id": 1,
//     "form_name": "Unknown Type: uid"
// }