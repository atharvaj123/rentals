// Copyright (c) 2025, Ekvira Cabs and contributors
// For license information, please see license.txt

frappe.ui.form.on("Vehicles", {
	refresh(frm) {

	},
    get_summary(frm) {
        frm.get_field("summary").$wrapper.append("<h1>Summary</h>")
    }
});
