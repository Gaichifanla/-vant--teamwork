// components/cell-box/cell-box.js
// cell.js
Component({
    properties: {
      checked: {
        type: Boolean,
        value: false
      }
    },
    methods: {
      onCheckboxChange: function(event) {
        this.setData({
          checked: event.detail.value
        });
      }
    }
  });
  