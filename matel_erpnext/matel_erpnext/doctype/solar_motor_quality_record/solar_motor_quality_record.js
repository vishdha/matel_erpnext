// Copyright (c) 2018, vishal dhayagude and contributors
// For license information, please see license.txt

frappe.ui.form.on('Solar Motor Quality Record', {
	onload: function(frm) {
		cur_frm.add_fetch('item_code', 'item_name','item_name')
	}
});

frappe.ui.form.on('Load Condition', {
	idc: function(frm, cdt, cdn){
		// Calculate when change IDC value
		var d = locals[cdt][cdn];
		if(d.vdc){
			frappe.model.set_value(cdt, cdn, "pdc_kw", d.idc * d.vdc)
			 refresh_field("load_condition");
		}
	},
	vdc:  function(frm, cdt, cdn){
		// Calculate when change VDC value
		var d = locals[cdt][cdn];
		if(d.idc){
			frappe.model.set_value(cdt, cdn, "pdc_kw", d.idc * d.vdc)
			refresh_field("load_conditon");
		}
	}
});


frappe.ui.form.on('No Load Condition', {
	idc: function(frm, cdt, cdn){
		// Calculate when change IDC value
		var d = locals[cdt][cdn];
		if(d.vdc){
			frappe.model.set_value(cdt, cdn, "pdc_kw", d.idc * d.vdc)
			 refresh_field("load_condition");
		}
	},
	vdc:  function(frm, cdt, cdn){
		// Calculate when change VDC value
		var d = locals[cdt][cdn];
		if(d.idc){
			frappe.model.set_value(cdt, cdn, "pdc_kw", d.idc * d.vdc)
			refresh_field("no_load_conditon");
		}
	}
});