// Copyright (c) 2025, Ekvira Cabs and contributors
// For license information, please see license.txt

frappe.ui.form.on("Drivers", {
	refresh(frm) {
        if (!frm.doc.is_active) {
                frm.add_custom_button(__("Activate Driver"), () => {
                    frappe.confirm('Are you sure you want to activate this driver?',
                        () => {
                            frm.set_value("is_active", 1);
                            frm.save()
                                .then(() => {
                                    frappe.show_alert({
                                        message: __('Driver Activated'),
                                        indicator: 'green'
                                    });
                                })
                                .catch((err) => {
                                    frappe.show_alert({
                                        message: __('Failed to activate driver'),
                                        indicator: 'red'
                                    });
                                    console.error('Save failed:', err);
                                });
                        });
                }, "Actions");
            } else {
                frm.add_custom_button(__("Deactivate Driver"), () => {
                    frappe.confirm('Are you sure you want to deactivate this driver?',
                        () => {
                            frm.set_value("is_active", 0);
                            frm.save()
                                .then(() => {
                                    frappe.show_alert({
                                        message: __('Driver Deactivated'),
                                        indicator: 'red'
                                    });
                                })
                                .catch((err) => {
                                    frappe.show_alert({
                                        message: __('Failed to deactivate driver'),
                                        indicator: 'orange'
                                    });
                                    console.error('Save failed:', err);
                                });
                        });
                }, "Actions");

        }   

	},
});