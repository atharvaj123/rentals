// Copyright (c) 2025, Ekvira Cabs and contributors
// For license information, please see license.txt

frappe.ui.form.on("Ride Booking", {
	refresh(frm) {

	},
    rate(frm) {
        // Recalculate Total
        frm.trigger("update_total_amount");
    },
    update_total_amount(frm) {
        let total_d = 0;
        for (let item of frm.doc.items) {
            //console.log(item.distance)
            total_d += item.distance;
        }
        
        const amount  = frm.doc.rate * total_d;
        frm.set_value("total_amount", amount);
    }   
});

frappe.ui.form.on('Ride Booking Item', {
	refresh(frm) {
		// your code here
	},
    distance(frm, cdt, cdn) {
        // console.log(cdt, cdn);
        // my_child = console.log(frappe.get_doc(cdt,cdn));
        // frappe.model.set_value(cdt, cdn,"source", "Updated Source")
        frm.trigger("update_total_amount");
    },
    items_remove(frm) {
        frm.trigger("update_total_amount");
    }
})
