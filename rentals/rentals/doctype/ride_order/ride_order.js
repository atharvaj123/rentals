// Copyright (c) 2025, Ekvira Cabs and contributors
// For license information, please see license.txt

frappe.ui.form.on("Ride Order", {
    onload(frm) {
            console.log("Running load...");
        },
    setup(frm) {
         console.log("Setup...");
    },
	refresh(frm) {
         console.log("On refresh...");

        if(frm.doc.status === "New") {
            frm.add_custom_button("Accept", () => {
                // Status=> Accepted
                frm.set_value("status","Accepted");
                // Save
                frm.save();
            }, "Actions")

            frm.add_custom_button("Reject", () => {
                // Status=> Accepted
                frm.set_value("status","Rejected");
                // Save
                frm.save();
            }, "Actions")
        }
	},
    status(frm) {
        console.log("Status Changed!");
    }
});
