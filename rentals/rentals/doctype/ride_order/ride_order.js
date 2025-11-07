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

        if (frm.doc.status === "New") {
            frm.add_custom_button(__("Accept"), () => {
                frappe.confirm('Are you sure you want to accept this ride?',
                    () => {
                        frm.set_value("status", "Accepted");
                        frm.save()
                            .then(() => {
                                frappe.show_alert({
                                    message: __('Ride Accepted'),
                                    indicator: 'green'
                                });
                            })
                            .catch((err) => {
                                frappe.show_alert({
                                    message: __('Failed to accept ride'),
                                    indicator: 'red'
                                });
                                console.error('Save failed:', err);
                            });
                    });
            }, "Actions");

            frm.add_custom_button(__("Reject"), () => {
                frappe.confirm('Are you sure you want to reject this ride?',
                    () => {
                        frm.set_value("status", "Rejected");
                        frm.save()
                            .then(() => {
                                frappe.show_alert({
                                    message: __('Ride Rejected'),
                                    indicator: 'red'
                                });
                            })
                            .catch((err) => {
                                frappe.show_alert({
                                    message: __('Failed to reject ride'),
                                    indicator: 'orange'
                                });
                                console.error('Save failed:', err);
                            });
                    });
            }, "Actions");
        }
    },
    status(frm) {
        console.log("Status Changed!");
        frm.refresh();
    }
});
