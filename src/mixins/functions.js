export default {
    data() {
        return {
            field_names: null,
        };
    },
    methods: {
        checkFieldNames(formObj) {
            var controlsObject = formObj;

            const newArray = Object.keys(controlsObject).map((key) => {
                return {
                    label: controlsObject[key].label,
                    key: controlsObject[key].name,
                    type: controlsObject[key].type,
                    options: controlsObject[key].items,
                };
            });
            // console.log(JSON.stringify(newArray, null, 2));

            const newObj = Object.assign({}, newArray);
            // if (this.field_names == null) {
            //   this.field_names = Object.values(newObj);
            // }
            this.field_names = Object.values(newObj);
            //   console.log(this.field_names);
        },
    },
};